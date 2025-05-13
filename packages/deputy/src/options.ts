import type { Linter } from "eslint";
import type globals from "globals";
import type { TypescriptEslintNoDeprecated } from "./typegen.js";
import type { Arrayable } from "eslint-flat-config-utils";
import type { RuleConfig as PropertyRuleConfig } from "eslint-no-restricted/properties";
import type { RuleConfig as SyntaxRuleConfig } from "eslint-no-restricted/syntax";
import type { RuleConfig as GlobalsRuleConfig } from "eslint-no-restricted/globals";

export interface DeputyOptions {
  readonly domains?: Domain[] | undefined;
  readonly environment?: DeputyEnvironment | undefined;
  readonly rootDir?: string | undefined;
  readonly allowDefaultProject?: string[] | undefined;
  readonly ruleConfigurations?: RuleConfigurations | undefined;
}

export interface RuleConfigurations {
  readonly deprecations?: TypescriptEslintNoDeprecated | undefined;
  readonly restricted?: RestrictedConfiguration;
}

export interface RestrictedConfiguration {
  readonly properties?: PropertyRuleConfig[] | undefined;
  readonly syntax?: SyntaxRuleConfig[] | undefined;
  readonly globals?: GlobalsRuleConfig[] | undefined;
}

export interface ResolvedRestrictedConfiguration {
  readonly properties: PropertyRuleConfig[];
  readonly syntax: SyntaxRuleConfig[];
  readonly globals: GlobalsRuleConfig[];
}

export interface ResolvedRuleConfigurations {
  readonly deprecations: TypescriptEslintNoDeprecated | undefined;
  readonly restricted: ResolvedRestrictedConfiguration;
}

export interface DeputyResolvedOptions {
  readonly domains: Domain[];
  readonly environment: DeputyEnvironment;
  readonly rootDir: string | undefined;
  readonly allowDefaultProject: string[];
  readonly ruleConfigurations: Required<ResolvedRuleConfigurations>;
}

export interface DeputyConfigOptions {
  readonly environment: DeputyEnvironment;
  readonly rootDir: string | undefined;
  readonly allowDefaultProject: string[];
  readonly fileGlobs: GlobBag;
  readonly ruleConfigurations: Required<ResolvedRuleConfigurations>;
}

interface GlobBag {
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
 * @returns Config
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
  readonly type: "app" | "library"; // TODO: Wire up

  readonly globals?: (keyof typeof globals | Linter.Globals)[];
}
