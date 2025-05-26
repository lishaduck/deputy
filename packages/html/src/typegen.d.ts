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
   * Enforce newline between attributes
   */
  'html/attrs-newline'?: Linter.RuleEntry<HtmlAttrsNewline>
  /**
   * Enforce newline between elements.
   */
  'html/element-newline'?: Linter.RuleEntry<HtmlElementNewline>
  /**
   * Enforce consistent naming id attributes
   */
  'html/id-naming-convention'?: Linter.RuleEntry<HtmlIdNamingConvention>
  /**
   * Enforce consistent indentation
   */
  'html/indent'?: Linter.RuleEntry<HtmlIndent>
  /**
   * Enforce to use lowercase for tag and attribute names.
   */
  'html/lowercase'?: Linter.RuleEntry<[]>
  /**
   * Enforce element maximum depth
   */
  'html/max-element-depth'?: Linter.RuleEntry<HtmlMaxElementDepth>
  /**
   * Disallow to use of abstract roles
   */
  'html/no-abstract-roles'?: Linter.RuleEntry<[]>
  /**
   * Disallow to use of accesskey attribute
   */
  'html/no-accesskey-attrs'?: Linter.RuleEntry<[]>
  /**
   * Disallow to use aria-hidden attributes on the `body` element.
   */
  'html/no-aria-hidden-body'?: Linter.RuleEntry<[]>
  /**
   * Disallow to use duplicate attributes
   */
  'html/no-duplicate-attrs'?: Linter.RuleEntry<[]>
  /**
   * Disallow to use duplicate class
   */
  'html/no-duplicate-class'?: Linter.RuleEntry<[]>
  /**
   * Disallow to use duplicate id
   */
  'html/no-duplicate-id'?: Linter.RuleEntry<[]>
  /**
   * Disallow an extra spacing around attributes
   */
  'html/no-extra-spacing-attrs'?: Linter.RuleEntry<HtmlNoExtraSpacingAttrs>
  /**
   * Disallow unnecessary consecutive spaces
   */
  'html/no-extra-spacing-text'?: Linter.RuleEntry<HtmlNoExtraSpacingText>
  /**
   * Disallows the use of heading elements inside <button>.
   */
  'html/no-heading-inside-button'?: Linter.RuleEntry<[]>
  /**
   * Disallow using inline style
   */
  'html/no-inline-styles'?: Linter.RuleEntry<[]>
  /**
   * Disallows use of invalid role.
   */
  'html/no-invalid-role'?: Linter.RuleEntry<[]>
  /**
   * Disallow multiple empty lines
   */
  'html/no-multiple-empty-lines'?: Linter.RuleEntry<HtmlNoMultipleEmptyLines>
  /**
   * Disallow multiple `<h1></h1>`.
   */
  'html/no-multiple-h1'?: Linter.RuleEntry<[]>
  /**
   * Disallows nested interactive elements
   */
  'html/no-nested-interactive'?: Linter.RuleEntry<[]>
  /**
   * Disallow use of `user-scalable=no` in `<meta name="viewport">`.
   */
  'html/no-non-scalable-viewport'?: Linter.RuleEntry<[]>
  /**
   * Disallow to use obsolete elements in HTML5
   */
  'html/no-obsolete-tags'?: Linter.RuleEntry<[]>
  /**
   * Disallow use of positive `tabindex`.
   */
  'html/no-positive-tabindex'?: Linter.RuleEntry<[]>
  /**
   * Disallow specified attributes
   */
  'html/no-restricted-attr-values'?: Linter.RuleEntry<HtmlNoRestrictedAttrValues>
  /**
   * Disallow specified attributes
   */
  'html/no-restricted-attrs'?: Linter.RuleEntry<HtmlNoRestrictedAttrs>
  /**
   * Enforce to omit type attributes for style sheets and scripts
   */
  'html/no-script-style-type'?: Linter.RuleEntry<[]>
  /**
   * Disallow skipping heading levels
   */
  'html/no-skip-heading-levels'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of unsafe `target='_blank'`
   */
  'html/no-target-blank'?: Linter.RuleEntry<[]>
  /**
   * Disallow trailing whitespace at the end of lines
   */
  'html/no-trailing-spaces'?: Linter.RuleEntry<[]>
  /**
   * Prefer to use HTTPS for embedded resources
   */
  'html/prefer-https'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent quoting attributes with double(") or single(')
   */
  'html/quotes'?: Linter.RuleEntry<HtmlQuotes>
  /**
   * Require specified attributes
   */
  'html/require-attrs'?: Linter.RuleEntry<HtmlRequireAttrs>
  /**
   * Require use of button element with a valid type attribute.
   */
  'html/require-button-type'?: Linter.RuleEntry<[]>
  /**
   * Require closing tags.
   */
  'html/require-closing-tags'?: Linter.RuleEntry<HtmlRequireClosingTags>
  /**
   * Require `<!DOCTYPE HTML>` in html,
   */
  'html/require-doctype'?: Linter.RuleEntry<[]>
  /**
   * Enforces that some elements (img, iframe) have explicitly defined width and height attributes.
   */
  'html/require-explicit-size'?: Linter.RuleEntry<HtmlRequireExplicitSize>
  /**
   * Require `method` attribute in `<form>`
   */
  'html/require-form-method'?: Linter.RuleEntry<[]>
  /**
   * Require `title` in `<frame>`, `<iframe>`
   */
  'html/require-frame-title'?: Linter.RuleEntry<[]>
  /**
   * Require `alt` attribute at `<img>` tag
   */
  'html/require-img-alt'?: Linter.RuleEntry<HtmlRequireImgAlt>
  /**
   * Enforces use of label for form elements(`input`, `textarea`, `select`)
   */
  'html/require-input-label'?: Linter.RuleEntry<[]>
  /**
   * Require `lang` attribute at `<html>` tag
   */
  'html/require-lang'?: Linter.RuleEntry<[]>
  /**
   * Enforce `<li>` to be in  `<ul>`, `<ol>` or `<menu>`.
   */
  'html/require-li-container'?: Linter.RuleEntry<[]>
  /**
   * Enforce to use `<meta charset="...">` in `<head>`
   */
  'html/require-meta-charset'?: Linter.RuleEntry<[]>
  /**
   * Require use of `<meta name="description">` in `<head>`
   */
  'html/require-meta-description'?: Linter.RuleEntry<[]>
  /**
   * Enforce to use `<meta name="viewport">` in `<head>`
   */
  'html/require-meta-viewport'?: Linter.RuleEntry<[]>
  /**
   * Enforce to use `<meta name="viewport">` in `<head>`
   */
  'html/require-open-graph-protocol'?: Linter.RuleEntry<HtmlRequireOpenGraphProtocol>
  /**
   * Require `<title><title/>` in the `<head><head/>`
   */
  'html/require-title'?: Linter.RuleEntry<[]>
  /**
   * Enforce attributes alphabetical sorting
   */
  'html/sort-attrs'?: Linter.RuleEntry<HtmlSortAttrs>
  /**
   * Enforce the use of baseline features.
   */
  'html/use-baseline'?: Linter.RuleEntry<HtmlUseBaseline>
}

