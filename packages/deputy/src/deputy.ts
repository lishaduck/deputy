import { defu } from "defu";
import type { Linter } from "eslint/universal";
import { composer, type FlatConfigComposer } from "eslint-flat-config-utils";

import { restrictedSyntax } from "./common/restricted.ts";
import { packageConfigs, rootConfigs } from "./configs/index.ts";
import type {
  DeputyConfigOptions,
  DeputyOptions,
  DeputyResolvedOptions,
  Extension,
  ExtensionBag,
  GlobBag,
} from "./options.ts";
import type {} from "./typegen.d.ts";

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
        restricted: {
          globals: [],
          properties: [],
          syntax: restrictedSyntax,
        },
      },
      skipHeavyRules: false,
    } satisfies DeputyResolvedOptions,
  ) as DeputyResolvedOptions;
}

const defaultJs = [".js", ".mjs", ".cjs"] as const;
const defaultTs = [".ts", ".mts", ".cts"] as const;

function extensionsToGlob(extensions: readonly Extension[]): string {
  return `**/*.{${extensions.map((extension) => extension.slice(1)).join(",")}}`;
}

function extensionsBagToGlob(extensionsBag: ExtensionBag): GlobBag {
  return {
    ecma: extensionsToGlob(extensionsBag.ecma),

    js: extensionsToGlob(extensionsBag.js),
    ts: extensionsToGlob(extensionsBag.ts),

    dts: extensionsToGlob(extensionsBag.dts),

    get configs() {
      return this.ecma.replace("**/*.", "**/*.config.");
    },
  };
}

function resolveOptions(options: DeputyResolvedOptions): DeputyConfigOptions {
  const domainExtensions = options.domains.flatMap(
    (domain) => domain.additionalExtensions ?? [],
  );

  const extraTsExtensions = domainExtensions.flatMap(
    (extraExtensions) => extraExtensions.ts ?? [],
  );

  const extensions: ExtensionBag = {
    get ecma() {
      return [...this.js, ...this.ts];
    },

    js: [
      ...defaultJs,
      ...domainExtensions.flatMap(
        (extraExtensions) => extraExtensions.js ?? [],
      ),
    ],
    ts: [...defaultTs, ...extraTsExtensions],

    get dts() {
      return this.ts.flatMap(
        (extension) => [`.d${extension}`, `.d.*${extension}`] as const,
      );
    },
  };

  const fileGlobs = extensionsBagToGlob(extensions);

  return {
    ...options,
    extensions,
    extraTsExtensions,
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
export function deputy(options?: DeputyOptions): FlatConfigComposer {
  const resolvedConfig = resolveConfig(options);
  const resolvedOptions = resolveOptions(resolvedConfig);

  return composer(...createConfig(resolvedConfig, resolvedOptions));
}
