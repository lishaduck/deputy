import type { Linter } from "eslint";
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
  readonly rootDir?: string | undefined;
  readonly ruleConfigurations?: RuleConfigurations | undefined;
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

export interface DeputyResolvedOptions {
  readonly allowDefaultProject: string[];
  readonly domains: Domain[];
  readonly environment: DeputyEnvironment;
  readonly rootDir: string | undefined;
  readonly ruleConfigurations: Required<ResolvedRuleConfigurations>;
}

export interface DeputyConfigOptions {
  readonly allowDefaultProject: string[];
  readonly environment: DeputyEnvironment;
  readonly fileGlobs: GlobBag;
  readonly rootDir: string | undefined;
  readonly ruleConfigurations: Required<ResolvedRuleConfigurations>;
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
}

export interface ExtensionBag {
  /** These files do not support types. */
  js: Extension[];

  /** These files do support types. */
  ts: Extension[];
}

export type Extension = `.${string}`;

/**
 * @param options Resolved state of the config.
 * @returns An ESLint config to be included.
 */
export type ConfigFactory = (
  options: DeputyConfigOptions,
) => Arrayable<Linter.Config>;

export interface Domain {
  preset?: () => DeputyOptions;

  config?: ConfigFactory;

  additionalExtensions?: ExtensionBag;
}

export interface DeputyEnvironment {
  readonly type?: "app" | "internal" | "lib";

  readonly globals?: (keyof typeof globals | Linter.Globals)[];
}
