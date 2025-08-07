import { defu } from "defu";
import type { Linter } from "eslint/universal";
import { composer, type FlatConfigComposer } from "eslint-flat-config-utils";

import {
  type ConfigWithExtendsArray,
  defineConfig,
} from "@eslint-deputy/define-config";

import * as restricted from "./common/restricted.ts";
import { packageConfigs, rootConfigs } from "./configs/index.ts";
import type {
  DeputyConfigOptions,
  DeputyOptions,
  DeputyResolvedOptions,
  Extension,
  ExtensionBag,
  ExtensionInfo,
  GlobBag,
} from "./options.ts";

function resolveConfig(
  options: DeputyOptions | undefined,
): DeputyResolvedOptions {
  return defu(
    options,
    ...(options?.domains ?? []).map((domain) => domain.preset?.()),
    {
      allowDefaultProject: [],
      domains: [],
      environment: {
        type: "app",
        globals: [],
      },
      internalPattern: undefined,
      rootDir: undefined,
      ruleConfigurations: {
        deprecations: undefined,
        restricted,
      },
      skipHeavyRules: false,
    } satisfies DeputyResolvedOptions,
  ) as DeputyResolvedOptions;
}

function extensionsToGlob(extensions: readonly Extension[]): string {
  return `**/*.{${extensions.map((extension) => extension.slice(1)).join(",")}}`;
}

function extensionsBagToGlob(extensionsBag: ExtensionBag): GlobBag {
  return {
    ecma: extensionsToGlob(extensionsBag.ecma),

    js: extensionsToGlob(extensionsBag.js),
    ts: extensionsToGlob(extensionsBag.ts),

    ambiguousModules: extensionsToGlob(extensionsBag.ambiguousModules),
    cjs: extensionsToGlob(extensionsBag.cjs),
    esm: extensionsToGlob(extensionsBag.esm),

    dts: extensionsToGlob(extensionsBag.dts),

    get configs() {
      return this.ecma.replace("**/*.", "**/*.config.");
    },
  };
}

const baseExtensions = [
  {
    extension: ".js",

    executable: true,
    moduleSystem: "ambiguous",
    types: false,
  },
  {
    extension: ".mjs",

    executable: true,
    moduleSystem: "esm",
    types: false,
  },
  {
    extension: ".cjs",

    executable: true,
    moduleSystem: "cjs",
    types: false,
  },
  {
    extension: ".ts",

    executable: true,
    moduleSystem: "ambiguous",
    types: true,
  },
  {
    extension: ".mts",

    executable: true,
    moduleSystem: "esm",
    types: true,
  },
  {
    extension: ".cts",

    executable: true,
    moduleSystem: "cjs",
    types: true,
  },
] as const satisfies ExtensionInfo[];

function resolveOptions(options: DeputyResolvedOptions): DeputyConfigOptions {
  const domainExtensions = options.domains.flatMap(
    (domain) => domain.additionalExtensions ?? [],
  );
  const extensionsInfo = [...baseExtensions, ...domainExtensions];

  const extensions: ExtensionBag = {
    get ecma() {
      return [...this.js, ...this.ts];
    },

    js: extensionsInfo.flatMap((info) => (info.types ? [] : info.extension)),
    ts: extensionsInfo.flatMap((info) => (info.types ? info.extension : [])),

    ambiguousModules: extensionsInfo.flatMap((info) =>
      info.moduleSystem === "ambiguous" ? info.extension : [],
    ),
    cjs: extensionsInfo.flatMap((info) =>
      info.moduleSystem === "cjs" ? info.extension : [],
    ),
    esm: extensionsInfo.flatMap((info) =>
      info.moduleSystem === "esm" ? info.extension : [],
    ),

    get dts() {
      return extensionsInfo.flatMap((info) =>
        info.types ?
          ([`.d${info.extension}`, `.d.*${info.extension}`] as const)
        : [],
      );
    },
  };

  const fileGlobs = extensionsBagToGlob(extensions);

  return {
    ...options,
    extensions,
    extraTsExtensions: extensionsInfo.flatMap((info) =>
      info.types ? info.extension : [],
    ),
    fileGlobs,
  };
}

function createConfig(
  options: DeputyResolvedOptions,
  configOptions: DeputyConfigOptions,
): Linter.Config[] {
  const configs =
    configOptions.environment.type === "root" ?
      rootConfigs
    : [...packageConfigs, ...options.domains.map((domain) => domain.config)];

  return configs.flatMap((config) => config?.(configOptions) ?? []);
}

/**
 * Configure ESLint.
 *
 * @param options - Configuration and customizations for Deputy.
 * @param configs - Additional ESLint configuration objects.
 * @returns An extensive, opinionated ESLint configuration.
 *
 * @example
 * ```ts
 * import { deputy } from "@eslint-deputy/config"
 *
 * export default deputy();
 * ```
 */
// eslint-disable-next-line @typescript-eslint/promise-function-async -- returns a Composer.
export function deputy(
  options?: DeputyOptions,
  ...configs: ConfigWithExtendsArray[]
): FlatConfigComposer {
  const resolvedConfig = resolveConfig(options);
  const resolvedOptions = resolveOptions(resolvedConfig);

  return composer(
    ...createConfig(resolvedConfig, resolvedOptions),
    ...defineConfig(configs),
  );
}
