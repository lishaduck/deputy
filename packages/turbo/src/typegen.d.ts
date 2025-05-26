/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

declare module 'eslint' {
  namespace Linter {
    interface RulesRecord extends RuleOptions {}
  }
}

export interface RuleOptions {
}

/* ======= Declarations ======= */

declare module "@eslint-deputy/define-config" {
  interface RulesRecord extends RuleOptions {}
}
