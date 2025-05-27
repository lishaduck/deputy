import type { Linter } from "eslint/universal";
import type { Arrayable } from "eslint-flat-config-utils";
import type { RuleConfig as GlobalsRuleConfig } from "eslint-no-restricted/globals";
import type { RuleConfig as PropertyRuleConfig } from "eslint-no-restricted/properties";
import type { RuleConfig as SyntaxRuleConfig } from "eslint-no-restricted/syntax";
import type globals from "globals";

import type { TypescriptEslintNoDeprecated } from "./typegen.js";

export interface DeputyOptions {
  readonly allowDefaultProject?: string[] | undefined;
  readonly domains?: Domain[] | undefined;
  readonly environment?: DeputyEnvironment | undefined;
  readonly internalPattern?: string | undefined;
  readonly rootDir?: string | undefined;
  readonly ruleConfigurations?: RuleConfigurations | undefined;
  readonly skipHeavyRules?: boolean | undefined;
}

export interface RuleConfigurations {
  readonly deprecations?: DeprecatedConfiguration;
  readonly restricted?: RestrictedConfiguration;
}

export interface RestrictedConfiguration {
  readonly globals?: GlobalsRuleConfig[] | undefined;
  readonly properties?: PropertyRuleConfig[] | undefined;
  readonly syntax?: SyntaxRuleConfig[] | undefined;
}

export type DeprecatedConfiguration =
  | Exclude<TypescriptEslintNoDeprecated, []>[0]["allow"]
  | undefined;

export interface ResolvedRestrictedConfiguration {
  readonly globals: GlobalsRuleConfig[];
  readonly properties: PropertyRuleConfig[];
  readonly syntax: SyntaxRuleConfig[];
}

export interface ResolvedRuleConfigurations {
  readonly deprecations: DeprecatedConfiguration;
  readonly restricted: ResolvedRestrictedConfiguration;
}

interface DeputyOptionsBase {
  readonly allowDefaultProject: string[];
  readonly environment: Required<DeputyEnvironment>;
  readonly internalPattern: string | undefined;
  readonly rootDir: string | undefined;
  readonly ruleConfigurations: ResolvedRuleConfigurations;
  readonly skipHeavyRules: boolean;
}

export interface DeputyResolvedOptions extends DeputyOptionsBase {
  readonly domains: Domain[];
}

export interface DeputyConfigOptions extends DeputyOptionsBase {
  readonly extensions: ExtensionBag;
  readonly fileGlobs: GlobBag;
  readonly extraTsExtensions: Extension[];
}

export interface GlobBag {
  /**
   * Both JS and TS.
   *
   * And yes, I know that TS isn’t ECMA.
   */
  ecma: string;

  /** These files do not support types. */
  js: string;

  /** These files do support types. */
  ts: string;

  /** These files only support types. */
  dts: string;

  /** These files are configurations. */
  configs: string;
}

export interface ExtensionBag {
  /**
   * Both JS and TS.
   *
   * And yes, I know that TS isn’t ECMA.
   */
  ecma: readonly Extension[];

  /** These files do not support types. */
  js: readonly Extension[];

  /** These files do support types. */
  ts: readonly Extension[];

  /** These files only support types. */
  dts: readonly Extension[];
}

export type Extension = `.${string}`;

/**
 * @param options - Resolved state of the config.
 * @returns An ESLint config to be included.
 */
export type ConfigFactory = (
  options: DeputyConfigOptions,
) => Arrayable<Linter.Config>;

export interface Domain {
  preset?: () => DeputyOptions;

  config?: ConfigFactory;

  additionalExtensions?: Partial<Pick<ExtensionBag, "js" | "ts">>;
}

export type PackageType = "app" | "internal" | "library" | "root";

export interface DeputyEnvironment {
  readonly type?: PackageType;

  readonly globals?: (keyof typeof globals | Linter.Globals)[];
}
