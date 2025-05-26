/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

declare module 'eslint' {
  namespace Linter {
    interface RulesRecord extends RuleOptions {}
  }
}

export interface RuleOptions {
  /**
   * Enforce using "catalog:" in `package.json`
   * @see https://github.com/antfu/eslint-plugin-pnpm/blob/main/src/rules/json-enforce-catalog.test.ts
   */
  'pnpm/json-enforce-catalog'?: Linter.RuleEntry<PnpmJsonEnforceCatalog>
  /**
   * Prefer having pnpm settings in `pnpm-workspace.yaml` instead of `package.json`. This would requires pnpm v10.6+, see https://github.com/orgs/pnpm/discussions/9037.
   * @see https://github.com/antfu/eslint-plugin-pnpm/blob/main/src/rules/json-prefer-workspace-settings.test.ts
   */
  'pnpm/json-prefer-workspace-settings'?: Linter.RuleEntry<PnpmJsonPreferWorkspaceSettings>
  /**
   * Enforce using valid catalog in `package.json`
   * @see https://github.com/antfu/eslint-plugin-pnpm/blob/main/src/rules/json-valid-catalog.test.ts
   */
  'pnpm/json-valid-catalog'?: Linter.RuleEntry<PnpmJsonValidCatalog>
  /**
   * Disallow unused catalogs in `pnpm-workspace.yaml`
   * @see https://github.com/antfu/eslint-plugin-pnpm/blob/main/src/rules/yaml-no-duplicate-catalog-item.test.ts
   */
  'pnpm/yaml-no-duplicate-catalog-item'?: Linter.RuleEntry<PnpmYamlNoDuplicateCatalogItem>
  /**
   * Disallow unused catalogs in `pnpm-workspace.yaml`
   * @see https://github.com/antfu/eslint-plugin-pnpm/blob/main/src/rules/yaml-no-unused-catalog-item.test.ts
   */
  'pnpm/yaml-no-unused-catalog-item'?: Linter.RuleEntry<[]>
}

/* ======= Declarations ======= */
// ----- pnpm/json-enforce-catalog -----
/** @internal */
export type PnpmJsonEnforceCatalog = []|[{
  
  allowedProtocols?: string[]
  
  autofix?: boolean
  
  defaultCatalog?: string
  
  reuseExistingCatalog?: boolean
  
  conflicts?: ("new-catalog" | "overrides" | "error")
  
  fields?: string[]
}]
// ----- pnpm/json-prefer-workspace-settings -----
/** @internal */
export type PnpmJsonPreferWorkspaceSettings = []|[{
  
  autofix?: boolean
}]
// ----- pnpm/json-valid-catalog -----
/** @internal */
export type PnpmJsonValidCatalog = []|[{
  
  autoInsert?: boolean
  
  autoInsertDefaultSpecifier?: string
  
  autofix?: boolean
  
  enforceNoConflict?: boolean
  
  fields?: unknown[]
}]
// ----- pnpm/yaml-no-duplicate-catalog-item -----
/** @internal */
export type PnpmYamlNoDuplicateCatalogItem = []|[{
  allow?: string[]
}]
declare module "@eslint-deputy/define-config" {
  interface RulesRecord extends RuleOptions {}
}