/* ======= Declarations ======= */
// ----- html/attrs-newline -----
/** @internal */
export type HtmlAttrsNewline = []|[{
  closeStyle?: ("newline" | "sameline")
  ifAttrsMoreThan?: number
  [k: string]: unknown | undefined
}]
// ----- html/element-newline -----
/** @internal */
export type HtmlElementNewline = []|[{
  inline?: string[]
  skip?: string[]
  [k: string]: unknown | undefined
}]
// ----- html/id-naming-convention -----
/** @internal */
export type HtmlIdNamingConvention = []|[("camelCase" | "snake_case" | "PascalCase" | "kebab-case" | "regex")]|[("camelCase" | "snake_case" | "PascalCase" | "kebab-case" | "regex"), {
  pattern?: string
  flags?: string
}]
// ----- html/indent -----
/** @internal */
export type HtmlIndent = []|[("tab" | number)]|[("tab" | number), {
  Attribute?: number
  tagChildrenIndent?: {
    [k: string]: number
  }
  [k: string]: unknown | undefined
}]
// ----- html/max-element-depth -----
/** @internal */
export type HtmlMaxElementDepth = []|[{
  max: number
}]
// ----- html/no-extra-spacing-attrs -----
/** @internal */
export type HtmlNoExtraSpacingAttrs = []|[{
  disallowInAssignment?: boolean
  disallowMissing?: boolean
  disallowTabs?: boolean
  enforceBeforeSelfClose?: boolean
  [k: string]: unknown | undefined
}]
// ----- html/no-extra-spacing-text -----
/** @internal */
export type HtmlNoExtraSpacingText = []|[{
  skip?: string[]
}]
// ----- html/no-multiple-empty-lines -----
/** @internal */
export type HtmlNoMultipleEmptyLines = []|[{
  max: number
}]
// ----- html/no-restricted-attr-values -----
/** @internal */
export type HtmlNoRestrictedAttrValues = {
  attrPatterns: string[]
  attrValuePatterns: string[]
  message?: string
  [k: string]: unknown | undefined
}[]
// ----- html/no-restricted-attrs -----
/** @internal */
export type HtmlNoRestrictedAttrs = {
  tagPatterns: string[]
  attrPatterns: string[]
  message?: string
  [k: string]: unknown | undefined
}[]
// ----- html/quotes -----
/** @internal */
export type HtmlQuotes = []|[("single" | "double")]
// ----- html/require-attrs -----
/** @internal */
export type HtmlRequireAttrs = {
  tag: string
  attr: string
  value?: string
}[]
// ----- html/require-closing-tags -----
/** @internal */
export type HtmlRequireClosingTags = []|[{
  selfClosing?: ("always" | "never")
  selfClosingCustomPatterns?: string[]
}]
// ----- html/require-explicit-size -----
/** @internal */
export type HtmlRequireExplicitSize = []|[{
  allowClass?: string[]
  allowId?: string[]
}]
// ----- html/require-img-alt -----
/** @internal */
export type HtmlRequireImgAlt = []|[{
  substitute?: string[]
  [k: string]: unknown | undefined
}]
// ----- html/require-open-graph-protocol -----
/** @internal */
export type HtmlRequireOpenGraphProtocol = []|[string[]]
// ----- html/sort-attrs -----
/** @internal */
export type HtmlSortAttrs = []|[{
  priority?: string[]
  [k: string]: unknown | undefined
}]
// ----- html/use-baseline -----
/** @internal */
export type HtmlUseBaseline = []|[{
  available?: (("widely" | "newly") | number)
}]
declare module "@eslint-deputy/define-config" {
  interface RulesRecord extends RuleOptions {}
}
