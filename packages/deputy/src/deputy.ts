import { defu } from "defu";
import type { Linter } from "eslint";
import { composer, type FlatConfigComposer } from "eslint-flat-config-utils";
import type {
  DeputyConfigOptions,
  DeputyOptions,
  DeputyResolvedOptions,
  Extension,
} from "./options.ts";
import type {} from "./typegen.d.ts";
import { configs } from "./configs/index.ts";
import { restrictedSyntax } from "./common/restricted.ts";

function resolveConfig(
  options: DeputyOptions | undefined,
): DeputyResolvedOptions {
  return defu(
    options,
    ...(options?.domains ?? []).map((domain) => domain.preset?.()),
    {
      allowDefaultProject: [],
      domains: [],
      environment: {},
      rootDir: undefined,
      ruleConfigurations: {
        deprecations: undefined,
        restricted: {
          globals: [],
          properties: [],
          syntax: restrictedSyntax,
        },
      },
    } satisfies DeputyResolvedOptions,
  ) as DeputyResolvedOptions;
}

function extensionsToGlob(extensions: readonly Extension[]): string {
  return `**/*.{${extensions.map((extension) => extension.slice(1)).join(",")}}`;
}

function resolveOptions(options: DeputyResolvedOptions): DeputyConfigOptions {
  const domainExtensions = options.domains.flatMap(
    (domain) => domain.additionalExtensions ?? [],
  );

  const extensions = {
    get ecma() {
      return [...this.js, ...this.ts];
    },
    js: [
      ".js",
      ".mjs",
      ".cjs",
      ...domainExtensions.flatMap((extraExtensions) => extraExtensions.js),
    ],
    ts: [
      ".ts",
      ".mts",
      ".cts",
      ...domainExtensions.flatMap((extraExtensions) => extraExtensions.ts),
    ],
  } as const;

  return {
    ...options,
    fileGlobs: {
      ecma: extensionsToGlob(extensions.ecma),
      js: extensionsToGlob(extensions.js),
      ts: extensionsToGlob(extensions.ts),
      dts: extensionsToGlob(
        extensions.ts.flatMap(
          (extension) => [`.d${extension}`, `.d.*${extension}`] as const,
        ),
      ),
    },
  };
}

function createConfig(
  options: DeputyResolvedOptions,
  configOptions: DeputyConfigOptions,
): Linter.Config[] {
  return [
    ...configs,
    ...options.domains.map((domain) => domain.config),
  ].flatMap((config) => config?.(configOptions) ?? []);
}

// eslint-disable-next-line @typescript-eslint/promise-function-async -- returns a Composer.
export function deputy(options?: DeputyOptions): FlatConfigComposer {
  const resolvedConfig = resolveConfig(options);
  const resolvedOptions = resolveOptions(resolvedConfig);

  return composer(...createConfig(resolvedConfig, resolvedOptions));
}
