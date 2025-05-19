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
   * require a `eslint-enable` comment for every `eslint-disable` comment
   * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html
   */
  '@eslint-community/eslint-comments/disable-enable-pair'?: Linter.RuleEntry<EslintCommunityEslintCommentsDisableEnablePair>
  /**
   * disallow a `eslint-enable` comment for multiple `eslint-disable` comments
   * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-aggregating-enable.html
   */
  '@eslint-community/eslint-comments/no-aggregating-enable'?: Linter.RuleEntry<[]>
  /**
   * disallow duplicate `eslint-disable` comments
   * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-duplicate-disable.html
   */
  '@eslint-community/eslint-comments/no-duplicate-disable'?: Linter.RuleEntry<[]>
  /**
   * disallow `eslint-disable` comments about specific rules
   * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-restricted-disable.html
   */
  '@eslint-community/eslint-comments/no-restricted-disable'?: Linter.RuleEntry<EslintCommunityEslintCommentsNoRestrictedDisable>
  /**
   * disallow `eslint-disable` comments without rule names
   * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unlimited-disable.html
   */
  '@eslint-community/eslint-comments/no-unlimited-disable'?: Linter.RuleEntry<[]>
  /**
   * disallow unused `eslint-disable` comments
   * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html
   */
  '@eslint-community/eslint-comments/no-unused-disable'?: Linter.RuleEntry<[]>
  /**
   * disallow unused `eslint-enable` comments
   * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unused-enable.html
   */
  '@eslint-community/eslint-comments/no-unused-enable'?: Linter.RuleEntry<[]>
  /**
   * disallow ESLint directive-comments
   * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-use.html
   */
  '@eslint-community/eslint-comments/no-use'?: Linter.RuleEntry<EslintCommunityEslintCommentsNoUse>
  /**
   * require include descriptions in ESLint directive-comments
   * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/require-description.html
   */
  '@eslint-community/eslint-comments/require-description'?: Linter.RuleEntry<EslintCommunityEslintCommentsRequireDescription>
  /**
   * Prefer early returns over full-body conditional wrapping in function declarations.
   */
  '@regru/prefer-early-return'?: Linter.RuleEntry<RegruPreferEarlyReturn>
  /**
   * Enforce linebreaks after opening and before closing array brackets
   * @see https://eslint.style/rules/js/array-bracket-newline
   */
  '@stylistic/array-bracket-newline'?: Linter.RuleEntry<StylisticArrayBracketNewline>
  /**
   * Enforce consistent spacing inside array brackets
   * @see https://eslint.style/rules/js/array-bracket-spacing
   */
  '@stylistic/array-bracket-spacing'?: Linter.RuleEntry<StylisticArrayBracketSpacing>
  /**
   * Enforce line breaks after each array element
   * @see https://eslint.style/rules/js/array-element-newline
   */
  '@stylistic/array-element-newline'?: Linter.RuleEntry<StylisticArrayElementNewline>
  /**
   * Require parentheses around arrow function arguments
   * @see https://eslint.style/rules/js/arrow-parens
   */
  '@stylistic/arrow-parens'?: Linter.RuleEntry<StylisticArrowParens>
  /**
   * Enforce consistent spacing before and after the arrow in arrow functions
   * @see https://eslint.style/rules/js/arrow-spacing
   */
  '@stylistic/arrow-spacing'?: Linter.RuleEntry<StylisticArrowSpacing>
  /**
   * Disallow or enforce spaces inside of blocks after opening block and before closing block
   * @see https://eslint.style/rules/ts/block-spacing
   */
  '@stylistic/block-spacing'?: Linter.RuleEntry<StylisticBlockSpacing>
  /**
   * Enforce consistent brace style for blocks
   * @see https://eslint.style/rules/ts/brace-style
   */
  '@stylistic/brace-style'?: Linter.RuleEntry<StylisticBraceStyle>
  /**
   * Require or disallow trailing commas
   * @see https://eslint.style/rules/ts/comma-dangle
   */
  '@stylistic/comma-dangle'?: Linter.RuleEntry<StylisticCommaDangle>
  /**
   * Enforce consistent spacing before and after commas
   * @see https://eslint.style/rules/ts/comma-spacing
   */
  '@stylistic/comma-spacing'?: Linter.RuleEntry<StylisticCommaSpacing>
  /**
   * Enforce consistent comma style
   * @see https://eslint.style/rules/js/comma-style
   */
  '@stylistic/comma-style'?: Linter.RuleEntry<StylisticCommaStyle>
  /**
   * Enforce consistent spacing inside computed property brackets
   * @see https://eslint.style/rules/js/computed-property-spacing
   */
  '@stylistic/computed-property-spacing'?: Linter.RuleEntry<StylisticComputedPropertySpacing>
  /**
   * Enforce consistent line breaks after opening and before closing braces
   * @see https://eslint.style/rules/plus/curly-newline
   */
  '@stylistic/curly-newline'?: Linter.RuleEntry<StylisticCurlyNewline>
  /**
   * Enforce consistent newlines before and after dots
   * @see https://eslint.style/rules/js/dot-location
   */
  '@stylistic/dot-location'?: Linter.RuleEntry<StylisticDotLocation>
  /**
   * Require or disallow newline at the end of files
   * @see https://eslint.style/rules/js/eol-last
   */
  '@stylistic/eol-last'?: Linter.RuleEntry<StylisticEolLast>
  /**
   * Require or disallow spacing between function identifiers and their invocations
   * @see https://eslint.style/rules/ts/function-call-spacing
   */
  '@stylistic/func-call-spacing'?: Linter.RuleEntry<StylisticFuncCallSpacing>
  /**
   * Enforce line breaks between arguments of a function call
   * @see https://eslint.style/rules/js/function-call-argument-newline
   */
  '@stylistic/function-call-argument-newline'?: Linter.RuleEntry<StylisticFunctionCallArgumentNewline>
  /**
   * Require or disallow spacing between function identifiers and their invocations
   * @see https://eslint.style/rules/ts/function-call-spacing
   */
  '@stylistic/function-call-spacing'?: Linter.RuleEntry<StylisticFunctionCallSpacing>
  /**
   * Enforce consistent line breaks inside function parentheses
   * @see https://eslint.style/rules/js/function-paren-newline
   */
  '@stylistic/function-paren-newline'?: Linter.RuleEntry<StylisticFunctionParenNewline>
  /**
   * Enforce consistent spacing around `*` operators in generator functions
   * @see https://eslint.style/rules/js/generator-star-spacing
   */
  '@stylistic/generator-star-spacing'?: Linter.RuleEntry<StylisticGeneratorStarSpacing>
  /**
   * Enforce the location of arrow function bodies
   * @see https://eslint.style/rules/js/implicit-arrow-linebreak
   */
  '@stylistic/implicit-arrow-linebreak'?: Linter.RuleEntry<StylisticImplicitArrowLinebreak>
  /**
   * Enforce consistent indentation
   * @see https://eslint.style/rules/ts/indent
   */
  '@stylistic/indent'?: Linter.RuleEntry<StylisticIndent>
  /**
   * Indentation for binary operators
   * @see https://eslint.style/rules/plus/indent-binary-ops
   */
  '@stylistic/indent-binary-ops'?: Linter.RuleEntry<StylisticIndentBinaryOps>
  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
   * @see https://eslint.style/rules/jsx/jsx-child-element-spacing
   */
  '@stylistic/jsx-child-element-spacing'?: Linter.RuleEntry<[]>
  /**
   * Enforce closing bracket location in JSX
   * @see https://eslint.style/rules/jsx/jsx-closing-bracket-location
   */
  '@stylistic/jsx-closing-bracket-location'?: Linter.RuleEntry<StylisticJsxClosingBracketLocation>
  /**
   * Enforce closing tag location for multiline JSX
   * @see https://eslint.style/rules/jsx/jsx-closing-tag-location
   */
  '@stylistic/jsx-closing-tag-location'?: Linter.RuleEntry<StylisticJsxClosingTagLocation>
  /**
   * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
   * @see https://eslint.style/rules/jsx/jsx-curly-brace-presence
   */
  '@stylistic/jsx-curly-brace-presence'?: Linter.RuleEntry<StylisticJsxCurlyBracePresence>
  /**
   * Enforce consistent linebreaks in curly braces in JSX attributes and expressions
   * @see https://eslint.style/rules/jsx/jsx-curly-newline
   */
  '@stylistic/jsx-curly-newline'?: Linter.RuleEntry<StylisticJsxCurlyNewline>
  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
   * @see https://eslint.style/rules/jsx/jsx-curly-spacing
   */
  '@stylistic/jsx-curly-spacing'?: Linter.RuleEntry<StylisticJsxCurlySpacing>
  /**
   * Enforce or disallow spaces around equal signs in JSX attributes
   * @see https://eslint.style/rules/jsx/jsx-equals-spacing
   */
  '@stylistic/jsx-equals-spacing'?: Linter.RuleEntry<StylisticJsxEqualsSpacing>
  /**
   * Enforce proper position of the first property in JSX
   * @see https://eslint.style/rules/jsx/jsx-first-prop-new-line
   */
  '@stylistic/jsx-first-prop-new-line'?: Linter.RuleEntry<StylisticJsxFirstPropNewLine>
  /**
   * Enforce line breaks before and after JSX elements when they are used as arguments to a function.
   * @see https://eslint.style/rules/jsx/jsx-function-call-newline
   */
  '@stylistic/jsx-function-call-newline'?: Linter.RuleEntry<StylisticJsxFunctionCallNewline>
  /**
   * Enforce JSX indentation. Deprecated, use `indent` rule instead.
   * @see https://eslint.style/rules/jsx/jsx-indent
   * @deprecated
   */
  '@stylistic/jsx-indent'?: Linter.RuleEntry<StylisticJsxIndent>
  /**
   * Enforce props indentation in JSX
   * @see https://eslint.style/rules/jsx/jsx-indent-props
   */
  '@stylistic/jsx-indent-props'?: Linter.RuleEntry<StylisticJsxIndentProps>
  /**
   * Enforce maximum of props on a single line in JSX
   * @see https://eslint.style/rules/jsx/jsx-max-props-per-line
   */
  '@stylistic/jsx-max-props-per-line'?: Linter.RuleEntry<StylisticJsxMaxPropsPerLine>
  /**
   * Require or prevent a new line after jsx elements and expressions.
   * @see https://eslint.style/rules/jsx/jsx-newline
   */
  '@stylistic/jsx-newline'?: Linter.RuleEntry<StylisticJsxNewline>
  /**
   * Require one JSX element per line
   * @see https://eslint.style/rules/jsx/jsx-one-expression-per-line
   */
  '@stylistic/jsx-one-expression-per-line'?: Linter.RuleEntry<StylisticJsxOneExpressionPerLine>
  /**
   * Enforce PascalCase for user-defined JSX components
   * @see https://eslint.style/rules/jsx/jsx-pascal-case
   */
  '@stylistic/jsx-pascal-case'?: Linter.RuleEntry<StylisticJsxPascalCase>
  /**
   * Disallow multiple spaces between inline JSX props
   * @see https://eslint.style/rules/jsx/jsx-props-no-multi-spaces
   */
  '@stylistic/jsx-props-no-multi-spaces'?: Linter.RuleEntry<[]>
  /**
   * Enforce the consistent use of either double or single quotes in JSX attributes
   * @see https://eslint.style/rules/js/jsx-quotes
   */
  '@stylistic/jsx-quotes'?: Linter.RuleEntry<StylisticJsxQuotes>
  /**
   * Disallow extra closing tags for components without children
   * @see https://eslint.style/rules/jsx/jsx-self-closing-comp
   */
  '@stylistic/jsx-self-closing-comp'?: Linter.RuleEntry<StylisticJsxSelfClosingComp>
  /**
   * Enforce props alphabetical sorting
   * @see https://eslint.style/rules/jsx/jsx-sort-props
   */
  '@stylistic/jsx-sort-props'?: Linter.RuleEntry<StylisticJsxSortProps>
  /**
   * Enforce whitespace in and around the JSX opening and closing brackets
   * @see https://eslint.style/rules/jsx/jsx-tag-spacing
   */
  '@stylistic/jsx-tag-spacing'?: Linter.RuleEntry<StylisticJsxTagSpacing>
  /**
   * Disallow missing parentheses around multiline JSX
   * @see https://eslint.style/rules/jsx/jsx-wrap-multilines
   */
  '@stylistic/jsx-wrap-multilines'?: Linter.RuleEntry<StylisticJsxWrapMultilines>
  /**
   * Enforce consistent spacing between property names and type annotations in types and interfaces
   * @see https://eslint.style/rules/ts/key-spacing
   */
  '@stylistic/key-spacing'?: Linter.RuleEntry<StylisticKeySpacing>
  /**
   * Enforce consistent spacing before and after keywords
   * @see https://eslint.style/rules/ts/keyword-spacing
   */
  '@stylistic/keyword-spacing'?: Linter.RuleEntry<StylisticKeywordSpacing>
  /**
   * Enforce position of line comments
   * @see https://eslint.style/rules/js/line-comment-position
   */
  '@stylistic/line-comment-position'?: Linter.RuleEntry<StylisticLineCommentPosition>
  /**
   * Enforce consistent linebreak style
   * @see https://eslint.style/rules/js/linebreak-style
   */
  '@stylistic/linebreak-style'?: Linter.RuleEntry<StylisticLinebreakStyle>
  /**
   * Require empty lines around comments
   * @see https://eslint.style/rules/ts/lines-around-comment
   */
  '@stylistic/lines-around-comment'?: Linter.RuleEntry<StylisticLinesAroundComment>
  /**
   * Require or disallow an empty line between class members
   * @see https://eslint.style/rules/ts/lines-between-class-members
   */
  '@stylistic/lines-between-class-members'?: Linter.RuleEntry<StylisticLinesBetweenClassMembers>
  /**
   * Enforce a maximum line length
   * @see https://eslint.style/rules/js/max-len
   */
  '@stylistic/max-len'?: Linter.RuleEntry<StylisticMaxLen>
  /**
   * Enforce a maximum number of statements allowed per line
   * @see https://eslint.style/rules/js/max-statements-per-line
   */
  '@stylistic/max-statements-per-line'?: Linter.RuleEntry<StylisticMaxStatementsPerLine>
  /**
   * Require a specific member delimiter style for interfaces and type literals
   * @see https://eslint.style/rules/ts/member-delimiter-style
   */
  '@stylistic/member-delimiter-style'?: Linter.RuleEntry<StylisticMemberDelimiterStyle>
  /**
   * Enforce a particular style for multiline comments
   * @see https://eslint.style/rules/js/multiline-comment-style
   */
  '@stylistic/multiline-comment-style'?: Linter.RuleEntry<StylisticMultilineCommentStyle>
  /**
   * Enforce newlines between operands of ternary expressions
   * @see https://eslint.style/rules/js/multiline-ternary
   */
  '@stylistic/multiline-ternary'?: Linter.RuleEntry<StylisticMultilineTernary>
  /**
   * Enforce or disallow parentheses when invoking a constructor with no arguments
   * @see https://eslint.style/rules/js/new-parens
   */
  '@stylistic/new-parens'?: Linter.RuleEntry<StylisticNewParens>
  /**
   * Require a newline after each call in a method chain
   * @see https://eslint.style/rules/js/newline-per-chained-call
   */
  '@stylistic/newline-per-chained-call'?: Linter.RuleEntry<StylisticNewlinePerChainedCall>
  /**
   * Disallow arrow functions where they could be confused with comparisons
   * @see https://eslint.style/rules/js/no-confusing-arrow
   */
  '@stylistic/no-confusing-arrow'?: Linter.RuleEntry<StylisticNoConfusingArrow>
  /**
   * Disallow unnecessary parentheses
   * @see https://eslint.style/rules/ts/no-extra-parens
   */
  '@stylistic/no-extra-parens'?: Linter.RuleEntry<StylisticNoExtraParens>
  /**
   * Disallow unnecessary semicolons
   * @see https://eslint.style/rules/ts/no-extra-semi
   */
  '@stylistic/no-extra-semi'?: Linter.RuleEntry<[]>
  /**
   * Disallow leading or trailing decimal points in numeric literals
   * @see https://eslint.style/rules/js/no-floating-decimal
   */
  '@stylistic/no-floating-decimal'?: Linter.RuleEntry<[]>
  /**
   * Disallow mixed binary operators
   * @see https://eslint.style/rules/js/no-mixed-operators
   */
  '@stylistic/no-mixed-operators'?: Linter.RuleEntry<StylisticNoMixedOperators>
  /**
   * Disallow mixed spaces and tabs for indentation
   * @see https://eslint.style/rules/js/no-mixed-spaces-and-tabs
   */
  '@stylistic/no-mixed-spaces-and-tabs'?: Linter.RuleEntry<StylisticNoMixedSpacesAndTabs>
  /**
   * Disallow multiple spaces
   * @see https://eslint.style/rules/js/no-multi-spaces
   */
  '@stylistic/no-multi-spaces'?: Linter.RuleEntry<StylisticNoMultiSpaces>
  /**
   * Disallow multiple empty lines
   * @see https://eslint.style/rules/js/no-multiple-empty-lines
   */
  '@stylistic/no-multiple-empty-lines'?: Linter.RuleEntry<StylisticNoMultipleEmptyLines>
  /**
   * Disallow all tabs
   * @see https://eslint.style/rules/js/no-tabs
   */
  '@stylistic/no-tabs'?: Linter.RuleEntry<StylisticNoTabs>
  /**
   * Disallow trailing whitespace at the end of lines
   * @see https://eslint.style/rules/js/no-trailing-spaces
   */
  '@stylistic/no-trailing-spaces'?: Linter.RuleEntry<StylisticNoTrailingSpaces>
  /**
   * Disallow whitespace before properties
   * @see https://eslint.style/rules/js/no-whitespace-before-property
   */
  '@stylistic/no-whitespace-before-property'?: Linter.RuleEntry<[]>
  /**
   * Enforce the location of single-line statements
   * @see https://eslint.style/rules/js/nonblock-statement-body-position
   */
  '@stylistic/nonblock-statement-body-position'?: Linter.RuleEntry<StylisticNonblockStatementBodyPosition>
  /**
   * Enforce consistent line breaks after opening and before closing braces
   * @see https://eslint.style/rules/ts/object-curly-newline
   */
  '@stylistic/object-curly-newline'?: Linter.RuleEntry<StylisticObjectCurlyNewline>
  /**
   * Enforce consistent spacing inside braces
   * @see https://eslint.style/rules/ts/object-curly-spacing
   */
  '@stylistic/object-curly-spacing'?: Linter.RuleEntry<StylisticObjectCurlySpacing>
  /**
   * Enforce placing object properties on separate lines
   * @see https://eslint.style/rules/ts/object-property-newline
   */
  '@stylistic/object-property-newline'?: Linter.RuleEntry<StylisticObjectPropertyNewline>
  /**
   * Require or disallow newlines around variable declarations
   * @see https://eslint.style/rules/js/one-var-declaration-per-line
   */
  '@stylistic/one-var-declaration-per-line'?: Linter.RuleEntry<StylisticOneVarDeclarationPerLine>
  /**
   * Enforce consistent linebreak style for operators
   * @see https://eslint.style/rules/js/operator-linebreak
   */
  '@stylistic/operator-linebreak'?: Linter.RuleEntry<StylisticOperatorLinebreak>
  /**
   * Require or disallow padding within blocks
   * @see https://eslint.style/rules/js/padded-blocks
   */
  '@stylistic/padded-blocks'?: Linter.RuleEntry<StylisticPaddedBlocks>
  /**
   * Require or disallow padding lines between statements
   * @see https://eslint.style/rules/ts/padding-line-between-statements
   */
  '@stylistic/padding-line-between-statements'?: Linter.RuleEntry<StylisticPaddingLineBetweenStatements>
  /**
   * Require quotes around object literal, type literal, interfaces and enums property names
   * @see https://eslint.style/rules/ts/quote-props
   */
  '@stylistic/quote-props'?: Linter.RuleEntry<StylisticQuoteProps>
  /**
   * Enforce the consistent use of either backticks, double, or single quotes
   * @see https://eslint.style/rules/ts/quotes
   */
  '@stylistic/quotes'?: Linter.RuleEntry<StylisticQuotes>
  /**
   * Enforce spacing between rest and spread operators and their expressions
   * @see https://eslint.style/rules/js/rest-spread-spacing
   */
  '@stylistic/rest-spread-spacing'?: Linter.RuleEntry<StylisticRestSpreadSpacing>
  /**
   * Require or disallow semicolons instead of ASI
   * @see https://eslint.style/rules/ts/semi
   */
  '@stylistic/semi'?: Linter.RuleEntry<StylisticSemi>
  /**
   * Enforce consistent spacing before and after semicolons
   * @see https://eslint.style/rules/ts/semi-spacing
   */
  '@stylistic/semi-spacing'?: Linter.RuleEntry<StylisticSemiSpacing>
  /**
   * Enforce location of semicolons
   * @see https://eslint.style/rules/js/semi-style
   */
  '@stylistic/semi-style'?: Linter.RuleEntry<StylisticSemiStyle>
  /**
   * Enforce consistent spacing before blocks
   * @see https://eslint.style/rules/ts/space-before-blocks
   */
  '@stylistic/space-before-blocks'?: Linter.RuleEntry<StylisticSpaceBeforeBlocks>
  /**
   * Enforce consistent spacing before function parenthesis
   * @see https://eslint.style/rules/ts/space-before-function-paren
   */
  '@stylistic/space-before-function-paren'?: Linter.RuleEntry<StylisticSpaceBeforeFunctionParen>
  /**
   * Enforce consistent spacing inside parentheses
   * @see https://eslint.style/rules/js/space-in-parens
   */
  '@stylistic/space-in-parens'?: Linter.RuleEntry<StylisticSpaceInParens>
  /**
   * Require spacing around infix operators
   * @see https://eslint.style/rules/ts/space-infix-ops
   */
  '@stylistic/space-infix-ops'?: Linter.RuleEntry<StylisticSpaceInfixOps>
  /**
   * Enforce consistent spacing before or after unary operators
   * @see https://eslint.style/rules/js/space-unary-ops
   */
  '@stylistic/space-unary-ops'?: Linter.RuleEntry<StylisticSpaceUnaryOps>
  /**
   * Enforce consistent spacing after the `//` or `/*` in a comment
   * @see https://eslint.style/rules/js/spaced-comment
   */
  '@stylistic/spaced-comment'?: Linter.RuleEntry<StylisticSpacedComment>
  /**
   * Enforce spacing around colons of switch statements
   * @see https://eslint.style/rules/js/switch-colon-spacing
   */
  '@stylistic/switch-colon-spacing'?: Linter.RuleEntry<StylisticSwitchColonSpacing>
  /**
   * Require or disallow spacing around embedded expressions of template strings
   * @see https://eslint.style/rules/js/template-curly-spacing
   */
  '@stylistic/template-curly-spacing'?: Linter.RuleEntry<StylisticTemplateCurlySpacing>
  /**
   * Require or disallow spacing between template tags and their literals
   * @see https://eslint.style/rules/js/template-tag-spacing
   */
  '@stylistic/template-tag-spacing'?: Linter.RuleEntry<StylisticTemplateTagSpacing>
  /**
   * Require consistent spacing around type annotations
   * @see https://eslint.style/rules/ts/type-annotation-spacing
   */
  '@stylistic/type-annotation-spacing'?: Linter.RuleEntry<StylisticTypeAnnotationSpacing>
  /**
   * Enforces consistent spacing inside TypeScript type generics
   * @see https://eslint.style/rules/plus/type-generic-spacing
   */
  '@stylistic/type-generic-spacing'?: Linter.RuleEntry<[]>
  /**
   * Expect space before the type declaration in the named tuple
   * @see https://eslint.style/rules/plus/type-named-tuple-spacing
   */
  '@stylistic/type-named-tuple-spacing'?: Linter.RuleEntry<[]>
  /**
   * Require parentheses around immediate `function` invocations
   * @see https://eslint.style/rules/js/wrap-iife
   */
  '@stylistic/wrap-iife'?: Linter.RuleEntry<StylisticWrapIife>
  /**
   * Require parenthesis around regex literals
   * @see https://eslint.style/rules/js/wrap-regex
   */
  '@stylistic/wrap-regex'?: Linter.RuleEntry<[]>
  /**
   * Require or disallow spacing around the `*` in `yield*` expressions
   * @see https://eslint.style/rules/js/yield-star-spacing
   */
  '@stylistic/yield-star-spacing'?: Linter.RuleEntry<StylisticYieldStarSpacing>
  /**
   * Require that function overload signatures be consecutive
   * @see https://typescript-eslint.io/rules/adjacent-overload-signatures
   */
  '@typescript-eslint/adjacent-overload-signatures'?: Linter.RuleEntry<[]>
  /**
   * Require consistently using either `T[]` or `Array<T>` for arrays
   * @see https://typescript-eslint.io/rules/array-type
   */
  '@typescript-eslint/array-type'?: Linter.RuleEntry<TypescriptEslintArrayType>
  /**
   * Disallow awaiting a value that is not a Thenable
   * @see https://typescript-eslint.io/rules/await-thenable
   */
  '@typescript-eslint/await-thenable'?: Linter.RuleEntry<[]>
  /**
   * Disallow `@ts-<directive>` comments or require descriptions after directives
   * @see https://typescript-eslint.io/rules/ban-ts-comment
   */
  '@typescript-eslint/ban-ts-comment'?: Linter.RuleEntry<TypescriptEslintBanTsComment>
  /**
   * Disallow `// tslint:<rule-flag>` comments
   * @see https://typescript-eslint.io/rules/ban-tslint-comment
   */
  '@typescript-eslint/ban-tslint-comment'?: Linter.RuleEntry<[]>
  /**
   * Enforce that literals on classes are exposed in a consistent style
   * @see https://typescript-eslint.io/rules/class-literal-property-style
   */
  '@typescript-eslint/class-literal-property-style'?: Linter.RuleEntry<TypescriptEslintClassLiteralPropertyStyle>
  /**
   * Enforce that class methods utilize `this`
   * @see https://typescript-eslint.io/rules/class-methods-use-this
   */
  '@typescript-eslint/class-methods-use-this'?: Linter.RuleEntry<TypescriptEslintClassMethodsUseThis>
  /**
   * Enforce specifying generic type arguments on type annotation or constructor name of a constructor call
   * @see https://typescript-eslint.io/rules/consistent-generic-constructors
   */
  '@typescript-eslint/consistent-generic-constructors'?: Linter.RuleEntry<TypescriptEslintConsistentGenericConstructors>
  /**
   * Require or disallow the `Record` type
   * @see https://typescript-eslint.io/rules/consistent-indexed-object-style
   */
  '@typescript-eslint/consistent-indexed-object-style'?: Linter.RuleEntry<TypescriptEslintConsistentIndexedObjectStyle>
  /**
   * Require `return` statements to either always or never specify values
   * @see https://typescript-eslint.io/rules/consistent-return
   */
  '@typescript-eslint/consistent-return'?: Linter.RuleEntry<TypescriptEslintConsistentReturn>
  /**
   * Enforce consistent usage of type assertions
   * @see https://typescript-eslint.io/rules/consistent-type-assertions
   */
  '@typescript-eslint/consistent-type-assertions'?: Linter.RuleEntry<TypescriptEslintConsistentTypeAssertions>
  /**
   * Enforce type definitions to consistently use either `interface` or `type`
   * @see https://typescript-eslint.io/rules/consistent-type-definitions
   */
  '@typescript-eslint/consistent-type-definitions'?: Linter.RuleEntry<TypescriptEslintConsistentTypeDefinitions>
  /**
   * Enforce consistent usage of type exports
   * @see https://typescript-eslint.io/rules/consistent-type-exports
   */
  '@typescript-eslint/consistent-type-exports'?: Linter.RuleEntry<TypescriptEslintConsistentTypeExports>
  /**
   * Enforce consistent usage of type imports
   * @see https://typescript-eslint.io/rules/consistent-type-imports
   */
  '@typescript-eslint/consistent-type-imports'?: Linter.RuleEntry<TypescriptEslintConsistentTypeImports>
  /**
   * Enforce default parameters to be last
   * @see https://typescript-eslint.io/rules/default-param-last
   */
  '@typescript-eslint/default-param-last'?: Linter.RuleEntry<[]>
  /**
   * Enforce dot notation whenever possible
   * @see https://typescript-eslint.io/rules/dot-notation
   */
  '@typescript-eslint/dot-notation'?: Linter.RuleEntry<TypescriptEslintDotNotation>
  /**
   * Require explicit return types on functions and class methods
   * @see https://typescript-eslint.io/rules/explicit-function-return-type
   */
  '@typescript-eslint/explicit-function-return-type'?: Linter.RuleEntry<TypescriptEslintExplicitFunctionReturnType>
  /**
   * Require explicit accessibility modifiers on class properties and methods
   * @see https://typescript-eslint.io/rules/explicit-member-accessibility
   */
  '@typescript-eslint/explicit-member-accessibility'?: Linter.RuleEntry<TypescriptEslintExplicitMemberAccessibility>
  /**
   * Require explicit return and argument types on exported functions' and classes' public class methods
   * @see https://typescript-eslint.io/rules/explicit-module-boundary-types
   */
  '@typescript-eslint/explicit-module-boundary-types'?: Linter.RuleEntry<TypescriptEslintExplicitModuleBoundaryTypes>
  /**
   * Require or disallow initialization in variable declarations
   * @see https://typescript-eslint.io/rules/init-declarations
   */
  '@typescript-eslint/init-declarations'?: Linter.RuleEntry<TypescriptEslintInitDeclarations>
  /**
   * Enforce a maximum number of parameters in function definitions
   * @see https://typescript-eslint.io/rules/max-params
   */
  '@typescript-eslint/max-params'?: Linter.RuleEntry<TypescriptEslintMaxParams>
  /**
   * Require a consistent member declaration order
   * @see https://typescript-eslint.io/rules/member-ordering
   */
  '@typescript-eslint/member-ordering'?: Linter.RuleEntry<TypescriptEslintMemberOrdering>
  /**
   * Enforce using a particular method signature syntax
   * @see https://typescript-eslint.io/rules/method-signature-style
   */
  '@typescript-eslint/method-signature-style'?: Linter.RuleEntry<TypescriptEslintMethodSignatureStyle>
  /**
   * Enforce naming conventions for everything across a codebase
   * @see https://typescript-eslint.io/rules/naming-convention
   */
  '@typescript-eslint/naming-convention'?: Linter.RuleEntry<TypescriptEslintNamingConvention>
  /**
   * Disallow generic `Array` constructors
   * @see https://typescript-eslint.io/rules/no-array-constructor
   */
  '@typescript-eslint/no-array-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow using the `delete` operator on array values
   * @see https://typescript-eslint.io/rules/no-array-delete
   */
  '@typescript-eslint/no-array-delete'?: Linter.RuleEntry<[]>
  /**
   * Require `.toString()` and `.toLocaleString()` to only be called on objects which provide useful information when stringified
   * @see https://typescript-eslint.io/rules/no-base-to-string
   */
  '@typescript-eslint/no-base-to-string'?: Linter.RuleEntry<TypescriptEslintNoBaseToString>
  /**
   * Disallow non-null assertion in locations that may be confusing
   * @see https://typescript-eslint.io/rules/no-confusing-non-null-assertion
   */
  '@typescript-eslint/no-confusing-non-null-assertion'?: Linter.RuleEntry<[]>
  /**
   * Require expressions of type void to appear in statement position
   * @see https://typescript-eslint.io/rules/no-confusing-void-expression
   */
  '@typescript-eslint/no-confusing-void-expression'?: Linter.RuleEntry<TypescriptEslintNoConfusingVoidExpression>
  /**
   * Disallow using code marked as `@deprecated`
   * @see https://typescript-eslint.io/rules/no-deprecated
   */
  '@typescript-eslint/no-deprecated'?: Linter.RuleEntry<TypescriptEslintNoDeprecated>
  /**
   * Disallow duplicate class members
   * @see https://typescript-eslint.io/rules/no-dupe-class-members
   */
  '@typescript-eslint/no-dupe-class-members'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate enum member values
   * @see https://typescript-eslint.io/rules/no-duplicate-enum-values
   */
  '@typescript-eslint/no-duplicate-enum-values'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate constituents of union or intersection types
   * @see https://typescript-eslint.io/rules/no-duplicate-type-constituents
   */
  '@typescript-eslint/no-duplicate-type-constituents'?: Linter.RuleEntry<TypescriptEslintNoDuplicateTypeConstituents>
  /**
   * Disallow using the `delete` operator on computed key expressions
   * @see https://typescript-eslint.io/rules/no-dynamic-delete
   */
  '@typescript-eslint/no-dynamic-delete'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty functions
   * @see https://typescript-eslint.io/rules/no-empty-function
   */
  '@typescript-eslint/no-empty-function'?: Linter.RuleEntry<TypescriptEslintNoEmptyFunction>
  /**
   * Disallow the declaration of empty interfaces
   * @see https://typescript-eslint.io/rules/no-empty-interface
   * @deprecated
   */
  '@typescript-eslint/no-empty-interface'?: Linter.RuleEntry<TypescriptEslintNoEmptyInterface>
  /**
   * Disallow accidentally using the "empty object" type
   * @see https://typescript-eslint.io/rules/no-empty-object-type
   */
  '@typescript-eslint/no-empty-object-type'?: Linter.RuleEntry<TypescriptEslintNoEmptyObjectType>
  /**
   * Disallow the `any` type
   * @see https://typescript-eslint.io/rules/no-explicit-any
   */
  '@typescript-eslint/no-explicit-any'?: Linter.RuleEntry<TypescriptEslintNoExplicitAny>
  /**
   * Disallow extra non-null assertions
   * @see https://typescript-eslint.io/rules/no-extra-non-null-assertion
   */
  '@typescript-eslint/no-extra-non-null-assertion'?: Linter.RuleEntry<[]>
  /**
   * Disallow classes used as namespaces
   * @see https://typescript-eslint.io/rules/no-extraneous-class
   */
  '@typescript-eslint/no-extraneous-class'?: Linter.RuleEntry<TypescriptEslintNoExtraneousClass>
  /**
   * Require Promise-like statements to be handled appropriately
   * @see https://typescript-eslint.io/rules/no-floating-promises
   */
  '@typescript-eslint/no-floating-promises'?: Linter.RuleEntry<TypescriptEslintNoFloatingPromises>
  /**
   * Disallow iterating over an array with a for-in loop
   * @see https://typescript-eslint.io/rules/no-for-in-array
   */
  '@typescript-eslint/no-for-in-array'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `eval()`-like functions
   * @see https://typescript-eslint.io/rules/no-implied-eval
   */
  '@typescript-eslint/no-implied-eval'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers
   * @see https://typescript-eslint.io/rules/no-import-type-side-effects
   */
  '@typescript-eslint/no-import-type-side-effects'?: Linter.RuleEntry<[]>
  /**
   * Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
   * @see https://typescript-eslint.io/rules/no-inferrable-types
   */
  '@typescript-eslint/no-inferrable-types'?: Linter.RuleEntry<TypescriptEslintNoInferrableTypes>
  /**
   * Disallow `this` keywords outside of classes or class-like objects
   * @see https://typescript-eslint.io/rules/no-invalid-this
   */
  '@typescript-eslint/no-invalid-this'?: Linter.RuleEntry<TypescriptEslintNoInvalidThis>
  /**
   * Disallow `void` type outside of generic or return types
   * @see https://typescript-eslint.io/rules/no-invalid-void-type
   */
  '@typescript-eslint/no-invalid-void-type'?: Linter.RuleEntry<TypescriptEslintNoInvalidVoidType>
  /**
   * Disallow function declarations that contain unsafe references inside loop statements
   * @see https://typescript-eslint.io/rules/no-loop-func
   */
  '@typescript-eslint/no-loop-func'?: Linter.RuleEntry<[]>
  /**
   * Disallow literal numbers that lose precision
   * @see https://typescript-eslint.io/rules/no-loss-of-precision
   * @deprecated
   */
  '@typescript-eslint/no-loss-of-precision'?: Linter.RuleEntry<[]>
  /**
   * Disallow magic numbers
   * @see https://typescript-eslint.io/rules/no-magic-numbers
   */
  '@typescript-eslint/no-magic-numbers'?: Linter.RuleEntry<TypescriptEslintNoMagicNumbers>
  /**
   * Disallow the `void` operator except when used to discard a value
   * @see https://typescript-eslint.io/rules/no-meaningless-void-operator
   */
  '@typescript-eslint/no-meaningless-void-operator'?: Linter.RuleEntry<TypescriptEslintNoMeaninglessVoidOperator>
  /**
   * Enforce valid definition of `new` and `constructor`
   * @see https://typescript-eslint.io/rules/no-misused-new
   */
  '@typescript-eslint/no-misused-new'?: Linter.RuleEntry<[]>
  /**
   * Disallow Promises in places not designed to handle them
   * @see https://typescript-eslint.io/rules/no-misused-promises
   */
  '@typescript-eslint/no-misused-promises'?: Linter.RuleEntry<TypescriptEslintNoMisusedPromises>
  /**
   * Disallow using the spread operator when it might cause unexpected behavior
   * @see https://typescript-eslint.io/rules/no-misused-spread
   */
  '@typescript-eslint/no-misused-spread'?: Linter.RuleEntry<TypescriptEslintNoMisusedSpread>
  /**
   * Disallow enums from having both number and string members
   * @see https://typescript-eslint.io/rules/no-mixed-enums
   */
  '@typescript-eslint/no-mixed-enums'?: Linter.RuleEntry<[]>
  /**
   * Disallow TypeScript namespaces
   * @see https://typescript-eslint.io/rules/no-namespace
   */
  '@typescript-eslint/no-namespace'?: Linter.RuleEntry<TypescriptEslintNoNamespace>
  /**
   * Disallow non-null assertions in the left operand of a nullish coalescing operator
   * @see https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
   */
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing'?: Linter.RuleEntry<[]>
  /**
   * Disallow non-null assertions after an optional chain expression
   * @see https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
   */
  '@typescript-eslint/no-non-null-asserted-optional-chain'?: Linter.RuleEntry<[]>
  /**
   * Disallow non-null assertions using the `!` postfix operator
   * @see https://typescript-eslint.io/rules/no-non-null-assertion
   */
  '@typescript-eslint/no-non-null-assertion'?: Linter.RuleEntry<[]>
  /**
   * Disallow variable redeclaration
   * @see https://typescript-eslint.io/rules/no-redeclare
   */
  '@typescript-eslint/no-redeclare'?: Linter.RuleEntry<TypescriptEslintNoRedeclare>
  /**
   * Disallow members of unions and intersections that do nothing or override type information
   * @see https://typescript-eslint.io/rules/no-redundant-type-constituents
   */
  '@typescript-eslint/no-redundant-type-constituents'?: Linter.RuleEntry<[]>
  /**
   * Disallow invocation of `require()`
   * @see https://typescript-eslint.io/rules/no-require-imports
   */
  '@typescript-eslint/no-require-imports'?: Linter.RuleEntry<TypescriptEslintNoRequireImports>
  /**
   * Disallow specified modules when loaded by `import`
   * @see https://typescript-eslint.io/rules/no-restricted-imports
   */
  '@typescript-eslint/no-restricted-imports'?: Linter.RuleEntry<TypescriptEslintNoRestrictedImports>
  /**
   * Disallow certain types
   * @see https://typescript-eslint.io/rules/no-restricted-types
   */
  '@typescript-eslint/no-restricted-types'?: Linter.RuleEntry<TypescriptEslintNoRestrictedTypes>
  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope
   * @see https://typescript-eslint.io/rules/no-shadow
   */
  '@typescript-eslint/no-shadow'?: Linter.RuleEntry<TypescriptEslintNoShadow>
  /**
   * Disallow aliasing `this`
   * @see https://typescript-eslint.io/rules/no-this-alias
   */
  '@typescript-eslint/no-this-alias'?: Linter.RuleEntry<TypescriptEslintNoThisAlias>
  /**
   * Disallow type aliases
   * @see https://typescript-eslint.io/rules/no-type-alias
   * @deprecated
   */
  '@typescript-eslint/no-type-alias'?: Linter.RuleEntry<TypescriptEslintNoTypeAlias>
  /**
   * Disallow unnecessary equality comparisons against boolean literals
   * @see https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
   */
  '@typescript-eslint/no-unnecessary-boolean-literal-compare'?: Linter.RuleEntry<TypescriptEslintNoUnnecessaryBooleanLiteralCompare>
  /**
   * Disallow conditionals where the type is always truthy or always falsy
   * @see https://typescript-eslint.io/rules/no-unnecessary-condition
   */
  '@typescript-eslint/no-unnecessary-condition'?: Linter.RuleEntry<TypescriptEslintNoUnnecessaryCondition>
  /**
   * Disallow unnecessary assignment of constructor property parameter
   * @see https://typescript-eslint.io/rules/no-unnecessary-parameter-property-assignment
   */
  '@typescript-eslint/no-unnecessary-parameter-property-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary namespace qualifiers
   * @see https://typescript-eslint.io/rules/no-unnecessary-qualifier
   */
  '@typescript-eslint/no-unnecessary-qualifier'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary template expressions
   * @see https://typescript-eslint.io/rules/no-unnecessary-template-expression
   */
  '@typescript-eslint/no-unnecessary-template-expression'?: Linter.RuleEntry<[]>
  /**
   * Disallow type arguments that are equal to the default
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-arguments
   */
  '@typescript-eslint/no-unnecessary-type-arguments'?: Linter.RuleEntry<[]>
  /**
   * Disallow type assertions that do not change the type of an expression
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-assertion
   */
  '@typescript-eslint/no-unnecessary-type-assertion'?: Linter.RuleEntry<TypescriptEslintNoUnnecessaryTypeAssertion>
  /**
   * Disallow unnecessary constraints on generic types
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-constraint
   */
  '@typescript-eslint/no-unnecessary-type-constraint'?: Linter.RuleEntry<[]>
  /**
   * Disallow conversion idioms when they do not change the type or value of the expression
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-conversion
   */
  '@typescript-eslint/no-unnecessary-type-conversion'?: Linter.RuleEntry<[]>
  /**
   * Disallow type parameters that aren't used multiple times
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-parameters
   */
  '@typescript-eslint/no-unnecessary-type-parameters'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling a function with a value with type `any`
   * @see https://typescript-eslint.io/rules/no-unsafe-argument
   */
  '@typescript-eslint/no-unsafe-argument'?: Linter.RuleEntry<[]>
  /**
   * Disallow assigning a value with type `any` to variables and properties
   * @see https://typescript-eslint.io/rules/no-unsafe-assignment
   */
  '@typescript-eslint/no-unsafe-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling a value with type `any`
   * @see https://typescript-eslint.io/rules/no-unsafe-call
   */
  '@typescript-eslint/no-unsafe-call'?: Linter.RuleEntry<[]>
  /**
   * Disallow unsafe declaration merging
   * @see https://typescript-eslint.io/rules/no-unsafe-declaration-merging
   */
  '@typescript-eslint/no-unsafe-declaration-merging'?: Linter.RuleEntry<[]>
  /**
   * Disallow comparing an enum value with a non-enum value
   * @see https://typescript-eslint.io/rules/no-unsafe-enum-comparison
   */
  '@typescript-eslint/no-unsafe-enum-comparison'?: Linter.RuleEntry<[]>
  /**
   * Disallow using the unsafe built-in Function type
   * @see https://typescript-eslint.io/rules/no-unsafe-function-type
   */
  '@typescript-eslint/no-unsafe-function-type'?: Linter.RuleEntry<[]>
  /**
   * Disallow member access on a value with type `any`
   * @see https://typescript-eslint.io/rules/no-unsafe-member-access
   */
  '@typescript-eslint/no-unsafe-member-access'?: Linter.RuleEntry<[]>
  /**
   * Disallow returning a value with type `any` from a function
   * @see https://typescript-eslint.io/rules/no-unsafe-return
   */
  '@typescript-eslint/no-unsafe-return'?: Linter.RuleEntry<[]>
  /**
   * Disallow type assertions that narrow a type
   * @see https://typescript-eslint.io/rules/no-unsafe-type-assertion
   */
  '@typescript-eslint/no-unsafe-type-assertion'?: Linter.RuleEntry<[]>
  /**
   * Require unary negation to take a number
   * @see https://typescript-eslint.io/rules/no-unsafe-unary-minus
   */
  '@typescript-eslint/no-unsafe-unary-minus'?: Linter.RuleEntry<[]>
  /**
   * Disallow unused expressions
   * @see https://typescript-eslint.io/rules/no-unused-expressions
   */
  '@typescript-eslint/no-unused-expressions'?: Linter.RuleEntry<TypescriptEslintNoUnusedExpressions>
  /**
   * Disallow unused variables
   * @see https://typescript-eslint.io/rules/no-unused-vars
   */
  '@typescript-eslint/no-unused-vars'?: Linter.RuleEntry<TypescriptEslintNoUnusedVars>
  /**
   * Disallow the use of variables before they are defined
   * @see https://typescript-eslint.io/rules/no-use-before-define
   */
  '@typescript-eslint/no-use-before-define'?: Linter.RuleEntry<TypescriptEslintNoUseBeforeDefine>
  /**
   * Disallow unnecessary constructors
   * @see https://typescript-eslint.io/rules/no-useless-constructor
   */
  '@typescript-eslint/no-useless-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty exports that don't change anything in a module file
   * @see https://typescript-eslint.io/rules/no-useless-empty-export
   */
  '@typescript-eslint/no-useless-empty-export'?: Linter.RuleEntry<[]>
  /**
   * Disallow `require` statements except in import statements
   * @see https://typescript-eslint.io/rules/no-var-requires
   * @deprecated
   */
  '@typescript-eslint/no-var-requires'?: Linter.RuleEntry<TypescriptEslintNoVarRequires>
  /**
   * Disallow using confusing built-in primitive class wrappers
   * @see https://typescript-eslint.io/rules/no-wrapper-object-types
   */
  '@typescript-eslint/no-wrapper-object-types'?: Linter.RuleEntry<[]>
  /**
   * Enforce non-null assertions over explicit type assertions
   * @see https://typescript-eslint.io/rules/non-nullable-type-assertion-style
   */
  '@typescript-eslint/non-nullable-type-assertion-style'?: Linter.RuleEntry<[]>
  /**
   * Disallow throwing non-`Error` values as exceptions
   * @see https://typescript-eslint.io/rules/only-throw-error
   */
  '@typescript-eslint/only-throw-error'?: Linter.RuleEntry<TypescriptEslintOnlyThrowError>
  /**
   * Require or disallow parameter properties in class constructors
   * @see https://typescript-eslint.io/rules/parameter-properties
   */
  '@typescript-eslint/parameter-properties'?: Linter.RuleEntry<TypescriptEslintParameterProperties>
  /**
   * Enforce the use of `as const` over literal type
   * @see https://typescript-eslint.io/rules/prefer-as-const
   */
  '@typescript-eslint/prefer-as-const'?: Linter.RuleEntry<[]>
  /**
   * Require destructuring from arrays and/or objects
   * @see https://typescript-eslint.io/rules/prefer-destructuring
   */
  '@typescript-eslint/prefer-destructuring'?: Linter.RuleEntry<TypescriptEslintPreferDestructuring>
  /**
   * Require each enum member value to be explicitly initialized
   * @see https://typescript-eslint.io/rules/prefer-enum-initializers
   */
  '@typescript-eslint/prefer-enum-initializers'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result
   * @see https://typescript-eslint.io/rules/prefer-find
   */
  '@typescript-eslint/prefer-find'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of `for-of` loop over the standard `for` loop where possible
   * @see https://typescript-eslint.io/rules/prefer-for-of
   */
  '@typescript-eslint/prefer-for-of'?: Linter.RuleEntry<[]>
  /**
   * Enforce using function types instead of interfaces with call signatures
   * @see https://typescript-eslint.io/rules/prefer-function-type
   */
  '@typescript-eslint/prefer-function-type'?: Linter.RuleEntry<[]>
  /**
   * Enforce `includes` method over `indexOf` method
   * @see https://typescript-eslint.io/rules/prefer-includes
   */
  '@typescript-eslint/prefer-includes'?: Linter.RuleEntry<[]>
  /**
   * Require all enum members to be literal values
   * @see https://typescript-eslint.io/rules/prefer-literal-enum-member
   */
  '@typescript-eslint/prefer-literal-enum-member'?: Linter.RuleEntry<TypescriptEslintPreferLiteralEnumMember>
  /**
   * Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules
   * @see https://typescript-eslint.io/rules/prefer-namespace-keyword
   */
  '@typescript-eslint/prefer-namespace-keyword'?: Linter.RuleEntry<[]>
  /**
   * Enforce using the nullish coalescing operator instead of logical assignments or chaining
   * @see https://typescript-eslint.io/rules/prefer-nullish-coalescing
   */
  '@typescript-eslint/prefer-nullish-coalescing'?: Linter.RuleEntry<TypescriptEslintPreferNullishCoalescing>
  /**
   * Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects
   * @see https://typescript-eslint.io/rules/prefer-optional-chain
   */
  '@typescript-eslint/prefer-optional-chain'?: Linter.RuleEntry<TypescriptEslintPreferOptionalChain>
  /**
   * Require using Error objects as Promise rejection reasons
   * @see https://typescript-eslint.io/rules/prefer-promise-reject-errors
   */
  '@typescript-eslint/prefer-promise-reject-errors'?: Linter.RuleEntry<TypescriptEslintPreferPromiseRejectErrors>
  /**
   * Require private members to be marked as `readonly` if they're never modified outside of the constructor
   * @see https://typescript-eslint.io/rules/prefer-readonly
   */
  '@typescript-eslint/prefer-readonly'?: Linter.RuleEntry<TypescriptEslintPreferReadonly>
  /**
   * Require function parameters to be typed as `readonly` to prevent accidental mutation of inputs
   * @see https://typescript-eslint.io/rules/prefer-readonly-parameter-types
   */
  '@typescript-eslint/prefer-readonly-parameter-types'?: Linter.RuleEntry<TypescriptEslintPreferReadonlyParameterTypes>
  /**
   * Enforce using type parameter when calling `Array#reduce` instead of using a type assertion
   * @see https://typescript-eslint.io/rules/prefer-reduce-type-parameter
   */
  '@typescript-eslint/prefer-reduce-type-parameter'?: Linter.RuleEntry<[]>
  /**
   * Enforce `RegExp#exec` over `String#match` if no global flag is provided
   * @see https://typescript-eslint.io/rules/prefer-regexp-exec
   */
  '@typescript-eslint/prefer-regexp-exec'?: Linter.RuleEntry<[]>
  /**
   * Enforce that `this` is used when only `this` type is returned
   * @see https://typescript-eslint.io/rules/prefer-return-this-type
   */
  '@typescript-eslint/prefer-return-this-type'?: Linter.RuleEntry<[]>
  /**
   * Enforce using `String#startsWith` and `String#endsWith` over other equivalent methods of checking substrings
   * @see https://typescript-eslint.io/rules/prefer-string-starts-ends-with
   */
  '@typescript-eslint/prefer-string-starts-ends-with'?: Linter.RuleEntry<TypescriptEslintPreferStringStartsEndsWith>
  /**
   * Enforce using `@ts-expect-error` over `@ts-ignore`
   * @see https://typescript-eslint.io/rules/prefer-ts-expect-error
   * @deprecated
   */
  '@typescript-eslint/prefer-ts-expect-error'?: Linter.RuleEntry<[]>
  /**
   * Require any function or method that returns a Promise to be marked async
   * @see https://typescript-eslint.io/rules/promise-function-async
   */
  '@typescript-eslint/promise-function-async'?: Linter.RuleEntry<TypescriptEslintPromiseFunctionAsync>
  /**
   * Enforce that `get()` types should be assignable to their equivalent `set()` type
   * @see https://typescript-eslint.io/rules/related-getter-setter-pairs
   */
  '@typescript-eslint/related-getter-setter-pairs'?: Linter.RuleEntry<[]>
  /**
   * Require `Array#sort` and `Array#toSorted` calls to always provide a `compareFunction`
   * @see https://typescript-eslint.io/rules/require-array-sort-compare
   */
  '@typescript-eslint/require-array-sort-compare'?: Linter.RuleEntry<TypescriptEslintRequireArraySortCompare>
  /**
   * Disallow async functions which do not return promises and have no `await` expression
   * @see https://typescript-eslint.io/rules/require-await
   */
  '@typescript-eslint/require-await'?: Linter.RuleEntry<[]>
  /**
   * Require both operands of addition to be the same type and be `bigint`, `number`, or `string`
   * @see https://typescript-eslint.io/rules/restrict-plus-operands
   */
  '@typescript-eslint/restrict-plus-operands'?: Linter.RuleEntry<TypescriptEslintRestrictPlusOperands>
  /**
   * Enforce template literal expressions to be of `string` type
   * @see https://typescript-eslint.io/rules/restrict-template-expressions
   */
  '@typescript-eslint/restrict-template-expressions'?: Linter.RuleEntry<TypescriptEslintRestrictTemplateExpressions>
  /**
   * Enforce consistent awaiting of returned promises
   * @see https://typescript-eslint.io/rules/return-await
   */
  '@typescript-eslint/return-await'?: Linter.RuleEntry<TypescriptEslintReturnAwait>
  /**
   * Enforce constituents of a type union/intersection to be sorted alphabetically
   * @see https://typescript-eslint.io/rules/sort-type-constituents
   * @deprecated
   */
  '@typescript-eslint/sort-type-constituents'?: Linter.RuleEntry<TypescriptEslintSortTypeConstituents>
  /**
   * Disallow certain types in boolean expressions
   * @see https://typescript-eslint.io/rules/strict-boolean-expressions
   */
  '@typescript-eslint/strict-boolean-expressions'?: Linter.RuleEntry<TypescriptEslintStrictBooleanExpressions>
  /**
   * Require switch-case statements to be exhaustive
   * @see https://typescript-eslint.io/rules/switch-exhaustiveness-check
   */
  '@typescript-eslint/switch-exhaustiveness-check'?: Linter.RuleEntry<TypescriptEslintSwitchExhaustivenessCheck>
  /**
   * Disallow certain triple slash directives in favor of ES6-style import declarations
   * @see https://typescript-eslint.io/rules/triple-slash-reference
   */
  '@typescript-eslint/triple-slash-reference'?: Linter.RuleEntry<TypescriptEslintTripleSlashReference>
  /**
   * Require type annotations in certain places
   * @see https://typescript-eslint.io/rules/typedef
   */
  '@typescript-eslint/typedef'?: Linter.RuleEntry<TypescriptEslintTypedef>
  /**
   * Enforce unbound methods are called with their expected scope
   * @see https://typescript-eslint.io/rules/unbound-method
   */
  '@typescript-eslint/unbound-method'?: Linter.RuleEntry<TypescriptEslintUnboundMethod>
  /**
   * Disallow two overloads that could be unified into one with a union or an optional/rest parameter
   * @see https://typescript-eslint.io/rules/unified-signatures
   */
  '@typescript-eslint/unified-signatures'?: Linter.RuleEntry<TypescriptEslintUnifiedSignatures>
  /**
   * Enforce typing arguments in Promise rejection callbacks as `unknown`
   * @see https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable
   */
  '@typescript-eslint/use-unknown-in-catch-callback-variable'?: Linter.RuleEntry<[]>
  /**
   * Transforms the negation of a conjunction !(A && B) into the equivalent !A || !B according to De Morgan’s law
   * @see https://github.com/azat-io/eslint-plugin-de-morgan/blob/main/docs/no-negated-conjunction.md
   */
  'de-morgan/no-negated-conjunction'?: Linter.RuleEntry<[]>
  /**
   * Transforms the negation of a disjunction !(A || B) into the equivalent !A && !B according to De Morgan’s law
   * @see https://github.com/azat-io/eslint-plugin-de-morgan/blob/main/docs/no-negated-disjunction.md
   */
  'de-morgan/no-negated-disjunction'?: Linter.RuleEntry<[]>
  /**
   * Bans a list of dependencies from being used
   * @see https://github.com/es-tooling/eslint-plugin-depend/blob/main/docs/rules/ban-dependencies.md
   */
  'depend/ban-dependencies'?: Linter.RuleEntry<DependBanDependencies>
  /**
   * Checks that `@access` tags have a valid value.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-access.md#repos-sticky-header
   */
  'jsdoc/check-access'?: Linter.RuleEntry<[]>
  /**
   * Reports invalid alignment of JSDoc block asterisks.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-alignment.md#repos-sticky-header
   */
  'jsdoc/check-alignment'?: Linter.RuleEntry<[]>
  /**
   * Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-examples.md#repos-sticky-header
   */
  'jsdoc/check-examples'?: Linter.RuleEntry<JsdocCheckExamples>
  /**
   * Reports invalid padding inside JSDoc blocks.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-indentation.md#repos-sticky-header
   */
  'jsdoc/check-indentation'?: Linter.RuleEntry<JsdocCheckIndentation>
  /**
   * Reports invalid alignment of JSDoc block lines.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-line-alignment.md#repos-sticky-header
   */
  'jsdoc/check-line-alignment'?: Linter.RuleEntry<JsdocCheckLineAlignment>
  /**
   * Ensures that parameter names in JSDoc match those in the function declaration.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-param-names.md#repos-sticky-header
   */
  'jsdoc/check-param-names'?: Linter.RuleEntry<JsdocCheckParamNames>
  /**
   * Ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined roots.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-property-names.md#repos-sticky-header
   */
  'jsdoc/check-property-names'?: Linter.RuleEntry<JsdocCheckPropertyNames>
  /**
   * Reports against syntax not valid for the mode (e.g., Google Closure Compiler in non-Closure mode).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-syntax.md#repos-sticky-header
   */
  'jsdoc/check-syntax'?: Linter.RuleEntry<[]>
  /**
   * Reports invalid block tag names.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-tag-names.md#repos-sticky-header
   */
  'jsdoc/check-tag-names'?: Linter.RuleEntry<JsdocCheckTagNames>
  /**
   * Checks that any `@template` names are actually used in the connected `@typedef` or type alias.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-template-names.md#repos-sticky-header
   */
  'jsdoc/check-template-names'?: Linter.RuleEntry<[]>
  /**
   * Reports invalid types.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-types.md#repos-sticky-header
   */
  'jsdoc/check-types'?: Linter.RuleEntry<JsdocCheckTypes>
  /**
   * This rule checks the values for a handful of tags: `@version`, `@since`, `@license` and `@author`.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-values.md#repos-sticky-header
   */
  'jsdoc/check-values'?: Linter.RuleEntry<JsdocCheckValues>
  /**
   * Converts non-JSDoc comments preceding or following nodes into JSDoc ones
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/convert-to-jsdoc-comments.md#repos-sticky-header
   */
  'jsdoc/convert-to-jsdoc-comments'?: Linter.RuleEntry<JsdocConvertToJsdocComments>
  /**
   * Expects specific tags to be empty of any content.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/empty-tags.md#repos-sticky-header
   */
  'jsdoc/empty-tags'?: Linter.RuleEntry<JsdocEmptyTags>
  /**
   * Reports an issue with any non-constructor function using `@implements`.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/implements-on-classes.md#repos-sticky-header
   */
  'jsdoc/implements-on-classes'?: Linter.RuleEntry<JsdocImplementsOnClasses>
  /**
   * Reports if JSDoc `import()` statements point to a package which is not listed in `dependencies` or `devDependencies`
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/imports-as-dependencies.md#repos-sticky-header
   */
  'jsdoc/imports-as-dependencies'?: Linter.RuleEntry<[]>
  /**
   * This rule reports doc comments that only restate their attached name.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/informative-docs.md#repos-sticky-header
   */
  'jsdoc/informative-docs'?: Linter.RuleEntry<JsdocInformativeDocs>
  /**
   * Enforces minimum number of newlines before JSDoc comment blocks
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/lines-before-block.md#repos-sticky-header
   */
  'jsdoc/lines-before-block'?: Linter.RuleEntry<JsdocLinesBeforeBlock>
  /**
   * Enforces a regular expression pattern on descriptions.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/match-description.md#repos-sticky-header
   */
  'jsdoc/match-description'?: Linter.RuleEntry<JsdocMatchDescription>
  /**
   * Reports the name portion of a JSDoc tag if matching or not matching a given regular expression.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/match-name.md#repos-sticky-header
   */
  'jsdoc/match-name'?: Linter.RuleEntry<JsdocMatchName>
  /**
   * Controls how and whether jsdoc blocks can be expressed as single or multiple line blocks.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/multiline-blocks.md#repos-sticky-header
   */
  'jsdoc/multiline-blocks'?: Linter.RuleEntry<JsdocMultilineBlocks>
  /**
   * This rule checks for multi-line-style comments which fail to meet the criteria of a jsdoc block.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-bad-blocks.md#repos-sticky-header
   */
  'jsdoc/no-bad-blocks'?: Linter.RuleEntry<JsdocNoBadBlocks>
  /**
   * Detects and removes extra lines of a blank block description
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-blank-block-descriptions.md#repos-sticky-header
   */
  'jsdoc/no-blank-block-descriptions'?: Linter.RuleEntry<[]>
  /**
   * Removes empty blocks with nothing but possibly line breaks
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-blank-blocks.md#repos-sticky-header
   */
  'jsdoc/no-blank-blocks'?: Linter.RuleEntry<JsdocNoBlankBlocks>
  /**
   * This rule reports defaults being used on the relevant portion of `@param` or `@default`.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-defaults.md#repos-sticky-header
   */
  'jsdoc/no-defaults'?: Linter.RuleEntry<JsdocNoDefaults>
  /**
   * Reports when certain comment structures are always expected.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-missing-syntax.md#repos-sticky-header
   */
  'jsdoc/no-missing-syntax'?: Linter.RuleEntry<JsdocNoMissingSyntax>
  /**
   * Prevents use of multiple asterisks at the beginning of lines.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-multi-asterisks.md#repos-sticky-header
   */
  'jsdoc/no-multi-asterisks'?: Linter.RuleEntry<JsdocNoMultiAsterisks>
  /**
   * Reports when certain comment structures are present.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-restricted-syntax.md#repos-sticky-header
   */
  'jsdoc/no-restricted-syntax'?: Linter.RuleEntry<JsdocNoRestrictedSyntax>
  /**
   * This rule reports types being used on `@param` or `@returns`.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-types.md#repos-sticky-header
   */
  'jsdoc/no-types'?: Linter.RuleEntry<JsdocNoTypes>
  /**
   * Checks that types in jsdoc comments are defined.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-undefined-types.md#repos-sticky-header
   */
  'jsdoc/no-undefined-types'?: Linter.RuleEntry<JsdocNoUndefinedTypes>
  /**
   * Requires that each JSDoc line starts with an `*`.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-asterisk-prefix.md#repos-sticky-header
   */
  'jsdoc/require-asterisk-prefix'?: Linter.RuleEntry<JsdocRequireAsteriskPrefix>
  /**
   * Requires that all functions have a description.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-description.md#repos-sticky-header
   */
  'jsdoc/require-description'?: Linter.RuleEntry<JsdocRequireDescription>
  /**
   * Requires that block description, explicit `@description`, and `@param`/`@returns` tag descriptions are written in complete sentences.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-description-complete-sentence.md#repos-sticky-header
   */
  'jsdoc/require-description-complete-sentence'?: Linter.RuleEntry<JsdocRequireDescriptionCompleteSentence>
  /**
   * Requires that all functions have examples.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-example.md#repos-sticky-header
   */
  'jsdoc/require-example'?: Linter.RuleEntry<JsdocRequireExample>
  /**
   * Checks that all files have one `@file`, `@fileoverview`, or `@overview` tag at the beginning of the file.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-file-overview.md#repos-sticky-header
   */
  'jsdoc/require-file-overview'?: Linter.RuleEntry<JsdocRequireFileOverview>
  /**
   * Requires a hyphen before the `@param` description.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-hyphen-before-param-description.md#repos-sticky-header
   */
  'jsdoc/require-hyphen-before-param-description'?: Linter.RuleEntry<JsdocRequireHyphenBeforeParamDescription>
  /**
   * Require JSDoc comments
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-jsdoc.md#repos-sticky-header
   */
  'jsdoc/require-jsdoc'?: Linter.RuleEntry<JsdocRequireJsdoc>
  /**
   * Requires that all function parameters are documented.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param.md#repos-sticky-header
   */
  'jsdoc/require-param'?: Linter.RuleEntry<JsdocRequireParam>
  /**
   * Requires that each `@param` tag has a `description` value.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-description.md#repos-sticky-header
   */
  'jsdoc/require-param-description'?: Linter.RuleEntry<JsdocRequireParamDescription>
  /**
   * Requires that all function parameters have names.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-name.md#repos-sticky-header
   */
  'jsdoc/require-param-name'?: Linter.RuleEntry<JsdocRequireParamName>
  /**
   * Requires that each `@param` tag has a `type` value.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-type.md#repos-sticky-header
   */
  'jsdoc/require-param-type'?: Linter.RuleEntry<JsdocRequireParamType>
  /**
   * Requires that all `@typedef` and `@namespace` tags have `@property` when their type is a plain `object`, `Object`, or `PlainObject`.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property.md#repos-sticky-header
   */
  'jsdoc/require-property'?: Linter.RuleEntry<[]>
  /**
   * Requires that each `@property` tag has a `description` value.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-description.md#repos-sticky-header
   */
  'jsdoc/require-property-description'?: Linter.RuleEntry<[]>
  /**
   * Requires that all function `@property` tags have names.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-name.md#repos-sticky-header
   */
  'jsdoc/require-property-name'?: Linter.RuleEntry<[]>
  /**
   * Requires that each `@property` tag has a `type` value.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-type.md#repos-sticky-header
   */
  'jsdoc/require-property-type'?: Linter.RuleEntry<[]>
  /**
   * Requires that returns are documented.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns.md#repos-sticky-header
   */
  'jsdoc/require-returns'?: Linter.RuleEntry<JsdocRequireReturns>
  /**
   * Requires a return statement in function body if a `@returns` tag is specified in jsdoc comment.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-check.md#repos-sticky-header
   */
  'jsdoc/require-returns-check'?: Linter.RuleEntry<JsdocRequireReturnsCheck>
  /**
   * Requires that the `@returns` tag has a `description` value.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-description.md#repos-sticky-header
   */
  'jsdoc/require-returns-description'?: Linter.RuleEntry<JsdocRequireReturnsDescription>
  /**
   * Requires that `@returns` tag has `type` value.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-type.md#repos-sticky-header
   */
  'jsdoc/require-returns-type'?: Linter.RuleEntry<JsdocRequireReturnsType>
  /**
   * Requires template tags for each generic type parameter
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-template.md#repos-sticky-header
   */
  'jsdoc/require-template'?: Linter.RuleEntry<JsdocRequireTemplate>
  /**
   * Requires that throw statements are documented.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-throws.md#repos-sticky-header
   */
  'jsdoc/require-throws'?: Linter.RuleEntry<JsdocRequireThrows>
  /**
   * Requires yields are documented.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields.md#repos-sticky-header
   */
  'jsdoc/require-yields'?: Linter.RuleEntry<JsdocRequireYields>
  /**
   * Requires a yield statement in function body if a `@yields` tag is specified in jsdoc comment.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields-check.md#repos-sticky-header
   */
  'jsdoc/require-yields-check'?: Linter.RuleEntry<JsdocRequireYieldsCheck>
  /**
   * Sorts tags by a specified sequence according to tag name.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/sort-tags.md#repos-sticky-header
   */
  'jsdoc/sort-tags'?: Linter.RuleEntry<JsdocSortTags>
  /**
   * Enforces lines (or no lines) between tags.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/tag-lines.md#repos-sticky-header
   */
  'jsdoc/tag-lines'?: Linter.RuleEntry<JsdocTagLines>
  /**
   * Auto-escape certain characters that are input within block and tag descriptions.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/text-escaping.md#repos-sticky-header
   */
  'jsdoc/text-escaping'?: Linter.RuleEntry<JsdocTextEscaping>
  /**
   * Requires all types to be valid JSDoc or Closure compiler types without syntax errors.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/valid-types.md#repos-sticky-header
   */
  'jsdoc/valid-types'?: Linter.RuleEntry<JsdocValidTypes>
  /**
   * Avoid access modifiers; prefer #private members or omitting the modifier.
   */
  'no-restricted-syntax/no-access-modifiers'?: Linter.RuleEntry<[]>
  /**
   * Avoid `delete`; prefer destructuring.
   */
  'no-restricted-syntax/no-delete-operator'?: Linter.RuleEntry<[]>
  /**
   * Avoid `enum`; prefer using objects instead.
   */
  'no-restricted-syntax/no-enums'?: Linter.RuleEntry<[]>
  /**
   * `for`-`in` loops skip array holes, return array indices as strings, and may visit the prototype chain or other enumerable properties, which is virtually never what you want. Use a more robust iteration method such as `for`-`of`; if not iterating over an array, convert to an array first, perhaps using Object.{keys,values,entries}.
   */
  'no-restricted-syntax/no-for-in-loops'?: Linter.RuleEntry<[]>
  /**
   * Avoid the 'in' operator. In most cases, basic property access is all you need. For other cases, use Object.hasOwn(). In niche cases where you need to check for the existence of a property both on an object itself AND its prototype chain, feel free to disable this rule with the inline eslint-disable syntax.
   */
  'no-restricted-syntax/no-in-operator'?: Linter.RuleEntry<[]>
  /**
   * Labels are a form of GOTO; using them makes code confusing and hard both to maintain and understand.
   */
  'no-restricted-syntax/no-label'?: Linter.RuleEntry<[]>
  /**
   * Avoid the Proxy API. It is a low level feature that is rarely needed. In the niche cases when this is needed, feel free to disable this rule with the inline eslint-disable syntax.
   */
  'no-restricted-syntax/no-proxy'?: Linter.RuleEntry<[]>
  /**
   * Avoid the Reflect API. It is a very low level feature that is rarely needed, except in complex libraries. There is no need to use this feature in normal code.
   */
  'no-restricted-syntax/no-reflect'?: Linter.RuleEntry<[]>
  /**
   * Reports on unnecessary empty arrays and objects.
   */
  'package-json/no-empty-fields'?: Linter.RuleEntry<[]>
  /**
   * Prevents adding unnecessary / redundant files.
   */
  'package-json/no-redundant-files'?: Linter.RuleEntry<[]>
  /**
   * Package properties must be declared in standard order
   */
  'package-json/order-properties'?: Linter.RuleEntry<PackageJsonOrderProperties>
  /**
   * Enforce either object or shorthand declaration for repository.
   */
  'package-json/repository-shorthand'?: Linter.RuleEntry<PackageJsonRepositoryShorthand>
  /**
   * Requires the `author` property to be present.
   */
  'package-json/require-author'?: Linter.RuleEntry<[]>
  /**
   * Requires the `description` property to be present.
   */
  'package-json/require-description'?: Linter.RuleEntry<[]>
  /**
   * Requires the `engines` property to be present.
   */
  'package-json/require-engines'?: Linter.RuleEntry<[]>
  /**
   * Requires the `files` property to be present.
   */
  'package-json/require-files'?: Linter.RuleEntry<[]>
  /**
   * Requires the `keywords` property to be present.
   */
  'package-json/require-keywords'?: Linter.RuleEntry<[]>
  /**
   * Requires the `name` property to be present.
   */
  'package-json/require-name'?: Linter.RuleEntry<[]>
  /**
   * Requires the `types` property to be present.
   */
  'package-json/require-types'?: Linter.RuleEntry<[]>
  /**
   * Requires the `version` property to be present.
   */
  'package-json/require-version'?: Linter.RuleEntry<[]>
  /**
   * Restricts the range of dependencies to allow or disallow specific types of ranges.
   */
  'package-json/restrict-dependency-ranges'?: Linter.RuleEntry<PackageJsonRestrictDependencyRanges>
  /**
   * Dependencies, scripts, and configuration values must be declared in alphabetical order.
   */
  'package-json/sort-collections'?: Linter.RuleEntry<PackageJsonSortCollections>
  /**
   * Checks a dependency isn't specified more than once (i.e. in `dependencies` and `devDependencies`)
   */
  'package-json/unique-dependencies'?: Linter.RuleEntry<[]>
  /**
   * Checks existence of local dependencies in the package.json
   */
  'package-json/valid-local-dependency'?: Linter.RuleEntry<[]>
  /**
   * Enforce that package names are valid npm package names
   */
  'package-json/valid-name'?: Linter.RuleEntry<[]>
  /**
   * Enforce that package.json has all properties required by the npm spec
   * @deprecated
   */
  'package-json/valid-package-def'?: Linter.RuleEntry<[]>
  /**
   * Enforce that package.json has all properties required by the npm spec
   */
  'package-json/valid-package-definition'?: Linter.RuleEntry<[]>
  /**
   * Enforce that if repository directory is specified, it matches the path to the package.json file
   */
  'package-json/valid-repository-directory'?: Linter.RuleEntry<[]>
  /**
   * Enforce that package versions are valid semver specifiers
   */
  'package-json/valid-version'?: Linter.RuleEntry<[]>
  /**
   * Enforce sorted arrays before include method.
   * @see https://perfectionist.dev/rules/sort-array-includes
   */
  'perfectionist/sort-array-includes'?: Linter.RuleEntry<PerfectionistSortArrayIncludes>
  /**
   * Enforce sorted classes.
   * @see https://perfectionist.dev/rules/sort-classes
   */
  'perfectionist/sort-classes'?: Linter.RuleEntry<PerfectionistSortClasses>
  /**
   * Enforce sorted decorators.
   * @see https://perfectionist.dev/rules/sort-decorators
   */
  'perfectionist/sort-decorators'?: Linter.RuleEntry<PerfectionistSortDecorators>
  /**
   * Enforce sorted TypeScript enums.
   * @see https://perfectionist.dev/rules/sort-enums
   */
  'perfectionist/sort-enums'?: Linter.RuleEntry<PerfectionistSortEnums>
  /**
   * Enforce sorted exports.
   * @see https://perfectionist.dev/rules/sort-exports
   */
  'perfectionist/sort-exports'?: Linter.RuleEntry<PerfectionistSortExports>
  /**
   * Enforce sorted heritage clauses.
   * @see https://perfectionist.dev/rules/sort-heritage-clauses
   */
  'perfectionist/sort-heritage-clauses'?: Linter.RuleEntry<PerfectionistSortHeritageClauses>
  /**
   * Enforce sorted imports.
   * @see https://perfectionist.dev/rules/sort-imports
   */
  'perfectionist/sort-imports'?: Linter.RuleEntry<PerfectionistSortImports>
  /**
   * Enforce sorted interface properties.
   * @see https://perfectionist.dev/rules/sort-interfaces
   */
  'perfectionist/sort-interfaces'?: Linter.RuleEntry<PerfectionistSortInterfaces>
  /**
   * Enforce sorted intersection types.
   * @see https://perfectionist.dev/rules/sort-intersection-types
   */
  'perfectionist/sort-intersection-types'?: Linter.RuleEntry<PerfectionistSortIntersectionTypes>
  /**
   * Enforce sorted JSX props.
   * @see https://perfectionist.dev/rules/sort-jsx-props
   */
  'perfectionist/sort-jsx-props'?: Linter.RuleEntry<PerfectionistSortJsxProps>
  /**
   * Enforce sorted Map elements.
   * @see https://perfectionist.dev/rules/sort-maps
   */
  'perfectionist/sort-maps'?: Linter.RuleEntry<PerfectionistSortMaps>
  /**
   * Enforce sorted modules.
   * @see https://perfectionist.dev/rules/sort-modules
   */
  'perfectionist/sort-modules'?: Linter.RuleEntry<PerfectionistSortModules>
  /**
   * Enforce sorted named exports.
   * @see https://perfectionist.dev/rules/sort-named-exports
   */
  'perfectionist/sort-named-exports'?: Linter.RuleEntry<PerfectionistSortNamedExports>
  /**
   * Enforce sorted named imports.
   * @see https://perfectionist.dev/rules/sort-named-imports
   */
  'perfectionist/sort-named-imports'?: Linter.RuleEntry<PerfectionistSortNamedImports>
  /**
   * Enforce sorted object types.
   * @see https://perfectionist.dev/rules/sort-object-types
   */
  'perfectionist/sort-object-types'?: Linter.RuleEntry<PerfectionistSortObjectTypes>
  /**
   * Enforce sorted objects.
   * @see https://perfectionist.dev/rules/sort-objects
   */
  'perfectionist/sort-objects'?: Linter.RuleEntry<PerfectionistSortObjects>
  /**
   * Enforce sorted sets.
   * @see https://perfectionist.dev/rules/sort-sets
   */
  'perfectionist/sort-sets'?: Linter.RuleEntry<PerfectionistSortSets>
  /**
   * Enforce sorted switch cases.
   * @see https://perfectionist.dev/rules/sort-switch-case
   */
  'perfectionist/sort-switch-case'?: Linter.RuleEntry<PerfectionistSortSwitchCase>
  /**
   * Enforce sorted union types.
   * @see https://perfectionist.dev/rules/sort-union-types
   */
  'perfectionist/sort-union-types'?: Linter.RuleEntry<PerfectionistSortUnionTypes>
  /**
   * Enforce sorted variable declarations.
   * @see https://perfectionist.dev/rules/sort-variable-declarations
   */
  'perfectionist/sort-variable-declarations'?: Linter.RuleEntry<PerfectionistSortVariableDeclarations>
  /**
   * Require returning inside each `then()` to create readable and reusable Promise chains.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/always-return.md
   */
  'promise/always-return'?: Linter.RuleEntry<PromiseAlwaysReturn>
  /**
   * Disallow creating `new` promises outside of utility libs (use [util.promisify][] instead).
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/avoid-new.md
   */
  'promise/avoid-new'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of `catch()` on un-returned promises.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/catch-or-return.md
   */
  'promise/catch-or-return'?: Linter.RuleEntry<PromiseCatchOrReturn>
  /**
   * Disallow calling `cb()` inside of a `then()` (use [util.callbackify][] instead).
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-callback-in-promise.md
   */
  'promise/no-callback-in-promise'?: Linter.RuleEntry<PromiseNoCallbackInPromise>
  /**
   * Disallow creating new promises with paths that resolve multiple times.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-multiple-resolved.md
   */
  'promise/no-multiple-resolved'?: Linter.RuleEntry<[]>
  /**
   * Require creating a `Promise` constructor before using it in an ES5 environment.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-native.md
   */
  'promise/no-native'?: Linter.RuleEntry<[]>
  /**
   * Disallow nested `then()` or `catch()` statements.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-nesting.md
   */
  'promise/no-nesting'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling `new` on a Promise static method.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-new-statics.md
   */
  'promise/no-new-statics'?: Linter.RuleEntry<[]>
  /**
   * Disallow using promises inside of callbacks.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-promise-in-callback.md
   */
  'promise/no-promise-in-callback'?: Linter.RuleEntry<[]>
  /**
   * Disallow return statements in `finally()`.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-return-in-finally.md
   */
  'promise/no-return-in-finally'?: Linter.RuleEntry<[]>
  /**
   * Disallow wrapping values in `Promise.resolve` or `Promise.reject` when not needed.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-return-wrap.md
   */
  'promise/no-return-wrap'?: Linter.RuleEntry<PromiseNoReturnWrap>
  /**
   * Enforce consistent param names and ordering when creating new promises.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/param-names.md
   */
  'promise/param-names'?: Linter.RuleEntry<PromiseParamNames>
  /**
   * Prefer `async`/`await` to the callback pattern.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-await-to-callbacks.md
   */
  'promise/prefer-await-to-callbacks'?: Linter.RuleEntry<[]>
  /**
   * Prefer `await` to `then()`/`catch()`/`finally()` for reading Promise values.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-await-to-then.md
   */
  'promise/prefer-await-to-then'?: Linter.RuleEntry<PromisePreferAwaitToThen>
  /**
   * Prefer `catch` to `then(a, b)`/`then(null, b)` for handling errors.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-catch.md
   */
  'promise/prefer-catch'?: Linter.RuleEntry<[]>
  /**
   * Disallow use of non-standard Promise static methods.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/spec-only.md
   */
  'promise/spec-only'?: Linter.RuleEntry<PromiseSpecOnly>
  /**
   * Enforces the proper number of arguments are passed to Promise functions.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/valid-params.md
   */
  'promise/valid-params'?: Linter.RuleEntry<PromiseValidParams>
  /**
   * Validates that TypeScript documentation comments conform to the TSDoc standard
   * @see https://tsdoc.org/pages/packages/eslint-plugin-tsdoc
   */
  'tsdoc/syntax'?: Linter.RuleEntry<[]>
  /**
   * Improve regexes by making them shorter, consistent, and safer.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/better-regex.md
   */
  'unicorn-x/better-regex'?: Linter.RuleEntry<UnicornXBetterRegex>
  /**
   * Enforce a specific parameter name in catch clauses.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/catch-error-name.md
   */
  'unicorn-x/catch-error-name'?: Linter.RuleEntry<UnicornXCatchErrorName>
  /**
   * Enforce consistent assertion style with `node:assert`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/consistent-assert.md
   */
  'unicorn-x/consistent-assert'?: Linter.RuleEntry<[]>
  /**
   * Prefer passing `Date` directly to the constructor when cloning.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/consistent-date-clone.md
   */
  'unicorn-x/consistent-date-clone'?: Linter.RuleEntry<[]>
  /**
   * Use destructured variables over properties.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/consistent-destructuring.md
   */
  'unicorn-x/consistent-destructuring'?: Linter.RuleEntry<[]>
  /**
   * Prefer consistent types when spreading a ternary in an array literal.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/consistent-empty-array-spread.md
   */
  'unicorn-x/consistent-empty-array-spread'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent style for element existence checks with `indexOf()`, `lastIndexOf()`, `findIndex()`, and `findLastIndex()`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/consistent-existence-index-check.md
   */
  'unicorn-x/consistent-existence-index-check'?: Linter.RuleEntry<[]>
  /**
   * Move function definitions to the highest possible scope.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/consistent-function-scoping.md
   */
  'unicorn-x/consistent-function-scoping'?: Linter.RuleEntry<UnicornXConsistentFunctionScoping>
  /**
   * Enforce correct `Error` subclassing.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/custom-error-definition.md
   */
  'unicorn-x/custom-error-definition'?: Linter.RuleEntry<[]>
  /**
   * Enforce no spaces between braces.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/empty-brace-spaces.md
   */
  'unicorn-x/empty-brace-spaces'?: Linter.RuleEntry<[]>
  /**
   * Enforce passing a `message` value when creating a built-in error.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/error-message.md
   */
  'unicorn-x/error-message'?: Linter.RuleEntry<[]>
  /**
   * Require escape sequences to use uppercase or lowercase values.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/escape-case.md
   */
  'unicorn-x/escape-case'?: Linter.RuleEntry<UnicornXEscapeCase>
  /**
   * Add expiration conditions to TODO comments.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/expiring-todo-comments.md
   */
  'unicorn-x/expiring-todo-comments'?: Linter.RuleEntry<UnicornXExpiringTodoComments>
  /**
   * Enforce explicitly comparing the `length` or `size` property of a value.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/explicit-length-check.md
   */
  'unicorn-x/explicit-length-check'?: Linter.RuleEntry<UnicornXExplicitLengthCheck>
  /**
   * Enforce a case style for filenames.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/filename-case.md
   */
  'unicorn-x/filename-case'?: Linter.RuleEntry<UnicornXFilenameCase>
  /**
   * Enforce specific import styles per module.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/import-style.md
   */
  'unicorn-x/import-style'?: Linter.RuleEntry<UnicornXImportStyle>
  /**
   * Enforce the use of `new` for all builtins, except `String`, `Number`, `Boolean`, `Symbol` and `BigInt`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/new-for-builtins.md
   */
  'unicorn-x/new-for-builtins'?: Linter.RuleEntry<[]>
  /**
   * Enforce specifying rules to disable in `eslint-disable` comments.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-abusive-eslint-disable.md
   */
  'unicorn-x/no-abusive-eslint-disable'?: Linter.RuleEntry<[]>
  /**
   * Disallow recursive access to `this` within getters and setters.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-accessor-recursion.md
   */
  'unicorn-x/no-accessor-recursion'?: Linter.RuleEntry<[]>
  /**
   * Disallow anonymous functions and classes as the default export.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-anonymous-default-export.md
   */
  'unicorn-x/no-anonymous-default-export'?: Linter.RuleEntry<[]>
  /**
   * Prevent passing a function reference directly to iterator methods.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-array-callback-reference.md
   */
  'unicorn-x/no-array-callback-reference'?: Linter.RuleEntry<[]>
  /**
   * Prefer `for…of` over the `forEach` method.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-array-for-each.md
   */
  'unicorn-x/no-array-for-each'?: Linter.RuleEntry<[]>
  /**
   * Disallow using the `this` argument in array methods.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-array-method-this-argument.md
   */
  'unicorn-x/no-array-method-this-argument'?: Linter.RuleEntry<[]>
  /**
   * Replaced by `unicorn/prefer-single-call` which covers more cases.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/v1.0.8/docs/deprecated-rules.md#no-array-push-push
   * @deprecated
   */
  'unicorn-x/no-array-push-push'?: Linter.RuleEntry<[]>
  /**
   * Disallow `Array#reduce()` and `Array#reduceRight()`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-array-reduce.md
   */
  'unicorn-x/no-array-reduce'?: Linter.RuleEntry<UnicornXNoArrayReduce>
  /**
   * Disallow member access from await expression.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-await-expression-member.md
   */
  'unicorn-x/no-await-expression-member'?: Linter.RuleEntry<[]>
  /**
   * Disallow using `await` in `Promise` method parameters.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-await-in-promise-methods.md
   */
  'unicorn-x/no-await-in-promise-methods'?: Linter.RuleEntry<[]>
  /**
   * Do not use leading/trailing space between `console.log` parameters.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-console-spaces.md
   */
  'unicorn-x/no-console-spaces'?: Linter.RuleEntry<[]>
  /**
   * Do not use `document.cookie` directly.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-document-cookie.md
   */
  'unicorn-x/no-document-cookie'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty files.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-empty-file.md
   */
  'unicorn-x/no-empty-file'?: Linter.RuleEntry<[]>
  /**
   * Do not use a `for` loop that can be replaced with a `for-of` loop.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-for-loop.md
   */
  'unicorn-x/no-for-loop'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of Unicode escapes instead of hexadecimal escapes.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-hex-escape.md
   */
  'unicorn-x/no-hex-escape'?: Linter.RuleEntry<[]>
  /**
   * Replaced by `unicorn-x/no-instanceof-builtins` which covers more cases.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/v1.0.8/docs/deprecated-rules.md#no-instanceof-array
   * @deprecated
   */
  'unicorn-x/no-instanceof-array'?: Linter.RuleEntry<[]>
  /**
   * Disallow `instanceof` with built-in objects
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-instanceof-builtins.md
   */
  'unicorn-x/no-instanceof-builtins'?: Linter.RuleEntry<UnicornXNoInstanceofBuiltins>
  /**
   * Disallow invalid options in `fetch()` and `new Request()`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-invalid-fetch-options.md
   */
  'unicorn-x/no-invalid-fetch-options'?: Linter.RuleEntry<[]>
  /**
   * Prevent calling `EventTarget#removeEventListener()` with the result of an expression.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-invalid-remove-event-listener.md
   */
  'unicorn-x/no-invalid-remove-event-listener'?: Linter.RuleEntry<[]>
  /**
   * Disallow identifiers starting with `new` or `class`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-keyword-prefix.md
   */
  'unicorn-x/no-keyword-prefix'?: Linter.RuleEntry<UnicornXNoKeywordPrefix>
  /**
   * Replaced by `unicorn-x/no-unnecessary-slice-end` which covers more cases.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/v1.0.8/docs/deprecated-rules.md#no-length-as-slice-end
   * @deprecated
   */
  'unicorn-x/no-length-as-slice-end'?: Linter.RuleEntry<[]>
  /**
   * Disallow `if` statements as the only statement in `if` blocks without `else`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-lonely-if.md
   */
  'unicorn-x/no-lonely-if'?: Linter.RuleEntry<[]>
  /**
   * Disallow a magic number as the `depth` argument in `Array#flat(…).`
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-magic-array-flat-depth.md
   */
  'unicorn-x/no-magic-array-flat-depth'?: Linter.RuleEntry<[]>
  /**
   * Disallow named usage of default import and export.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-named-default.md
   */
  'unicorn-x/no-named-default'?: Linter.RuleEntry<[]>
  /**
   * Disallow negated conditions.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-negated-condition.md
   */
  'unicorn-x/no-negated-condition'?: Linter.RuleEntry<[]>
  /**
   * Disallow negated expression in equality check.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-negation-in-equality-check.md
   */
  'unicorn-x/no-negation-in-equality-check'?: Linter.RuleEntry<[]>
  /**
   * Disallow nested ternary expressions.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-nested-ternary.md
   */
  'unicorn-x/no-nested-ternary'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new Array()`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-new-array.md
   */
  'unicorn-x/no-new-array'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-new-buffer.md
   */
  'unicorn-x/no-new-buffer'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of the `null` literal.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-null.md
   */
  'unicorn-x/no-null'?: Linter.RuleEntry<UnicornXNoNull>
  /**
   * Disallow the use of objects as default parameters.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-object-as-default-parameter.md
   */
  'unicorn-x/no-object-as-default-parameter'?: Linter.RuleEntry<[]>
  /**
   * Disallow `process.exit()`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-process-exit.md
   */
  'unicorn-x/no-process-exit'?: Linter.RuleEntry<[]>
  /**
   * Disallow passing single-element arrays to `Promise` methods.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-single-promise-in-promise-methods.md
   */
  'unicorn-x/no-single-promise-in-promise-methods'?: Linter.RuleEntry<[]>
  /**
   * Disallow classes that only have static members.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-static-only-class.md
   */
  'unicorn-x/no-static-only-class'?: Linter.RuleEntry<[]>
  /**
   * Disallow `then` property.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-thenable.md
   */
  'unicorn-x/no-thenable'?: Linter.RuleEntry<[]>
  /**
   * Disallow assigning `this` to a variable.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-this-assignment.md
   */
  'unicorn-x/no-this-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow comparing `undefined` using `typeof`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-typeof-undefined.md
   */
  'unicorn-x/no-typeof-undefined'?: Linter.RuleEntry<UnicornXNoTypeofUndefined>
  /**
   * Disallow using `1` as the `depth` argument of `Array#flat()`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-unnecessary-array-flat-depth.md
   */
  'unicorn-x/no-unnecessary-array-flat-depth'?: Linter.RuleEntry<[]>
  /**
   * Disallow using `.length` or `Infinity` as the `deleteCount` or `skipCount` argument of `Array#{splice,toSpliced}()`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-unnecessary-array-splice-count.md
   */
  'unicorn-x/no-unnecessary-array-splice-count'?: Linter.RuleEntry<[]>
  /**
   * Disallow awaiting non-promise values.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-unnecessary-await.md
   */
  'unicorn-x/no-unnecessary-await'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of built-in methods instead of unnecessary polyfills.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-unnecessary-polyfills.md
   */
  'unicorn-x/no-unnecessary-polyfills'?: Linter.RuleEntry<UnicornXNoUnnecessaryPolyfills>
  /**
   * Disallow using `.length` or `Infinity` as the `end` argument of `{Array,String,TypedArray}#slice()`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-unnecessary-slice-end.md
   */
  'unicorn-x/no-unnecessary-slice-end'?: Linter.RuleEntry<[]>
  /**
   * Disallow unreadable array destructuring.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-unreadable-array-destructuring.md
   */
  'unicorn-x/no-unreadable-array-destructuring'?: Linter.RuleEntry<[]>
  /**
   * Disallow unreadable IIFEs.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-unreadable-iife.md
   */
  'unicorn-x/no-unreadable-iife'?: Linter.RuleEntry<[]>
  /**
   * Disallow unused object properties.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-unused-properties.md
   */
  'unicorn-x/no-unused-properties'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless fallback when spreading in object literals.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-useless-fallback-in-spread.md
   */
  'unicorn-x/no-useless-fallback-in-spread'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless array length check.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-useless-length-check.md
   */
  'unicorn-x/no-useless-length-check'?: Linter.RuleEntry<[]>
  /**
   * Disallow returning/yielding `Promise.resolve/reject()` in async functions or promise callbacks
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-useless-promise-resolve-reject.md
   */
  'unicorn-x/no-useless-promise-resolve-reject'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary spread.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-useless-spread.md
   */
  'unicorn-x/no-useless-spread'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless case in switch statements.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-useless-switch-case.md
   */
  'unicorn-x/no-useless-switch-case'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless `undefined`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-useless-undefined.md
   */
  'unicorn-x/no-useless-undefined'?: Linter.RuleEntry<UnicornXNoUselessUndefined>
  /**
   * Disallow number literals with zero fractions or dangling dots.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/no-zero-fractions.md
   */
  'unicorn-x/no-zero-fractions'?: Linter.RuleEntry<[]>
  /**
   * Enforce proper case for numeric literals.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/number-literal-case.md
   */
  'unicorn-x/number-literal-case'?: Linter.RuleEntry<UnicornXNumberLiteralCase>
  /**
   * Enforce the style of numeric separators by correctly grouping digits.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/numeric-separators-style.md
   */
  'unicorn-x/numeric-separators-style'?: Linter.RuleEntry<UnicornXNumericSeparatorsStyle>
  /**
   * Prefer `.addEventListener()` and `.removeEventListener()` over `on`-functions.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-add-event-listener.md
   */
  'unicorn-x/prefer-add-event-listener'?: Linter.RuleEntry<UnicornXPreferAddEventListener>
  /**
   * Prefer `.find(…)` and `.findLast(…)` over the first or last element from `.filter(…)`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-array-find.md
   */
  'unicorn-x/prefer-array-find'?: Linter.RuleEntry<UnicornXPreferArrayFind>
  /**
   * Prefer `Array#flat()` over legacy techniques to flatten arrays.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-array-flat.md
   */
  'unicorn-x/prefer-array-flat'?: Linter.RuleEntry<UnicornXPreferArrayFlat>
  /**
   * Prefer `.flatMap(…)` over `.map(…).flat()`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-array-flat-map.md
   */
  'unicorn-x/prefer-array-flat-map'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Array#{indexOf,lastIndexOf}()` over `Array#{findIndex,findLastIndex}()` when looking for the index of an item.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-array-index-of.md
   */
  'unicorn-x/prefer-array-index-of'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.some(…)` over `.filter(…).length` check and `.{find,findLast,findIndex,findLastIndex}(…)`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-array-some.md
   */
  'unicorn-x/prefer-array-some'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.at()` method for index access and `String#charAt()`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-at.md
   */
  'unicorn-x/prefer-at'?: Linter.RuleEntry<UnicornXPreferAt>
  /**
   * Prefer `Blob#arrayBuffer()` over `FileReader#readAsArrayBuffer(…)` and `Blob#text()` over `FileReader#readAsText(…)`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-blob-reading-methods.md
   */
  'unicorn-x/prefer-blob-reading-methods'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#codePointAt(…)` over `String#charCodeAt(…)` and `String.fromCodePoint(…)` over `String.fromCharCode(…)`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-code-point.md
   */
  'unicorn-x/prefer-code-point'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Date.now()` to get the number of milliseconds since the Unix Epoch.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-date-now.md
   */
  'unicorn-x/prefer-date-now'?: Linter.RuleEntry<[]>
  /**
   * Prefer default parameters over reassignment.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-default-parameters.md
   */
  'unicorn-x/prefer-default-parameters'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Node#append()` over `Node#appendChild()`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-dom-node-append.md
   */
  'unicorn-x/prefer-dom-node-append'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `.dataset` on DOM elements over calling attribute methods.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-dom-node-dataset.md
   */
  'unicorn-x/prefer-dom-node-dataset'?: Linter.RuleEntry<[]>
  /**
   * Prefer `childNode.remove()` over `parentNode.removeChild(childNode)`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-dom-node-remove.md
   */
  'unicorn-x/prefer-dom-node-remove'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.textContent` over `.innerText`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-dom-node-text-content.md
   */
  'unicorn-x/prefer-dom-node-text-content'?: Linter.RuleEntry<[]>
  /**
   * Prefer `EventTarget` over `EventEmitter`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-event-target.md
   */
  'unicorn-x/prefer-event-target'?: Linter.RuleEntry<[]>
  /**
   * Prefer `export…from` when re-exporting.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-export-from.md
   */
  'unicorn-x/prefer-export-from'?: Linter.RuleEntry<UnicornXPreferExportFrom>
  /**
   * Prefer `globalThis` over `window`, `self`, and `global`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-global-this.md
   */
  'unicorn-x/prefer-global-this'?: Linter.RuleEntry<[]>
  /**
   * Prefer `import.meta.{dirname,filename}` over legacy techniques for getting file paths.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-import-meta-properties.md
   */
  'unicorn-x/prefer-import-meta-properties'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.includes()` over `.indexOf()`, `.lastIndexOf()`, and `Array#some()` when checking for existence or non-existence.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-includes.md
   */
  'unicorn-x/prefer-includes'?: Linter.RuleEntry<[]>
  /**
   * Prefer reading a JSON file as a buffer.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-json-parse-buffer.md
   */
  'unicorn-x/prefer-json-parse-buffer'?: Linter.RuleEntry<[]>
  /**
   * Prefer `KeyboardEvent#key` over `KeyboardEvent#keyCode`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-keyboard-event-key.md
   */
  'unicorn-x/prefer-keyboard-event-key'?: Linter.RuleEntry<[]>
  /**
   * Prefer using a logical operator over a ternary.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-logical-operator-over-ternary.md
   */
  'unicorn-x/prefer-logical-operator-over-ternary'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Math.min()` and `Math.max()` over ternaries for simple comparisons.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-math-min-max.md
   */
  'unicorn-x/prefer-math-min-max'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of `Math.trunc` instead of bitwise operators.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-math-trunc.md
   */
  'unicorn-x/prefer-math-trunc'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.before()` over `.insertBefore()`, `.replaceWith()` over `.replaceChild()`, prefer one of `.before()`, `.after()`, `.append()` or `.prepend()` over `insertAdjacentText()` and `insertAdjacentElement()`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-modern-dom-apis.md
   */
  'unicorn-x/prefer-modern-dom-apis'?: Linter.RuleEntry<[]>
  /**
   * Prefer modern `Math` APIs over legacy patterns.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-modern-math-apis.md
   */
  'unicorn-x/prefer-modern-math-apis'?: Linter.RuleEntry<[]>
  /**
   * Prefer JavaScript modules (ESM) over CommonJS.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-module.md
   */
  'unicorn-x/prefer-module'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `String`, `Number`, `BigInt`, `Boolean`, and `Symbol` directly.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-native-coercion-functions.md
   */
  'unicorn-x/prefer-native-coercion-functions'?: Linter.RuleEntry<[]>
  /**
   * Prefer negative index over `.length - index` when possible.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-negative-index.md
   */
  'unicorn-x/prefer-negative-index'?: Linter.RuleEntry<[]>
  /**
   * Prefer using the `node:` protocol when importing Node.js builtin modules.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-node-protocol.md
   */
  'unicorn-x/prefer-node-protocol'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Number` static properties over global ones.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-number-properties.md
   */
  'unicorn-x/prefer-number-properties'?: Linter.RuleEntry<UnicornXPreferNumberProperties>
  /**
   * Prefer using `Object.fromEntries(…)` to transform a list of key-value pairs into an object.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-object-from-entries.md
   */
  'unicorn-x/prefer-object-from-entries'?: Linter.RuleEntry<UnicornXPreferObjectFromEntries>
  /**
   * Prefer omitting the `catch` binding parameter.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-optional-catch-binding.md
   */
  'unicorn-x/prefer-optional-catch-binding'?: Linter.RuleEntry<[]>
  /**
   * Prefer borrowing methods from the prototype instead of the instance.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-prototype-methods.md
   */
  'unicorn-x/prefer-prototype-methods'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.querySelector()` over `.getElementById()`, `.querySelectorAll()` over `.getElementsByClassName()` and `.getElementsByTagName()` and `.getElementsByName()`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-query-selector.md
   */
  'unicorn-x/prefer-query-selector'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Reflect.apply()` over `Function#apply()`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-reflect-apply.md
   */
  'unicorn-x/prefer-reflect-apply'?: Linter.RuleEntry<[]>
  /**
   * Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-regexp-test.md
   */
  'unicorn-x/prefer-regexp-test'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Set#has()` over `Array#includes()` when checking for existence or non-existence.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-set-has.md
   */
  'unicorn-x/prefer-set-has'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `Set#size` instead of `Array#length`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-set-size.md
   */
  'unicorn-x/prefer-set-size'?: Linter.RuleEntry<[]>
  /**
   * Enforce combining multiple `Array#push()`, `Element#classList.{add,remove}()`, and `importScripts()` into one call.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-single-call.md
   */
  'unicorn-x/prefer-single-call'?: Linter.RuleEntry<UnicornXPreferSingleCall>
  /**
   * Prefer the spread operator over `Array.from(…)`, `Array#concat(…)`, `Array#{slice,toSpliced}()` and `String#split('')`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-spread.md
   */
  'unicorn-x/prefer-spread'?: Linter.RuleEntry<[]>
  /**
   * Prefer using the `String.raw` tag to avoid escaping `\`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-string-raw.md
   */
  'unicorn-x/prefer-string-raw'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#replaceAll()` over regex searches with the global flag.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-string-replace-all.md
   */
  'unicorn-x/prefer-string-replace-all'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#slice()` over `String#substr()` and `String#substring()`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-string-slice.md
   */
  'unicorn-x/prefer-string-slice'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#startsWith()` & `String#endsWith()` over `RegExp#test()`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-string-starts-ends-with.md
   */
  'unicorn-x/prefer-string-starts-ends-with'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#trimStart()` / `String#trimEnd()` over `String#trimLeft()` / `String#trimRight()`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-string-trim-start-end.md
   */
  'unicorn-x/prefer-string-trim-start-end'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `structuredClone` to create a deep clone.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-structured-clone.md
   */
  'unicorn-x/prefer-structured-clone'?: Linter.RuleEntry<UnicornXPreferStructuredClone>
  /**
   * Prefer `switch` over multiple `else-if`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-switch.md
   */
  'unicorn-x/prefer-switch'?: Linter.RuleEntry<UnicornXPreferSwitch>
  /**
   * Prefer ternary expressions over simple `if-else` statements.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-ternary.md
   */
  'unicorn-x/prefer-ternary'?: Linter.RuleEntry<UnicornXPreferTernary>
  /**
   * Prefer top-level await over top-level promises and async function calls.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-top-level-await.md
   */
  'unicorn-x/prefer-top-level-await'?: Linter.RuleEntry<[]>
  /**
   * Enforce throwing `TypeError` in type checking conditions.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prefer-type-error.md
   */
  'unicorn-x/prefer-type-error'?: Linter.RuleEntry<[]>
  /**
   * Prevent abbreviations.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/prevent-abbreviations.md
   */
  'unicorn-x/prevent-abbreviations'?: Linter.RuleEntry<UnicornXPreventAbbreviations>
  /**
   * Enforce consistent relative URL style.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/relative-url-style.md
   */
  'unicorn-x/relative-url-style'?: Linter.RuleEntry<UnicornXRelativeUrlStyle>
  /**
   * Enforce using the separator argument with `Array#join()`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/require-array-join-separator.md
   */
  'unicorn-x/require-array-join-separator'?: Linter.RuleEntry<[]>
  /**
   * Enforce using the digits argument with `Number#toFixed()`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/require-number-to-fixed-digits-argument.md
   */
  'unicorn-x/require-number-to-fixed-digits-argument'?: Linter.RuleEntry<[]>
  /**
   * Enforce using the `targetOrigin` argument with `window.postMessage()`.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/require-post-message-target-origin.md
   */
  'unicorn-x/require-post-message-target-origin'?: Linter.RuleEntry<[]>
  /**
   * Enforce better string content.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/string-content.md
   */
  'unicorn-x/string-content'?: Linter.RuleEntry<UnicornXStringContent>
  /**
   * Enforce consistent brace style for `case` clauses.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/switch-case-braces.md
   */
  'unicorn-x/switch-case-braces'?: Linter.RuleEntry<UnicornXSwitchCaseBraces>
  /**
   * Fix whitespace-insensitive template indentation.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/template-indent.md
   */
  'unicorn-x/template-indent'?: Linter.RuleEntry<UnicornXTemplateIndent>
  /**
   * Enforce consistent case for text encoding identifiers.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/text-encoding-identifier-case.md
   */
  'unicorn-x/text-encoding-identifier-case'?: Linter.RuleEntry<[]>
  /**
   * Require `new` when creating an error.
   * @see https://github.com/es-tooling/eslint-plugin-unicorn-x/blob/1.0.8/docs/rules/throw-new-error.md
   */
  'unicorn-x/throw-new-error'?: Linter.RuleEntry<[]>
}

/* ======= Declarations ======= */
// ----- @eslint-community/eslint-comments/disable-enable-pair -----
/** @internal */
export type EslintCommunityEslintCommentsDisableEnablePair = []|[{
  allowWholeFile?: boolean
}]
// ----- @eslint-community/eslint-comments/no-restricted-disable -----
/** @internal */
export type EslintCommunityEslintCommentsNoRestrictedDisable = string[]
// ----- @eslint-community/eslint-comments/no-use -----
/** @internal */
export type EslintCommunityEslintCommentsNoUse = []|[{
  allow?: ("eslint" | "eslint-disable" | "eslint-disable-line" | "eslint-disable-next-line" | "eslint-enable" | "eslint-env" | "exported" | "global" | "globals")[]
}]
// ----- @eslint-community/eslint-comments/require-description -----
/** @internal */
export type EslintCommunityEslintCommentsRequireDescription = []|[{
  ignore?: ("eslint" | "eslint-disable" | "eslint-disable-line" | "eslint-disable-next-line" | "eslint-enable" | "eslint-env" | "exported" | "global" | "globals")[]
}]
// ----- @regru/prefer-early-return -----
/** @internal */
export type RegruPreferEarlyReturn = []|[{
  maximumStatements?: number
}]
// ----- @stylistic/array-bracket-newline -----
/** @internal */
export type StylisticArrayBracketNewline = []|[(("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})]
// ----- @stylistic/array-bracket-spacing -----
/** @internal */
export type StylisticArrayBracketSpacing = []|[("always" | "never")]|[("always" | "never"), {
  singleValue?: boolean
  objectsInArrays?: boolean
  arraysInArrays?: boolean
}]
// ----- @stylistic/array-element-newline -----
/** @internal */
export type StylisticArrayElementNewline = []|[(_StylisticArrayElementNewlineBasicConfig | {
  ArrayExpression?: _StylisticArrayElementNewlineBasicConfig
  ArrayPattern?: _StylisticArrayElementNewlineBasicConfig
})]
/** @internal */
export type _StylisticArrayElementNewlineBasicConfig = (("always" | "never" | "consistent") | {
  consistent?: boolean
  multiline?: boolean
  minItems?: (number | null)
})
// ----- @stylistic/arrow-parens -----
/** @internal */
export type StylisticArrowParens = []|[("always" | "as-needed")]|[("always" | "as-needed"), {
  requireForBlockBody?: boolean
}]
// ----- @stylistic/arrow-spacing -----
/** @internal */
export type StylisticArrowSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- @stylistic/block-spacing -----
/** @internal */
export type StylisticBlockSpacing = []|[("always" | "never")]
// ----- @stylistic/brace-style -----
/** @internal */
export type StylisticBraceStyle = []|[("1tbs" | "stroustrup" | "allman")]|[("1tbs" | "stroustrup" | "allman"), {
  allowSingleLine?: boolean
}]
// ----- @stylistic/comma-dangle -----
/** @internal */
export type StylisticCommaDangle = []|[(_StylisticCommaDangleValue | {
  arrays?: _StylisticCommaDangleValueWithIgnore
  objects?: _StylisticCommaDangleValueWithIgnore
  imports?: _StylisticCommaDangleValueWithIgnore
  exports?: _StylisticCommaDangleValueWithIgnore
  functions?: _StylisticCommaDangleValueWithIgnore
  importAttributes?: _StylisticCommaDangleValueWithIgnore
  dynamicImports?: _StylisticCommaDangleValueWithIgnore
  enums?: _StylisticCommaDangleValueWithIgnore
  generics?: _StylisticCommaDangleValueWithIgnore
  tuples?: _StylisticCommaDangleValueWithIgnore
})]
/** @internal */
export type _StylisticCommaDangleValue = ("always-multiline" | "always" | "never" | "only-multiline")
/** @internal */
export type _StylisticCommaDangleValueWithIgnore = ("always-multiline" | "always" | "never" | "only-multiline" | "ignore")
// ----- @stylistic/comma-spacing -----
/** @internal */
export type StylisticCommaSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- @stylistic/comma-style -----
/** @internal */
export type StylisticCommaStyle = []|[("first" | "last")]|[("first" | "last"), {
  exceptions?: {
    [k: string]: boolean | undefined
  }
}]
// ----- @stylistic/computed-property-spacing -----
/** @internal */
export type StylisticComputedPropertySpacing = []|[("always" | "never")]|[("always" | "never"), {
  enforceForClassMembers?: boolean
}]
// ----- @stylistic/curly-newline -----
/** @internal */
export type StylisticCurlyNewline = []|[(("always" | "never") | {
  IfStatementConsequent?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  IfStatementAlternative?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  DoWhileStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ForInStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ForOfStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ForStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  WhileStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  SwitchStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  SwitchCase?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TryStatementBlock?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TryStatementHandler?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TryStatementFinalizer?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  BlockStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ArrowFunctionExpression?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  FunctionDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  FunctionExpression?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  Property?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ClassBody?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  StaticBlock?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  WithStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TSEnumBody?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TSInterfaceBody?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TSModuleBlock?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  multiline?: boolean
  minElements?: number
  consistent?: boolean
})]
// ----- @stylistic/dot-location -----
/** @internal */
export type StylisticDotLocation = []|[("object" | "property")]
// ----- @stylistic/eol-last -----
/** @internal */
export type StylisticEolLast = []|[("always" | "never" | "unix" | "windows")]
// ----- @stylistic/func-call-spacing -----
/** @internal */
export type StylisticFuncCallSpacing = ([]|["never"] | []|["always"]|["always", {
  allowNewlines?: boolean
  optionalChain?: {
    before?: boolean
    after?: boolean
  }
}])
// ----- @stylistic/function-call-argument-newline -----
/** @internal */
export type StylisticFunctionCallArgumentNewline = []|[("always" | "never" | "consistent")]
// ----- @stylistic/function-call-spacing -----
/** @internal */
export type StylisticFunctionCallSpacing = ([]|["never"] | []|["always"]|["always", {
  allowNewlines?: boolean
  optionalChain?: {
    before?: boolean
    after?: boolean
  }
}])
// ----- @stylistic/function-paren-newline -----
/** @internal */
export type StylisticFunctionParenNewline = []|[(("always" | "never" | "consistent" | "multiline" | "multiline-arguments") | {
  minItems?: number
})]
// ----- @stylistic/generator-star-spacing -----
/** @internal */
export type StylisticGeneratorStarSpacing = []|[(("before" | "after" | "both" | "neither") | {
  before?: boolean
  after?: boolean
  named?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
  anonymous?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
  method?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
})]
// ----- @stylistic/implicit-arrow-linebreak -----
/** @internal */
export type StylisticImplicitArrowLinebreak = []|[("beside" | "below")]
// ----- @stylistic/indent -----
/** @internal */
export type StylisticIndent = []|[("tab" | number)]|[("tab" | number), {
  SwitchCase?: number
  VariableDeclarator?: ((number | ("first" | "off")) | {
    var?: (number | ("first" | "off"))
    let?: (number | ("first" | "off"))
    const?: (number | ("first" | "off"))
  })
  outerIIFEBody?: (number | "off")
  MemberExpression?: (number | "off")
  FunctionDeclaration?: {
    parameters?: (number | ("first" | "off"))
    body?: number
  }
  FunctionExpression?: {
    parameters?: (number | ("first" | "off"))
    body?: number
  }
  StaticBlock?: {
    body?: number
  }
  CallExpression?: {
    arguments?: (number | ("first" | "off"))
  }
  ArrayExpression?: (number | ("first" | "off"))
  ObjectExpression?: (number | ("first" | "off"))
  ImportDeclaration?: (number | ("first" | "off"))
  flatTernaryExpressions?: boolean
  offsetTernaryExpressions?: boolean
  offsetTernaryExpressionsOffsetCallExpressions?: boolean
  ignoredNodes?: string[]
  ignoreComments?: boolean
  tabLength?: number
}]
// ----- @stylistic/indent-binary-ops -----
/** @internal */
export type StylisticIndentBinaryOps = []|[(number | "tab")]
// ----- @stylistic/jsx-closing-bracket-location -----
/** @internal */
export type StylisticJsxClosingBracketLocation = []|[(("after-props" | "props-aligned" | "tag-aligned" | "line-aligned") | {
  location?: ("after-props" | "props-aligned" | "tag-aligned" | "line-aligned")
} | {
  nonEmpty?: (("after-props" | "props-aligned" | "tag-aligned" | "line-aligned") | false)
  selfClosing?: (("after-props" | "props-aligned" | "tag-aligned" | "line-aligned") | false)
})]
// ----- @stylistic/jsx-closing-tag-location -----
/** @internal */
export type StylisticJsxClosingTagLocation = []|[("tag-aligned" | "line-aligned")]
// ----- @stylistic/jsx-curly-brace-presence -----
/** @internal */
export type StylisticJsxCurlyBracePresence = []|[({
  props?: ("always" | "never" | "ignore")
  children?: ("always" | "never" | "ignore")
  propElementValues?: ("always" | "never" | "ignore")
} | ("always" | "never" | "ignore"))]
// ----- @stylistic/jsx-curly-newline -----
/** @internal */
export type StylisticJsxCurlyNewline = []|[(("consistent" | "never") | {
  singleline?: ("consistent" | "require" | "forbid")
  multiline?: ("consistent" | "require" | "forbid")
})]
// ----- @stylistic/jsx-curly-spacing -----
/** @internal */
export type StylisticJsxCurlySpacing = []|[((_StylisticJsxCurlySpacing_BasicConfig & {
  attributes?: _StylisticJsxCurlySpacingBasicConfigOrBoolean
  children?: _StylisticJsxCurlySpacingBasicConfigOrBoolean
  [k: string]: unknown | undefined
}) | ("always" | "never"))]|[((_StylisticJsxCurlySpacing_BasicConfig & {
  attributes?: _StylisticJsxCurlySpacingBasicConfigOrBoolean
  children?: _StylisticJsxCurlySpacingBasicConfigOrBoolean
  [k: string]: unknown | undefined
}) | ("always" | "never")), {
  allowMultiline?: boolean
  spacing?: {
    objectLiterals?: ("always" | "never")
    [k: string]: unknown | undefined
  }
}]
/** @internal */
export type _StylisticJsxCurlySpacingBasicConfigOrBoolean = (_StylisticJsxCurlySpacing_BasicConfig | boolean)
interface _StylisticJsxCurlySpacing_BasicConfig {
  when?: ("always" | "never")
  allowMultiline?: boolean
  spacing?: {
    objectLiterals?: ("always" | "never")
    [k: string]: unknown | undefined
  }
  [k: string]: unknown | undefined
}
// ----- @stylistic/jsx-equals-spacing -----
/** @internal */
export type StylisticJsxEqualsSpacing = []|[("always" | "never")]
// ----- @stylistic/jsx-first-prop-new-line -----
/** @internal */
export type StylisticJsxFirstPropNewLine = []|[("always" | "never" | "multiline" | "multiline-multiprop" | "multiprop")]
// ----- @stylistic/jsx-function-call-newline -----
/** @internal */
export type StylisticJsxFunctionCallNewline = []|[("always" | "multiline")]
// ----- @stylistic/jsx-indent -----
/** @internal */
export type StylisticJsxIndent = []|[("tab" | number)]|[("tab" | number), {
  checkAttributes?: boolean
  indentLogicalExpressions?: boolean
}]
// ----- @stylistic/jsx-indent-props -----
/** @internal */
export type StylisticJsxIndentProps = []|[(("tab" | "first") | number | {
  indentMode?: (("tab" | "first") | number)
  ignoreTernaryOperator?: boolean
  [k: string]: unknown | undefined
})]
// ----- @stylistic/jsx-max-props-per-line -----
/** @internal */
export type StylisticJsxMaxPropsPerLine = []|[({
  maximum?: {
    single?: number
    multi?: number
    [k: string]: unknown | undefined
  }
} | {
  maximum?: number
  when?: ("always" | "multiline")
})]
// ----- @stylistic/jsx-newline -----
/** @internal */
export type StylisticJsxNewline = []|[{
  prevent?: boolean
  allowMultilines?: boolean
}]
// ----- @stylistic/jsx-one-expression-per-line -----
/** @internal */
export type StylisticJsxOneExpressionPerLine = []|[{
  allow?: ("none" | "literal" | "single-child" | "single-line" | "non-jsx")
}]
// ----- @stylistic/jsx-pascal-case -----
/** @internal */
export type StylisticJsxPascalCase = []|[{
  allowAllCaps?: boolean
  allowLeadingUnderscore?: boolean
  allowNamespace?: boolean
  ignore?: string[]
}]
// ----- @stylistic/jsx-quotes -----
/** @internal */
export type StylisticJsxQuotes = []|[("prefer-single" | "prefer-double")]
// ----- @stylistic/jsx-self-closing-comp -----
/** @internal */
export type StylisticJsxSelfClosingComp = []|[{
  component?: boolean
  html?: boolean
}]
// ----- @stylistic/jsx-sort-props -----
/** @internal */
export type StylisticJsxSortProps = []|[{
  callbacksLast?: boolean
  shorthandFirst?: boolean
  shorthandLast?: boolean
  multiline?: ("ignore" | "first" | "last")
  ignoreCase?: boolean
  noSortAlphabetically?: boolean
  reservedFirst?: (unknown[] | boolean)
  locale?: string
}]
// ----- @stylistic/jsx-tag-spacing -----
/** @internal */
export type StylisticJsxTagSpacing = []|[{
  closingSlash?: ("always" | "never" | "allow")
  beforeSelfClosing?: ("always" | "proportional-always" | "never" | "allow")
  afterOpening?: ("always" | "allow-multiline" | "never" | "allow")
  beforeClosing?: ("always" | "proportional-always" | "never" | "allow")
}]
// ----- @stylistic/jsx-wrap-multilines -----
/** @internal */
export type StylisticJsxWrapMultilines = []|[{
  declaration?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  assignment?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  return?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  arrow?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  condition?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  logical?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  prop?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  propertyValue?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
}]
// ----- @stylistic/key-spacing -----
/** @internal */
export type StylisticKeySpacing = []|[({
  align?: (("colon" | "value") | {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  })
  mode?: ("strict" | "minimum")
  beforeColon?: boolean
  afterColon?: boolean
  ignoredNodes?: ("ObjectExpression" | "ObjectPattern" | "ImportDeclaration" | "ExportNamedDeclaration" | "ExportAllDeclaration" | "TSTypeLiteral" | "TSInterfaceBody" | "ClassBody")[]
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    align?: (("colon" | "value") | {
      mode?: ("strict" | "minimum")
      on?: ("colon" | "value")
      beforeColon?: boolean
      afterColon?: boolean
    })
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  align?: {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  }
})]
// ----- @stylistic/keyword-spacing -----
/** @internal */
export type StylisticKeywordSpacing = []|[{
  before?: boolean
  after?: boolean
  overrides?: {
    abstract?: {
      before?: boolean
      after?: boolean
    }
    as?: {
      before?: boolean
      after?: boolean
    }
    async?: {
      before?: boolean
      after?: boolean
    }
    await?: {
      before?: boolean
      after?: boolean
    }
    boolean?: {
      before?: boolean
      after?: boolean
    }
    break?: {
      before?: boolean
      after?: boolean
    }
    byte?: {
      before?: boolean
      after?: boolean
    }
    case?: {
      before?: boolean
      after?: boolean
    }
    catch?: {
      before?: boolean
      after?: boolean
    }
    char?: {
      before?: boolean
      after?: boolean
    }
    class?: {
      before?: boolean
      after?: boolean
    }
    const?: {
      before?: boolean
      after?: boolean
    }
    continue?: {
      before?: boolean
      after?: boolean
    }
    debugger?: {
      before?: boolean
      after?: boolean
    }
    default?: {
      before?: boolean
      after?: boolean
    }
    delete?: {
      before?: boolean
      after?: boolean
    }
    do?: {
      before?: boolean
      after?: boolean
    }
    double?: {
      before?: boolean
      after?: boolean
    }
    else?: {
      before?: boolean
      after?: boolean
    }
    enum?: {
      before?: boolean
      after?: boolean
    }
    export?: {
      before?: boolean
      after?: boolean
    }
    extends?: {
      before?: boolean
      after?: boolean
    }
    false?: {
      before?: boolean
      after?: boolean
    }
    final?: {
      before?: boolean
      after?: boolean
    }
    finally?: {
      before?: boolean
      after?: boolean
    }
    float?: {
      before?: boolean
      after?: boolean
    }
    for?: {
      before?: boolean
      after?: boolean
    }
    from?: {
      before?: boolean
      after?: boolean
    }
    function?: {
      before?: boolean
      after?: boolean
    }
    get?: {
      before?: boolean
      after?: boolean
    }
    goto?: {
      before?: boolean
      after?: boolean
    }
    if?: {
      before?: boolean
      after?: boolean
    }
    implements?: {
      before?: boolean
      after?: boolean
    }
    import?: {
      before?: boolean
      after?: boolean
    }
    in?: {
      before?: boolean
      after?: boolean
    }
    instanceof?: {
      before?: boolean
      after?: boolean
    }
    int?: {
      before?: boolean
      after?: boolean
    }
    interface?: {
      before?: boolean
      after?: boolean
    }
    let?: {
      before?: boolean
      after?: boolean
    }
    long?: {
      before?: boolean
      after?: boolean
    }
    native?: {
      before?: boolean
      after?: boolean
    }
    new?: {
      before?: boolean
      after?: boolean
    }
    null?: {
      before?: boolean
      after?: boolean
    }
    of?: {
      before?: boolean
      after?: boolean
    }
    package?: {
      before?: boolean
      after?: boolean
    }
    private?: {
      before?: boolean
      after?: boolean
    }
    protected?: {
      before?: boolean
      after?: boolean
    }
    public?: {
      before?: boolean
      after?: boolean
    }
    return?: {
      before?: boolean
      after?: boolean
    }
    satisfies?: {
      before?: boolean
      after?: boolean
    }
    set?: {
      before?: boolean
      after?: boolean
    }
    short?: {
      before?: boolean
      after?: boolean
    }
    static?: {
      before?: boolean
      after?: boolean
    }
    super?: {
      before?: boolean
      after?: boolean
    }
    switch?: {
      before?: boolean
      after?: boolean
    }
    synchronized?: {
      before?: boolean
      after?: boolean
    }
    this?: {
      before?: boolean
      after?: boolean
    }
    throw?: {
      before?: boolean
      after?: boolean
    }
    throws?: {
      before?: boolean
      after?: boolean
    }
    transient?: {
      before?: boolean
      after?: boolean
    }
    true?: {
      before?: boolean
      after?: boolean
    }
    try?: {
      before?: boolean
      after?: boolean
    }
    typeof?: {
      before?: boolean
      after?: boolean
    }
    var?: {
      before?: boolean
      after?: boolean
    }
    void?: {
      before?: boolean
      after?: boolean
    }
    volatile?: {
      before?: boolean
      after?: boolean
    }
    while?: {
      before?: boolean
      after?: boolean
    }
    with?: {
      before?: boolean
      after?: boolean
    }
    yield?: {
      before?: boolean
      after?: boolean
    }
    type?: {
      before?: boolean
      after?: boolean
    }
  }
}]
// ----- @stylistic/line-comment-position -----
/** @internal */
export type StylisticLineCommentPosition = []|[(("above" | "beside") | {
  position?: ("above" | "beside")
  ignorePattern?: string
  applyDefaultPatterns?: boolean
  applyDefaultIgnorePatterns?: boolean
})]
// ----- @stylistic/linebreak-style -----
/** @internal */
export type StylisticLinebreakStyle = []|[("unix" | "windows")]
// ----- @stylistic/lines-around-comment -----
/** @internal */
export type StylisticLinesAroundComment = []|[{
  beforeBlockComment?: boolean
  afterBlockComment?: boolean
  beforeLineComment?: boolean
  afterLineComment?: boolean
  allowBlockStart?: boolean
  allowBlockEnd?: boolean
  allowClassStart?: boolean
  allowClassEnd?: boolean
  allowObjectStart?: boolean
  allowObjectEnd?: boolean
  allowArrayStart?: boolean
  allowArrayEnd?: boolean
  allowInterfaceStart?: boolean
  allowInterfaceEnd?: boolean
  allowTypeStart?: boolean
  allowTypeEnd?: boolean
  allowEnumStart?: boolean
  allowEnumEnd?: boolean
  allowModuleStart?: boolean
  allowModuleEnd?: boolean
  ignorePattern?: string
  applyDefaultIgnorePatterns?: boolean
  afterHashbangComment?: boolean
}]
// ----- @stylistic/lines-between-class-members -----
/** @internal */
export type StylisticLinesBetweenClassMembers = []|[({
  
  enforce: [{
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  }, ...({
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  })[]]
} | ("always" | "never"))]|[({
  
  enforce: [{
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  }, ...({
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  })[]]
} | ("always" | "never")), {
  exceptAfterSingleLine?: boolean
  exceptAfterOverload?: boolean
}]
// ----- @stylistic/max-len -----
/** @internal */
export type StylisticMaxLen = []|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number)]|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), ({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number)]|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), ({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), {
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
}]
// ----- @stylistic/max-statements-per-line -----
/** @internal */
export type StylisticMaxStatementsPerLine = []|[{
  max?: number
  ignoredNodes?: ("BreakStatement" | "ClassDeclaration" | "ContinueStatement" | "DebuggerStatement" | "DoWhileStatement" | "ExpressionStatement" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "IfStatement" | "ImportDeclaration" | "LabeledStatement" | "ReturnStatement" | "SwitchStatement" | "ThrowStatement" | "TryStatement" | "VariableDeclaration" | "WhileStatement" | "WithStatement" | "ExportNamedDeclaration" | "ExportDefaultDeclaration" | "ExportAllDeclaration")[]
}]
// ----- @stylistic/member-delimiter-style -----
/** @internal */
export type StylisticMemberDelimiterStyle = []|[{
  multiline?: {
    delimiter?: ("none" | "semi" | "comma")
    requireLast?: boolean
  }
  singleline?: {
    delimiter?: ("semi" | "comma")
    requireLast?: boolean
  }
  overrides?: {
    interface?: _StylisticMemberDelimiterStyle_DelimiterConfig
    typeLiteral?: _StylisticMemberDelimiterStyle_DelimiterConfig
  }
  multilineDetection?: ("brackets" | "last-member")
}]
interface _StylisticMemberDelimiterStyle_DelimiterConfig {
  multiline?: {
    delimiter?: ("none" | "semi" | "comma")
    requireLast?: boolean
  }
  singleline?: {
    delimiter?: ("semi" | "comma")
    requireLast?: boolean
  }
}
// ----- @stylistic/multiline-comment-style -----
/** @internal */
export type StylisticMultilineCommentStyle = ([]|[("starred-block" | "bare-block")] | []|["separate-lines"]|["separate-lines", {
  checkJSDoc?: boolean
}])
// ----- @stylistic/multiline-ternary -----
/** @internal */
export type StylisticMultilineTernary = []|[("always" | "always-multiline" | "never")]|[("always" | "always-multiline" | "never"), {
  ignoreJSX?: boolean
  [k: string]: unknown | undefined
}]
// ----- @stylistic/new-parens -----
/** @internal */
export type StylisticNewParens = []|[("always" | "never")]
// ----- @stylistic/newline-per-chained-call -----
/** @internal */
export type StylisticNewlinePerChainedCall = []|[{
  ignoreChainWithDepth?: number
}]
// ----- @stylistic/no-confusing-arrow -----
/** @internal */
export type StylisticNoConfusingArrow = []|[{
  allowParens?: boolean
  onlyOneSimpleParam?: boolean
}]
// ----- @stylistic/no-extra-parens -----
/** @internal */
export type StylisticNoExtraParens = ([]|["functions"] | []|["all"]|["all", {
  conditionalAssign?: boolean
  ternaryOperandBinaryExpressions?: boolean
  nestedBinaryExpressions?: boolean
  returnAssign?: boolean
  ignoreJSX?: ("none" | "all" | "single-line" | "multi-line")
  enforceForArrowConditionals?: boolean
  enforceForSequenceExpressions?: boolean
  enforceForNewInMemberExpressions?: boolean
  enforceForFunctionPrototypeMethods?: boolean
  allowParensAfterCommentPattern?: string
  nestedConditionalExpressions?: boolean
}])
// ----- @stylistic/no-mixed-operators -----
/** @internal */
export type StylisticNoMixedOperators = []|[{
  groups?: [("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"), ("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"), ...(("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"))[]][]
  allowSamePrecedence?: boolean
}]
// ----- @stylistic/no-mixed-spaces-and-tabs -----
/** @internal */
export type StylisticNoMixedSpacesAndTabs = []|[("smart-tabs" | boolean)]
// ----- @stylistic/no-multi-spaces -----
/** @internal */
export type StylisticNoMultiSpaces = []|[{
  exceptions?: {
    [k: string]: boolean
  }
  ignoreEOLComments?: boolean
  includeTabs?: boolean
}]
// ----- @stylistic/no-multiple-empty-lines -----
/** @internal */
export type StylisticNoMultipleEmptyLines = []|[{
  max: number
  maxEOF?: number
  maxBOF?: number
}]
// ----- @stylistic/no-tabs -----
/** @internal */
export type StylisticNoTabs = []|[{
  allowIndentationTabs?: boolean
}]
// ----- @stylistic/no-trailing-spaces -----
/** @internal */
export type StylisticNoTrailingSpaces = []|[{
  skipBlankLines?: boolean
  ignoreComments?: boolean
}]
// ----- @stylistic/nonblock-statement-body-position -----
/** @internal */
export type StylisticNonblockStatementBodyPosition = []|[("beside" | "below" | "any")]|[("beside" | "below" | "any"), {
  overrides?: {
    if?: ("beside" | "below" | "any")
    else?: ("beside" | "below" | "any")
    while?: ("beside" | "below" | "any")
    do?: ("beside" | "below" | "any")
    for?: ("beside" | "below" | "any")
  }
}]
// ----- @stylistic/object-curly-newline -----
/** @internal */
export type StylisticObjectCurlyNewline = []|[((("always" | "never") | {
  multiline?: boolean
  minProperties?: number
  consistent?: boolean
}) | {
  ObjectExpression?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ObjectPattern?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ImportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ExportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  TSTypeLiteral?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  TSInterfaceBody?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
})]
// ----- @stylistic/object-curly-spacing -----
/** @internal */
export type StylisticObjectCurlySpacing = []|[("always" | "never")]|[("always" | "never"), {
  arraysInObjects?: boolean
  objectsInObjects?: boolean
}]
// ----- @stylistic/object-property-newline -----
/** @internal */
export type StylisticObjectPropertyNewline = []|[{
  allowAllPropertiesOnSameLine?: boolean
  allowMultiplePropertiesPerLine?: boolean
}]
// ----- @stylistic/one-var-declaration-per-line -----
/** @internal */
export type StylisticOneVarDeclarationPerLine = []|[("always" | "initializations")]
// ----- @stylistic/operator-linebreak -----
/** @internal */
export type StylisticOperatorLinebreak = []|[(("after" | "before" | "none") | null)]|[(("after" | "before" | "none") | null), {
  overrides?: {
    [k: string]: ("after" | "before" | "none" | "ignore") | undefined
  }
}]
// ----- @stylistic/padded-blocks -----
/** @internal */
export type StylisticPaddedBlocks = []|[(("always" | "never" | "start" | "end") | {
  blocks?: ("always" | "never" | "start" | "end")
  switches?: ("always" | "never" | "start" | "end")
  classes?: ("always" | "never" | "start" | "end")
})]|[(("always" | "never" | "start" | "end") | {
  blocks?: ("always" | "never" | "start" | "end")
  switches?: ("always" | "never" | "start" | "end")
  classes?: ("always" | "never" | "start" | "end")
}), {
  allowSingleLineBlocks?: boolean
}]
// ----- @stylistic/padding-line-between-statements -----
/** @internal */
export type _StylisticPaddingLineBetweenStatementsPaddingType = ("any" | "never" | "always")
/** @internal */
export type _StylisticPaddingLineBetweenStatementsStatementType = (("*" | "block-like" | "exports" | "require" | "directive" | "expression" | "iife" | "multiline-block-like" | "multiline-expression" | "multiline-const" | "multiline-export" | "multiline-let" | "multiline-var" | "singleline-const" | "singleline-export" | "singleline-let" | "singleline-var" | "block" | "empty" | "function" | "ts-method" | "break" | "case" | "class" | "const" | "continue" | "debugger" | "default" | "do" | "export" | "for" | "if" | "import" | "let" | "return" | "switch" | "throw" | "try" | "var" | "while" | "with" | "cjs-export" | "cjs-import" | "enum" | "interface" | "type" | "function-overload") | [("*" | "block-like" | "exports" | "require" | "directive" | "expression" | "iife" | "multiline-block-like" | "multiline-expression" | "multiline-const" | "multiline-export" | "multiline-let" | "multiline-var" | "singleline-const" | "singleline-export" | "singleline-let" | "singleline-var" | "block" | "empty" | "function" | "ts-method" | "break" | "case" | "class" | "const" | "continue" | "debugger" | "default" | "do" | "export" | "for" | "if" | "import" | "let" | "return" | "switch" | "throw" | "try" | "var" | "while" | "with" | "cjs-export" | "cjs-import" | "enum" | "interface" | "type" | "function-overload"), ...(("*" | "block-like" | "exports" | "require" | "directive" | "expression" | "iife" | "multiline-block-like" | "multiline-expression" | "multiline-const" | "multiline-export" | "multiline-let" | "multiline-var" | "singleline-const" | "singleline-export" | "singleline-let" | "singleline-var" | "block" | "empty" | "function" | "ts-method" | "break" | "case" | "class" | "const" | "continue" | "debugger" | "default" | "do" | "export" | "for" | "if" | "import" | "let" | "return" | "switch" | "throw" | "try" | "var" | "while" | "with" | "cjs-export" | "cjs-import" | "enum" | "interface" | "type" | "function-overload"))[]])
/** @internal */
export type StylisticPaddingLineBetweenStatements = {
  blankLine: _StylisticPaddingLineBetweenStatementsPaddingType
  prev: _StylisticPaddingLineBetweenStatementsStatementType
  next: _StylisticPaddingLineBetweenStatementsStatementType
}[]
// ----- @stylistic/quote-props -----
/** @internal */
export type StylisticQuoteProps = ([]|[("always" | "as-needed" | "consistent" | "consistent-as-needed")] | []|[("always" | "as-needed" | "consistent" | "consistent-as-needed")]|[("always" | "as-needed" | "consistent" | "consistent-as-needed"), {
  keywords?: boolean
  unnecessary?: boolean
  numbers?: boolean
}])
// ----- @stylistic/quotes -----
/** @internal */
export type StylisticQuotes = []|[("single" | "double" | "backtick")]|[("single" | "double" | "backtick"), ("avoid-escape" | {
  avoidEscape?: boolean
  allowTemplateLiterals?: (boolean | ("never" | "avoidEscape" | "always"))
  ignoreStringLiterals?: boolean
})]
// ----- @stylistic/rest-spread-spacing -----
/** @internal */
export type StylisticRestSpreadSpacing = []|[("always" | "never")]
// ----- @stylistic/semi -----
/** @internal */
export type StylisticSemi = ([]|["never"]|["never", {
  beforeStatementContinuationChars?: ("always" | "any" | "never")
}] | []|["always"]|["always", {
  omitLastInOneLineBlock?: boolean
  omitLastInOneLineClassBody?: boolean
}])
// ----- @stylistic/semi-spacing -----
/** @internal */
export type StylisticSemiSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- @stylistic/semi-style -----
/** @internal */
export type StylisticSemiStyle = []|[("last" | "first")]
// ----- @stylistic/space-before-blocks -----
/** @internal */
export type StylisticSpaceBeforeBlocks = []|[(("always" | "never") | {
  keywords?: ("always" | "never" | "off")
  functions?: ("always" | "never" | "off")
  classes?: ("always" | "never" | "off")
})]
// ----- @stylistic/space-before-function-paren -----
/** @internal */
export type StylisticSpaceBeforeFunctionParen = []|[(("always" | "never") | {
  anonymous?: ("always" | "never" | "ignore")
  named?: ("always" | "never" | "ignore")
  asyncArrow?: ("always" | "never" | "ignore")
})]
// ----- @stylistic/space-in-parens -----
/** @internal */
export type StylisticSpaceInParens = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: ("{}" | "[]" | "()" | "empty")[]
}]
// ----- @stylistic/space-infix-ops -----
/** @internal */
export type StylisticSpaceInfixOps = []|[{
  int32Hint?: boolean
  ignoreTypes?: boolean
}]
// ----- @stylistic/space-unary-ops -----
/** @internal */
export type StylisticSpaceUnaryOps = []|[{
  words?: boolean
  nonwords?: boolean
  overrides?: {
    [k: string]: boolean | undefined
  }
}]
// ----- @stylistic/spaced-comment -----
/** @internal */
export type StylisticSpacedComment = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: string[]
  markers?: string[]
  line?: {
    exceptions?: string[]
    markers?: string[]
  }
  block?: {
    exceptions?: string[]
    markers?: string[]
    balanced?: boolean
  }
}]
// ----- @stylistic/switch-colon-spacing -----
/** @internal */
export type StylisticSwitchColonSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- @stylistic/template-curly-spacing -----
/** @internal */
export type StylisticTemplateCurlySpacing = []|[("always" | "never")]
// ----- @stylistic/template-tag-spacing -----
/** @internal */
export type StylisticTemplateTagSpacing = []|[("always" | "never")]
// ----- @stylistic/type-annotation-spacing -----
/** @internal */
export type StylisticTypeAnnotationSpacing = []|[{
  before?: boolean
  after?: boolean
  overrides?: {
    colon?: _StylisticTypeAnnotationSpacing_SpacingConfig
    arrow?: _StylisticTypeAnnotationSpacing_SpacingConfig
    variable?: _StylisticTypeAnnotationSpacing_SpacingConfig
    parameter?: _StylisticTypeAnnotationSpacing_SpacingConfig
    property?: _StylisticTypeAnnotationSpacing_SpacingConfig
    returnType?: _StylisticTypeAnnotationSpacing_SpacingConfig
  }
}]
interface _StylisticTypeAnnotationSpacing_SpacingConfig {
  before?: boolean
  after?: boolean
}
// ----- @stylistic/wrap-iife -----
/** @internal */
export type StylisticWrapIife = []|[("outside" | "inside" | "any")]|[("outside" | "inside" | "any"), {
  functionPrototypeMethods?: boolean
}]
// ----- @stylistic/yield-star-spacing -----
/** @internal */
export type StylisticYieldStarSpacing = []|[(("before" | "after" | "both" | "neither") | {
  before?: boolean
  after?: boolean
})]
// ----- @typescript-eslint/array-type -----
/** @internal */
export type TypescriptEslintArrayType = []|[{
  
  default?: ("array" | "generic" | "array-simple")
  
  readonly?: ("array" | "generic" | "array-simple")
}]
// ----- @typescript-eslint/ban-ts-comment -----
/** @internal */
export type TypescriptEslintBanTsComment = []|[{
  
  minimumDescriptionLength?: number
  "ts-check"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
  "ts-expect-error"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
  "ts-ignore"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
  "ts-nocheck"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
}]
// ----- @typescript-eslint/class-literal-property-style -----
/** @internal */
export type TypescriptEslintClassLiteralPropertyStyle = []|[("fields" | "getters")]
// ----- @typescript-eslint/class-methods-use-this -----
/** @internal */
export type TypescriptEslintClassMethodsUseThis = []|[{
  
  enforceForClassFields?: boolean
  
  exceptMethods?: string[]
  
  ignoreClassesThatImplementAnInterface?: (boolean | "public-fields")
  
  ignoreOverrideMethods?: boolean
}]
// ----- @typescript-eslint/consistent-generic-constructors -----
/** @internal */
export type TypescriptEslintConsistentGenericConstructors = []|[("type-annotation" | "constructor")]
// ----- @typescript-eslint/consistent-indexed-object-style -----
/** @internal */
export type TypescriptEslintConsistentIndexedObjectStyle = []|[("record" | "index-signature")]
// ----- @typescript-eslint/consistent-return -----
/** @internal */
export type TypescriptEslintConsistentReturn = []|[{
  treatUndefinedAsUnspecified?: boolean
}]
// ----- @typescript-eslint/consistent-type-assertions -----
/** @internal */
export type TypescriptEslintConsistentTypeAssertions = []|[({
  
  assertionStyle: "never"
} | {
  
  arrayLiteralTypeAssertions?: ("allow" | "allow-as-parameter" | "never")
  
  assertionStyle?: ("as" | "angle-bracket")
  
  objectLiteralTypeAssertions?: ("allow" | "allow-as-parameter" | "never")
})]
// ----- @typescript-eslint/consistent-type-definitions -----
/** @internal */
export type TypescriptEslintConsistentTypeDefinitions = []|[("interface" | "type")]
// ----- @typescript-eslint/consistent-type-exports -----
/** @internal */
export type TypescriptEslintConsistentTypeExports = []|[{
  
  fixMixedExportsWithInlineTypeSpecifier?: boolean
}]
// ----- @typescript-eslint/consistent-type-imports -----
/** @internal */
export type TypescriptEslintConsistentTypeImports = []|[{
  
  disallowTypeAnnotations?: boolean
  
  fixStyle?: ("separate-type-imports" | "inline-type-imports")
  
  prefer?: ("type-imports" | "no-type-imports")
}]
// ----- @typescript-eslint/dot-notation -----
/** @internal */
export type TypescriptEslintDotNotation = []|[{
  
  allowIndexSignaturePropertyAccess?: boolean
  
  allowKeywords?: boolean
  
  allowPattern?: string
  
  allowPrivateClassPropertyAccess?: boolean
  
  allowProtectedClassPropertyAccess?: boolean
}]
// ----- @typescript-eslint/explicit-function-return-type -----
/** @internal */
export type TypescriptEslintExplicitFunctionReturnType = []|[{
  
  allowConciseArrowFunctionExpressionsStartingWithVoid?: boolean
  
  allowDirectConstAssertionInArrowFunctions?: boolean
  
  allowedNames?: string[]
  
  allowExpressions?: boolean
  
  allowFunctionsWithoutTypeParameters?: boolean
  
  allowHigherOrderFunctions?: boolean
  
  allowIIFEs?: boolean
  
  allowTypedFunctionExpressions?: boolean
}]
// ----- @typescript-eslint/explicit-member-accessibility -----
/** @internal */
export type TypescriptEslintExplicitMemberAccessibility = []|[{
  
  accessibility?: ("explicit" | "no-public" | "off")
  
  ignoredMethodNames?: string[]
  
  overrides?: {
    accessors?: ("explicit" | "no-public" | "off")
    constructors?: ("explicit" | "no-public" | "off")
    methods?: ("explicit" | "no-public" | "off")
    parameterProperties?: ("explicit" | "no-public" | "off")
    properties?: ("explicit" | "no-public" | "off")
  }
}]
// ----- @typescript-eslint/explicit-module-boundary-types -----
/** @internal */
export type TypescriptEslintExplicitModuleBoundaryTypes = []|[{
  
  allowArgumentsExplicitlyTypedAsAny?: boolean
  
  allowDirectConstAssertionInArrowFunctions?: boolean
  
  allowedNames?: string[]
  
  allowHigherOrderFunctions?: boolean
  
  allowOverloadFunctions?: boolean
  
  allowTypedFunctionExpressions?: boolean
}]
// ----- @typescript-eslint/init-declarations -----
/** @internal */
export type TypescriptEslintInitDeclarations = ([]|["always"] | []|["never"]|["never", {
  ignoreForLoopInit?: boolean
}])
// ----- @typescript-eslint/max-params -----
/** @internal */
export type TypescriptEslintMaxParams = []|[{
  
  countVoidThis?: boolean
  
  max?: number
  
  maximum?: number
}]
// ----- @typescript-eslint/member-ordering -----
/** @internal */
export type TypescriptEslintMemberOrdering = []|[{
  classes?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  classExpressions?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  default?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  interfaces?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  typeLiterals?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
}]
// ----- @typescript-eslint/method-signature-style -----
/** @internal */
export type TypescriptEslintMethodSignatureStyle = []|[("property" | "method")]
// ----- @typescript-eslint/naming-convention -----
/** @internal */
export type _TypescriptEslintNamingConventionFormatOptionsConfig = (_TypescriptEslintNamingConventionPredefinedFormats[] | null)
/** @internal */
export type _TypescriptEslintNamingConventionPredefinedFormats = ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")
/** @internal */
export type _TypescriptEslintNamingConventionUnderscoreOptions = ("forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble")
/** @internal */
export type _TypescriptEslintNamingConvention_PrefixSuffixConfig = string[]
/** @internal */
export type _TypescriptEslintNamingConventionTypeModifiers = ("boolean" | "string" | "number" | "function" | "array")
/** @internal */
export type TypescriptEslintNamingConvention = ({
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  modifiers?: ("const" | "readonly" | "static" | "public" | "protected" | "private" | "#private" | "abstract" | "destructured" | "global" | "exported" | "unused" | "requiresQuotes" | "override" | "async" | "default" | "namespace")[]
  selector: ("default" | "variableLike" | "memberLike" | "typeLike" | "method" | "property" | "accessor" | "variable" | "function" | "parameter" | "parameterProperty" | "classicAccessor" | "enumMember" | "classMethod" | "objectLiteralMethod" | "typeMethod" | "classProperty" | "objectLiteralProperty" | "typeProperty" | "autoAccessor" | "class" | "interface" | "typeAlias" | "enum" | "typeParameter" | "import")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "default"
  modifiers?: ("const" | "readonly" | "static" | "public" | "protected" | "private" | "#private" | "abstract" | "destructured" | "global" | "exported" | "unused" | "requiresQuotes" | "override" | "async" | "default" | "namespace")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "variableLike"
  modifiers?: ("unused" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "variable"
  modifiers?: ("const" | "destructured" | "exported" | "global" | "unused" | "async")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "function"
  modifiers?: ("exported" | "global" | "unused" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "parameter"
  modifiers?: ("destructured" | "unused")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "memberLike"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "readonly" | "requiresQuotes" | "static" | "override" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "classProperty"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "readonly" | "requiresQuotes" | "static" | "override")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "objectLiteralProperty"
  modifiers?: ("public" | "requiresQuotes")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeProperty"
  modifiers?: ("public" | "readonly" | "requiresQuotes")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "parameterProperty"
  modifiers?: ("private" | "protected" | "public" | "readonly")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "property"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "readonly" | "requiresQuotes" | "static" | "override" | "async")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "classMethod"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "requiresQuotes" | "static" | "override" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "objectLiteralMethod"
  modifiers?: ("public" | "requiresQuotes" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeMethod"
  modifiers?: ("public" | "requiresQuotes")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "method"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "requiresQuotes" | "static" | "override" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "classicAccessor"
  modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "autoAccessor"
  modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "accessor"
  modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "enumMember"
  modifiers?: ("requiresQuotes")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeLike"
  modifiers?: ("abstract" | "exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "class"
  modifiers?: ("abstract" | "exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "interface"
  modifiers?: ("exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeAlias"
  modifiers?: ("exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "enum"
  modifiers?: ("exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeParameter"
  modifiers?: ("unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "import"
  modifiers?: ("default" | "namespace")[]
})[]
interface _TypescriptEslintNamingConvention_MatchRegexConfig {
  match: boolean
  regex: string
}
// ----- @typescript-eslint/no-base-to-string -----
/** @internal */
export type TypescriptEslintNoBaseToString = []|[{
  
  ignoredTypeNames?: string[]
}]
// ----- @typescript-eslint/no-confusing-void-expression -----
/** @internal */
export type TypescriptEslintNoConfusingVoidExpression = []|[{
  
  ignoreArrowShorthand?: boolean
  
  ignoreVoidOperator?: boolean
  
  ignoreVoidReturningFunctions?: boolean
}]
// ----- @typescript-eslint/no-deprecated -----
/** @internal */
export type TypescriptEslintNoDeprecated = []|[{
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
}]
// ----- @typescript-eslint/no-duplicate-type-constituents -----
/** @internal */
export type TypescriptEslintNoDuplicateTypeConstituents = []|[{
  
  ignoreIntersections?: boolean
  
  ignoreUnions?: boolean
}]
// ----- @typescript-eslint/no-empty-function -----
/** @internal */
export type TypescriptEslintNoEmptyFunction = []|[{
  
  allow?: ("functions" | "arrowFunctions" | "generatorFunctions" | "methods" | "generatorMethods" | "getters" | "setters" | "constructors" | "private-constructors" | "protected-constructors" | "asyncFunctions" | "asyncMethods" | "decoratedFunctions" | "overrideMethods")[]
}]
// ----- @typescript-eslint/no-empty-interface -----
/** @internal */
export type TypescriptEslintNoEmptyInterface = []|[{
  
  allowSingleExtends?: boolean
}]
// ----- @typescript-eslint/no-empty-object-type -----
/** @internal */
export type TypescriptEslintNoEmptyObjectType = []|[{
  
  allowInterfaces?: ("always" | "never" | "with-single-extends")
  
  allowObjectTypes?: ("always" | "never")
  
  allowWithName?: string
}]
// ----- @typescript-eslint/no-explicit-any -----
/** @internal */
export type TypescriptEslintNoExplicitAny = []|[{
  
  fixToUnknown?: boolean
  
  ignoreRestArgs?: boolean
}]
// ----- @typescript-eslint/no-extraneous-class -----
/** @internal */
export type TypescriptEslintNoExtraneousClass = []|[{
  
  allowConstructorOnly?: boolean
  
  allowEmpty?: boolean
  
  allowStaticOnly?: boolean
  
  allowWithDecorator?: boolean
}]
// ----- @typescript-eslint/no-floating-promises -----
/** @internal */
export type TypescriptEslintNoFloatingPromises = []|[{
  
  allowForKnownSafeCalls?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  allowForKnownSafePromises?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  checkThenables?: boolean
  
  ignoreIIFE?: boolean
  
  ignoreVoid?: boolean
}]
// ----- @typescript-eslint/no-inferrable-types -----
/** @internal */
export type TypescriptEslintNoInferrableTypes = []|[{
  
  ignoreParameters?: boolean
  
  ignoreProperties?: boolean
}]
// ----- @typescript-eslint/no-invalid-this -----
/** @internal */
export type TypescriptEslintNoInvalidThis = []|[{
  capIsConstructor?: boolean
}]
// ----- @typescript-eslint/no-invalid-void-type -----
/** @internal */
export type TypescriptEslintNoInvalidVoidType = []|[{
  
  allowAsThisParameter?: boolean
  
  allowInGenericTypeArguments?: (boolean | [string, ...(string)[]])
}]
// ----- @typescript-eslint/no-magic-numbers -----
/** @internal */
export type TypescriptEslintNoMagicNumbers = []|[{
  detectObjects?: boolean
  enforceConst?: boolean
  ignore?: (number | string)[]
  ignoreArrayIndexes?: boolean
  ignoreDefaultValues?: boolean
  ignoreClassFieldInitialValues?: boolean
  
  ignoreEnums?: boolean
  
  ignoreNumericLiteralTypes?: boolean
  
  ignoreReadonlyClassProperties?: boolean
  
  ignoreTypeIndexes?: boolean
}]
// ----- @typescript-eslint/no-meaningless-void-operator -----
/** @internal */
export type TypescriptEslintNoMeaninglessVoidOperator = []|[{
  
  checkNever?: boolean
}]
// ----- @typescript-eslint/no-misused-promises -----
/** @internal */
export type TypescriptEslintNoMisusedPromises = []|[{
  
  checksConditionals?: boolean
  
  checksSpreads?: boolean
  
  checksVoidReturn?: (boolean | {
    
    arguments?: boolean
    
    attributes?: boolean
    
    inheritedMethods?: boolean
    
    properties?: boolean
    
    returns?: boolean
    
    variables?: boolean
  })
}]
// ----- @typescript-eslint/no-misused-spread -----
/** @internal */
export type TypescriptEslintNoMisusedSpread = []|[{
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
}]
// ----- @typescript-eslint/no-namespace -----
/** @internal */
export type TypescriptEslintNoNamespace = []|[{
  
  allowDeclarations?: boolean
  
  allowDefinitionFiles?: boolean
}]
// ----- @typescript-eslint/no-redeclare -----
/** @internal */
export type TypescriptEslintNoRedeclare = []|[{
  
  builtinGlobals?: boolean
  
  ignoreDeclarationMerge?: boolean
}]
// ----- @typescript-eslint/no-require-imports -----
/** @internal */
export type TypescriptEslintNoRequireImports = []|[{
  
  allow?: string[]
  
  allowAsImport?: boolean
}]
// ----- @typescript-eslint/no-restricted-imports -----
/** @internal */
export type TypescriptEslintNoRestrictedImports = ((string | {
  name: string
  message?: string
  importNames?: string[]
  allowImportNames?: string[]
  
  allowTypeImports?: boolean
})[] | []|[{
  paths?: (string | {
    name: string
    message?: string
    importNames?: string[]
    allowImportNames?: string[]
    
    allowTypeImports?: boolean
  })[]
  patterns?: (string[] | {
    
    importNames?: [string, ...(string)[]]
    
    allowImportNames?: [string, ...(string)[]]
    
    group?: [string, ...(string)[]]
    regex?: string
    importNamePattern?: string
    allowImportNamePattern?: string
    message?: string
    caseSensitive?: boolean
    
    allowTypeImports?: boolean
  }[])
}])
// ----- @typescript-eslint/no-restricted-types -----
/** @internal */
export type TypescriptEslintNoRestrictedTypes = []|[{
  
  types?: {
    [k: string]: (true | string | {
      
      fixWith?: string
      
      message?: string
      
      suggest?: string[]
    }) | undefined
  }
}]
// ----- @typescript-eslint/no-shadow -----
/** @internal */
export type TypescriptEslintNoShadow = []|[{
  
  allow?: string[]
  
  builtinGlobals?: boolean
  
  hoist?: ("all" | "functions" | "functions-and-types" | "never" | "types")
  
  ignoreFunctionTypeParameterNameValueShadow?: boolean
  
  ignoreOnInitialization?: boolean
  
  ignoreTypeValueShadow?: boolean
}]
// ----- @typescript-eslint/no-this-alias -----
/** @internal */
export type TypescriptEslintNoThisAlias = []|[{
  
  allowDestructuring?: boolean
  
  allowedNames?: string[]
}]
// ----- @typescript-eslint/no-type-alias -----
/** @internal */
export type TypescriptEslintNoTypeAlias = []|[{
  
  allowAliases?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
  
  allowCallbacks?: ("always" | "never")
  
  allowConditionalTypes?: ("always" | "never")
  
  allowConstructors?: ("always" | "never")
  
  allowGenerics?: ("always" | "never")
  
  allowLiterals?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
  
  allowMappedTypes?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
  
  allowTupleTypes?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
}]
// ----- @typescript-eslint/no-unnecessary-boolean-literal-compare -----
/** @internal */
export type TypescriptEslintNoUnnecessaryBooleanLiteralCompare = []|[{
  
  allowComparingNullableBooleansToFalse?: boolean
  
  allowComparingNullableBooleansToTrue?: boolean
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
}]
// ----- @typescript-eslint/no-unnecessary-condition -----
/** @internal */
export type TypescriptEslintNoUnnecessaryCondition = []|[{
  
  allowConstantLoopConditions?: (boolean | ("always" | "never" | "only-allowed-literals"))
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  
  checkTypePredicates?: boolean
}]
// ----- @typescript-eslint/no-unnecessary-type-assertion -----
/** @internal */
export type TypescriptEslintNoUnnecessaryTypeAssertion = []|[{
  
  checkLiteralConstAssertions?: boolean
  
  typesToIgnore?: string[]
}]
// ----- @typescript-eslint/no-unused-expressions -----
/** @internal */
export type TypescriptEslintNoUnusedExpressions = []|[{
  allowShortCircuit?: boolean
  allowTernary?: boolean
  allowTaggedTemplates?: boolean
  enforceForJSX?: boolean
  ignoreDirectives?: boolean
}]
// ----- @typescript-eslint/no-unused-vars -----
/** @internal */
export type TypescriptEslintNoUnusedVars = []|[(("all" | "local") | {
  
  args?: ("all" | "after-used" | "none")
  
  argsIgnorePattern?: string
  
  caughtErrors?: ("all" | "none")
  
  caughtErrorsIgnorePattern?: string
  
  destructuredArrayIgnorePattern?: string
  
  ignoreClassWithStaticInitBlock?: boolean
  
  ignoreRestSiblings?: boolean
  
  reportUsedIgnorePattern?: boolean
  
  vars?: ("all" | "local")
  
  varsIgnorePattern?: string
})]
// ----- @typescript-eslint/no-use-before-define -----
/** @internal */
export type TypescriptEslintNoUseBeforeDefine = []|[("nofunc" | {
  
  allowNamedExports?: boolean
  
  classes?: boolean
  
  enums?: boolean
  
  functions?: boolean
  
  ignoreTypeReferences?: boolean
  
  typedefs?: boolean
  
  variables?: boolean
})]
// ----- @typescript-eslint/no-var-requires -----
/** @internal */
export type TypescriptEslintNoVarRequires = []|[{
  
  allow?: string[]
}]
// ----- @typescript-eslint/only-throw-error -----
/** @internal */
export type TypescriptEslintOnlyThrowError = []|[{
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  allowRethrowing?: boolean
  
  allowThrowingAny?: boolean
  
  allowThrowingUnknown?: boolean
}]
// ----- @typescript-eslint/parameter-properties -----
/** @internal */
export type TypescriptEslintParameterProperties = []|[{
  
  allow?: ("readonly" | "private" | "protected" | "public" | "private readonly" | "protected readonly" | "public readonly")[]
  
  prefer?: ("class-property" | "parameter-property")
}]
// ----- @typescript-eslint/prefer-destructuring -----
/** @internal */
export type TypescriptEslintPreferDestructuring = []|[({
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
} | {
  array?: boolean
  object?: boolean
})]|[({
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
} | {
  array?: boolean
  object?: boolean
}), {
  
  enforceForDeclarationWithTypeAnnotation?: boolean
  
  enforceForRenamedProperties?: boolean
  [k: string]: unknown | undefined
}]
// ----- @typescript-eslint/prefer-literal-enum-member -----
/** @internal */
export type TypescriptEslintPreferLiteralEnumMember = []|[{
  
  allowBitwiseExpressions?: boolean
}]
// ----- @typescript-eslint/prefer-nullish-coalescing -----
/** @internal */
export type TypescriptEslintPreferNullishCoalescing = []|[{
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  
  ignoreBooleanCoercion?: boolean
  
  ignoreConditionalTests?: boolean
  
  ignoreIfStatements?: boolean
  
  ignoreMixedLogicalExpressions?: boolean
  
  ignorePrimitives?: ({
    
    bigint?: boolean
    
    boolean?: boolean
    
    number?: boolean
    
    string?: boolean
    [k: string]: unknown | undefined
  } | true)
  
  ignoreTernaryTests?: boolean
}]
// ----- @typescript-eslint/prefer-optional-chain -----
/** @internal */
export type TypescriptEslintPreferOptionalChain = []|[{
  
  allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing?: boolean
  
  checkAny?: boolean
  
  checkBigInt?: boolean
  
  checkBoolean?: boolean
  
  checkNumber?: boolean
  
  checkString?: boolean
  
  checkUnknown?: boolean
  
  requireNullish?: boolean
}]
// ----- @typescript-eslint/prefer-promise-reject-errors -----
/** @internal */
export type TypescriptEslintPreferPromiseRejectErrors = []|[{
  
  allowEmptyReject?: boolean
  
  allowThrowingAny?: boolean
  
  allowThrowingUnknown?: boolean
}]
// ----- @typescript-eslint/prefer-readonly -----
/** @internal */
export type TypescriptEslintPreferReadonly = []|[{
  
  onlyInlineLambdas?: boolean
}]
// ----- @typescript-eslint/prefer-readonly-parameter-types -----
/** @internal */
export type TypescriptEslintPreferReadonlyParameterTypes = []|[{
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  checkParameterProperties?: boolean
  
  ignoreInferredTypes?: boolean
  
  treatMethodsAsReadonly?: boolean
}]
// ----- @typescript-eslint/prefer-string-starts-ends-with -----
/** @internal */
export type TypescriptEslintPreferStringStartsEndsWith = []|[{
  
  allowSingleElementEquality?: ("always" | "never")
}]
// ----- @typescript-eslint/promise-function-async -----
/** @internal */
export type TypescriptEslintPromiseFunctionAsync = []|[{
  
  allowAny?: boolean
  
  allowedPromiseNames?: string[]
  
  checkArrowFunctions?: boolean
  
  checkFunctionDeclarations?: boolean
  
  checkFunctionExpressions?: boolean
  
  checkMethodDeclarations?: boolean
}]
// ----- @typescript-eslint/require-array-sort-compare -----
/** @internal */
export type TypescriptEslintRequireArraySortCompare = []|[{
  
  ignoreStringArrays?: boolean
}]
// ----- @typescript-eslint/restrict-plus-operands -----
/** @internal */
export type TypescriptEslintRestrictPlusOperands = []|[{
  
  allowAny?: boolean
  
  allowBoolean?: boolean
  
  allowNullish?: boolean
  
  allowNumberAndString?: boolean
  
  allowRegExp?: boolean
  
  skipCompoundAssignments?: boolean
}]
// ----- @typescript-eslint/restrict-template-expressions -----
/** @internal */
export type TypescriptEslintRestrictTemplateExpressions = []|[{
  
  allowAny?: boolean
  
  allowArray?: boolean
  
  allowBoolean?: boolean
  
  allowNullish?: boolean
  
  allowNumber?: boolean
  
  allowRegExp?: boolean
  
  allowNever?: boolean
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
}]
// ----- @typescript-eslint/return-await -----
/** @internal */
export type TypescriptEslintReturnAwait = []|[(("always" | "error-handling-correctness-only" | "in-try-catch" | "never") & string)]
// ----- @typescript-eslint/sort-type-constituents -----
/** @internal */
export type TypescriptEslintSortTypeConstituents = []|[{
  
  caseSensitive?: boolean
  
  checkIntersections?: boolean
  
  checkUnions?: boolean
  
  groupOrder?: ("conditional" | "function" | "import" | "intersection" | "keyword" | "nullish" | "literal" | "named" | "object" | "operator" | "tuple" | "union")[]
}]
// ----- @typescript-eslint/strict-boolean-expressions -----
/** @internal */
export type TypescriptEslintStrictBooleanExpressions = []|[{
  
  allowAny?: boolean
  
  allowNullableBoolean?: boolean
  
  allowNullableEnum?: boolean
  
  allowNullableNumber?: boolean
  
  allowNullableObject?: boolean
  
  allowNullableString?: boolean
  
  allowNumber?: boolean
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  
  allowString?: boolean
}]
// ----- @typescript-eslint/switch-exhaustiveness-check -----
/** @internal */
export type TypescriptEslintSwitchExhaustivenessCheck = []|[{
  
  allowDefaultCaseForExhaustiveSwitch?: boolean
  
  considerDefaultExhaustiveForUnions?: boolean
  
  defaultCaseCommentPattern?: string
  
  requireDefaultForNonUnion?: boolean
}]
// ----- @typescript-eslint/triple-slash-reference -----
/** @internal */
export type TypescriptEslintTripleSlashReference = []|[{
  
  lib?: ("always" | "never")
  
  path?: ("always" | "never")
  
  types?: ("always" | "never" | "prefer-import")
}]
// ----- @typescript-eslint/typedef -----
/** @internal */
export type TypescriptEslintTypedef = []|[{
  
  arrayDestructuring?: boolean
  
  arrowParameter?: boolean
  
  memberVariableDeclaration?: boolean
  
  objectDestructuring?: boolean
  
  parameter?: boolean
  
  propertyDeclaration?: boolean
  
  variableDeclaration?: boolean
  
  variableDeclarationIgnoreFunction?: boolean
}]
// ----- @typescript-eslint/unbound-method -----
/** @internal */
export type TypescriptEslintUnboundMethod = []|[{
  
  ignoreStatic?: boolean
}]
// ----- @typescript-eslint/unified-signatures -----
/** @internal */
export type TypescriptEslintUnifiedSignatures = []|[{
  
  ignoreDifferentlyNamedParameters?: boolean
  
  ignoreOverloadsWithDifferentJSDoc?: boolean
}]
// ----- depend/ban-dependencies -----
/** @internal */
export type DependBanDependencies = []|[{
  presets?: string[]
  modules?: string[]
  allowed?: string[]
}]
// ----- jsdoc/check-examples -----
/** @internal */
export type JsdocCheckExamples = []|[{
  allowInlineConfig?: boolean
  baseConfig?: {
    [k: string]: unknown | undefined
  }
  captionRequired?: boolean
  checkDefaults?: boolean
  checkEslintrc?: boolean
  checkParams?: boolean
  checkProperties?: boolean
  configFile?: string
  exampleCodeRegex?: string
  matchingFileName?: string
  matchingFileNameDefaults?: string
  matchingFileNameParams?: string
  matchingFileNameProperties?: string
  noDefaultExampleRules?: boolean
  paddedIndent?: number
  rejectExampleCodeRegex?: string
  reportUnusedDisableDirectives?: boolean
}]
// ----- jsdoc/check-indentation -----
/** @internal */
export type JsdocCheckIndentation = []|[{
  excludeTags?: string[]
}]
// ----- jsdoc/check-line-alignment -----
/** @internal */
export type JsdocCheckLineAlignment = []|[("always" | "never" | "any")]|[("always" | "never" | "any"), {
  customSpacings?: {
    postDelimiter?: number
    postHyphen?: number
    postName?: number
    postTag?: number
    postType?: number
  }
  preserveMainDescriptionPostDelimiter?: boolean
  tags?: string[]
  wrapIndent?: string
  disableWrapIndent?: boolean
}]
// ----- jsdoc/check-param-names -----
/** @internal */
export type JsdocCheckParamNames = []|[{
  allowExtraTrailingParamDocs?: boolean
  checkDestructured?: boolean
  checkRestProperty?: boolean
  checkTypesPattern?: string
  disableExtraPropertyReporting?: boolean
  disableMissingParamChecks?: boolean
  enableFixer?: boolean
  useDefaultObjectProperties?: boolean
}]
// ----- jsdoc/check-property-names -----
/** @internal */
export type JsdocCheckPropertyNames = []|[{
  enableFixer?: boolean
}]
// ----- jsdoc/check-tag-names -----
/** @internal */
export type JsdocCheckTagNames = []|[{
  definedTags?: string[]
  enableFixer?: boolean
  jsxTags?: boolean
  typed?: boolean
}]
// ----- jsdoc/check-types -----
/** @internal */
export type JsdocCheckTypes = []|[{
  exemptTagContexts?: {
    tag?: string
    types?: (boolean | string[])
  }[]
  noDefaults?: boolean
  unifyParentAndChildTypeChecks?: boolean
}]
// ----- jsdoc/check-values -----
/** @internal */
export type JsdocCheckValues = []|[{
  allowedAuthors?: string[]
  allowedLicenses?: (string[] | boolean)
  licensePattern?: string
  numericOnlyVariation?: boolean
}]
// ----- jsdoc/convert-to-jsdoc-comments -----
/** @internal */
export type JsdocConvertToJsdocComments = []|[{
  allowedPrefixes?: string[]
  contexts?: (string | {
    context?: string
    inlineCommentBlock?: boolean
  })[]
  contextsAfter?: (string | {
    context?: string
    inlineCommentBlock?: boolean
  })[]
  contextsBeforeAndAfter?: (string | {
    context?: string
    inlineCommentBlock?: boolean
  })[]
  enableFixer?: boolean
  enforceJsdocLineStyle?: ("multi" | "single")
  lineOrBlockStyle?: ("block" | "line" | "both")
}]
// ----- jsdoc/empty-tags -----
/** @internal */
export type JsdocEmptyTags = []|[{
  tags?: string[]
}]
// ----- jsdoc/implements-on-classes -----
/** @internal */
export type JsdocImplementsOnClasses = []|[{
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
}]
// ----- jsdoc/informative-docs -----
/** @internal */
export type JsdocInformativeDocs = []|[{
  aliases?: {
    [k: string]: string[]
  }
  excludedTags?: string[]
  uselessWords?: string[]
}]
// ----- jsdoc/lines-before-block -----
/** @internal */
export type JsdocLinesBeforeBlock = []|[{
  checkBlockStarts?: boolean
  excludedTags?: string[]
  ignoreSameLine?: boolean
  lines?: number
}]
// ----- jsdoc/match-description -----
/** @internal */
export type JsdocMatchDescription = []|[{
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  mainDescription?: (string | boolean | {
    match?: (string | boolean)
    message?: string
  })
  matchDescription?: string
  message?: string
  nonemptyTags?: boolean
  tags?: {
    [k: string]: (string | true | {
      match?: (string | true)
      message?: string
    })
  }
}]
// ----- jsdoc/match-name -----
/** @internal */
export type JsdocMatchName = []|[{
  match: {
    allowName?: string
    comment?: string
    context?: string
    disallowName?: string
    message?: string
    tags?: string[]
    [k: string]: unknown | undefined
  }[]
}]
// ----- jsdoc/multiline-blocks -----
/** @internal */
export type JsdocMultilineBlocks = []|[{
  allowMultipleTags?: boolean
  minimumLengthForMultiline?: number
  multilineTags?: ("*" | string[])
  noFinalLineText?: boolean
  noMultilineBlocks?: boolean
  noSingleLineBlocks?: boolean
  noZeroLineText?: boolean
  singleLineTags?: string[]
}]
// ----- jsdoc/no-bad-blocks -----
/** @internal */
export type JsdocNoBadBlocks = []|[{
  ignore?: string[]
  preventAllMultiAsteriskBlocks?: boolean
}]
// ----- jsdoc/no-blank-blocks -----
/** @internal */
export type JsdocNoBlankBlocks = []|[{
  enableFixer?: boolean
}]
// ----- jsdoc/no-defaults -----
/** @internal */
export type JsdocNoDefaults = []|[{
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  noOptionalParamNames?: boolean
}]
// ----- jsdoc/no-missing-syntax -----
/** @internal */
export type JsdocNoMissingSyntax = []|[{
  contexts?: (string | {
    comment?: string
    context?: string
    message?: string
    minimum?: number
  })[]
}]
// ----- jsdoc/no-multi-asterisks -----
/** @internal */
export type JsdocNoMultiAsterisks = []|[{
  allowWhitespace?: boolean
  preventAtEnd?: boolean
  preventAtMiddleLines?: boolean
}]
// ----- jsdoc/no-restricted-syntax -----
/** @internal */
export type JsdocNoRestrictedSyntax = []|[{
  contexts: (string | {
    comment?: string
    context?: string
    message?: string
  })[]
}]
// ----- jsdoc/no-types -----
/** @internal */
export type JsdocNoTypes = []|[{
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
}]
// ----- jsdoc/no-undefined-types -----
/** @internal */
export type JsdocNoUndefinedTypes = []|[{
  definedTypes?: string[]
  disableReporting?: boolean
  markVariablesAsUsed?: boolean
}]
// ----- jsdoc/require-asterisk-prefix -----
/** @internal */
export type JsdocRequireAsteriskPrefix = []|[("always" | "never" | "any")]|[("always" | "never" | "any"), {
  tags?: {
    always?: string[]
    any?: string[]
    never?: string[]
    [k: string]: unknown | undefined
  }
}]
// ----- jsdoc/require-description -----
/** @internal */
export type JsdocRequireDescription = []|[{
  checkConstructors?: boolean
  checkGetters?: boolean
  checkSetters?: boolean
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  descriptionStyle?: ("body" | "tag" | "any")
  exemptedBy?: string[]
}]
// ----- jsdoc/require-description-complete-sentence -----
/** @internal */
export type JsdocRequireDescriptionCompleteSentence = []|[{
  abbreviations?: string[]
  newlineBeforeCapsAssumesBadSentenceEnd?: boolean
  tags?: string[]
}]
// ----- jsdoc/require-example -----
/** @internal */
export type JsdocRequireExample = []|[{
  checkConstructors?: boolean
  checkGetters?: boolean
  checkSetters?: boolean
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  enableFixer?: boolean
  exemptedBy?: string[]
  exemptNoArguments?: boolean
}]
// ----- jsdoc/require-file-overview -----
/** @internal */
export type JsdocRequireFileOverview = []|[{
  tags?: {
    [k: string]: {
      initialCommentsOnly?: boolean
      mustExist?: boolean
      preventDuplicates?: boolean
    }
  }
}]
// ----- jsdoc/require-hyphen-before-param-description -----
/** @internal */
export type JsdocRequireHyphenBeforeParamDescription = []|[("always" | "never")]|[("always" | "never"), {
  tags?: ({
    [k: string]: ("always" | "never")
  } | "any")
}]
// ----- jsdoc/require-jsdoc -----
/** @internal */
export type JsdocRequireJsdoc = []|[{
  checkConstructors?: boolean
  checkGetters?: (boolean | "no-setter")
  checkSetters?: (boolean | "no-getter")
  contexts?: (string | {
    context?: string
    inlineCommentBlock?: boolean
    minLineCount?: number
  })[]
  enableFixer?: boolean
  exemptEmptyConstructors?: boolean
  exemptEmptyFunctions?: boolean
  fixerMessage?: string
  minLineCount?: number
  publicOnly?: (boolean | {
    ancestorsOnly?: boolean
    cjs?: boolean
    esm?: boolean
    window?: boolean
  })
  require?: {
    ArrowFunctionExpression?: boolean
    ClassDeclaration?: boolean
    ClassExpression?: boolean
    FunctionDeclaration?: boolean
    FunctionExpression?: boolean
    MethodDefinition?: boolean
  }
}]
// ----- jsdoc/require-param -----
/** @internal */
export type JsdocRequireParam = []|[{
  autoIncrementBase?: number
  checkConstructors?: boolean
  checkDestructured?: boolean
  checkDestructuredRoots?: boolean
  checkGetters?: boolean
  checkRestProperty?: boolean
  checkSetters?: boolean
  checkTypesPattern?: string
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  enableFixer?: boolean
  enableRestElementFixer?: boolean
  enableRootFixer?: boolean
  exemptedBy?: string[]
  ignoreWhenAllParamsMissing?: boolean
  unnamedRootBase?: string[]
  useDefaultObjectProperties?: boolean
}]
// ----- jsdoc/require-param-description -----
/** @internal */
export type JsdocRequireParamDescription = []|[{
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  defaultDestructuredRootDescription?: string
  setDefaultDestructuredRootDescription?: boolean
}]
// ----- jsdoc/require-param-name -----
/** @internal */
export type JsdocRequireParamName = []|[{
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
}]
// ----- jsdoc/require-param-type -----
/** @internal */
export type JsdocRequireParamType = []|[{
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  defaultDestructuredRootType?: string
  setDefaultDestructuredRootType?: boolean
}]
// ----- jsdoc/require-returns -----
/** @internal */
export type JsdocRequireReturns = []|[{
  checkConstructors?: boolean
  checkGetters?: boolean
  contexts?: (string | {
    comment?: string
    context?: string
    forceRequireReturn?: boolean
  })[]
  enableFixer?: boolean
  exemptedBy?: string[]
  forceRequireReturn?: boolean
  forceReturnsWithAsync?: boolean
  publicOnly?: (boolean | {
    ancestorsOnly?: boolean
    cjs?: boolean
    esm?: boolean
    window?: boolean
  })
}]
// ----- jsdoc/require-returns-check -----
/** @internal */
export type JsdocRequireReturnsCheck = []|[{
  exemptAsync?: boolean
  exemptGenerators?: boolean
  reportMissingReturnForUndefinedTypes?: boolean
}]
// ----- jsdoc/require-returns-description -----
/** @internal */
export type JsdocRequireReturnsDescription = []|[{
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
}]
// ----- jsdoc/require-returns-type -----
/** @internal */
export type JsdocRequireReturnsType = []|[{
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
}]
// ----- jsdoc/require-template -----
/** @internal */
export type JsdocRequireTemplate = []|[{
  requireSeparateTemplates?: boolean
}]
// ----- jsdoc/require-throws -----
/** @internal */
export type JsdocRequireThrows = []|[{
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  exemptedBy?: string[]
}]
// ----- jsdoc/require-yields -----
/** @internal */
export type JsdocRequireYields = []|[{
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  exemptedBy?: string[]
  forceRequireNext?: boolean
  forceRequireYields?: boolean
  next?: boolean
  nextWithGeneratorTag?: boolean
  withGeneratorTag?: boolean
}]
// ----- jsdoc/require-yields-check -----
/** @internal */
export type JsdocRequireYieldsCheck = []|[{
  checkGeneratorsOnly?: boolean
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  exemptedBy?: string[]
  next?: boolean
}]
// ----- jsdoc/sort-tags -----
/** @internal */
export type JsdocSortTags = []|[{
  alphabetizeExtras?: boolean
  linesBetween?: number
  reportIntraTagGroupSpacing?: boolean
  reportTagGroupSpacing?: boolean
  tagSequence?: {
    tags?: string[]
    [k: string]: unknown | undefined
  }[]
}]
// ----- jsdoc/tag-lines -----
/** @internal */
export type JsdocTagLines = []|[("always" | "any" | "never")]|[("always" | "any" | "never"), {
  applyToEndTag?: boolean
  count?: number
  endLines?: (number | null)
  startLines?: (number | null)
  tags?: {
    [k: string]: {
      count?: number
      lines?: ("always" | "never" | "any")
    }
  }
}]
// ----- jsdoc/text-escaping -----
/** @internal */
export type JsdocTextEscaping = []|[{
  escapeHTML?: boolean
  escapeMarkdown?: boolean
}]
// ----- jsdoc/valid-types -----
/** @internal */
export type JsdocValidTypes = []|[{
  allowEmptyNamepaths?: boolean
}]
// ----- package-json/order-properties -----
/** @internal */
export type PackageJsonOrderProperties = []|[{
  order?: (("legacy" | "sort-package-json") | string[])
  [k: string]: unknown | undefined
}]
// ----- package-json/repository-shorthand -----
/** @internal */
export type PackageJsonRepositoryShorthand = []|[{
  form?: ("object" | "shorthand")
  [k: string]: unknown | undefined
}]
// ----- package-json/restrict-dependency-ranges -----
/** @internal */
export type PackageJsonRestrictDependencyRanges = []|[({
  forDependencyTypes?: ("dependencies" | "devDependencies" | "optionalDependencies" | "peerDependencies")[]
  forPackages?: string[]
  forVersions?: string
  rangeType: (("caret" | "pin" | "tilde") | ("caret" | "pin" | "tilde")[])
} | {
  forDependencyTypes?: ("dependencies" | "devDependencies" | "optionalDependencies" | "peerDependencies")[]
  forPackages?: string[]
  forVersions?: string
  rangeType: (("caret" | "pin" | "tilde") | ("caret" | "pin" | "tilde")[])
}[])]
// ----- package-json/sort-collections -----
/** @internal */
export type PackageJsonSortCollections = []|[string[]]
// ----- perfectionist/sort-array-includes -----
/** @internal */
export type PerfectionistSortArrayIncludes = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  groupKind?: ("mixed" | "literals-first" | "spreads-first")
  
  customGroups?: ({
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      selector?: ("literal" | "spread")
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    selector?: ("literal" | "spread")
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  useConfigurationIf?: {
    
    allNamesMatchPattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  }
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  
  newlinesBetween?: ("ignore" | "always" | "never")
  
  groups?: (string | string[] | {
    
    newlinesBetween: ("ignore" | "always" | "never")
  })[]
}[]
// ----- perfectionist/sort-classes -----
/** @internal */
export type PerfectionistSortClasses = []|[{
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  customGroups?: ({
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      modifiers?: ("async" | "protected" | "private" | "public" | "static" | "abstract" | "override" | "readonly" | "decorated" | "declare" | "optional")[]
      
      selector?: ("accessor-property" | "index-signature" | "constructor" | "static-block" | "get-method" | "set-method" | "function-property" | "property" | "method")
      
      decoratorNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      
      elementValuePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    modifiers?: ("async" | "protected" | "private" | "public" | "static" | "abstract" | "override" | "readonly" | "decorated" | "declare" | "optional")[]
    
    selector?: ("accessor-property" | "index-signature" | "constructor" | "static-block" | "get-method" | "set-method" | "function-property" | "property" | "method")
    
    decoratorNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    elementValuePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  ignoreCallbackDependenciesPatterns?: (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string))
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  
  newlinesBetween?: ("ignore" | "always" | "never")
  
  groups?: (string | string[] | {
    
    newlinesBetween: ("ignore" | "always" | "never")
  })[]
}]
// ----- perfectionist/sort-decorators -----
/** @internal */
export type PerfectionistSortDecorators = []|[{
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  sortOnParameters?: boolean
  
  sortOnProperties?: boolean
  
  sortOnAccessors?: boolean
  
  sortOnMethods?: boolean
  
  sortOnClasses?: boolean
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  customGroups?: {
    [k: string]: (string | string[]) | undefined
  }
  
  groups?: (string | string[] | {
    
    newlinesBetween: ("ignore" | "always" | "never")
  })[]
}]
// ----- perfectionist/sort-enums -----
/** @internal */
export type PerfectionistSortEnums = []|[{
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  customGroups?: ({
    [k: string]: (string | string[]) | undefined
  } | ({
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      elementValuePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    elementValuePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[])
  
  forceNumericSort?: boolean
  
  sortByValue?: boolean
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  
  newlinesBetween?: ("ignore" | "always" | "never")
  
  groups?: (string | string[] | {
    
    newlinesBetween: ("ignore" | "always" | "never")
  })[]
}]
// ----- perfectionist/sort-exports -----
/** @internal */
export type PerfectionistSortExports = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  groupKind?: ("mixed" | "values-first" | "types-first")
  
  customGroups?: ({
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      modifiers?: ("value" | "type")[]
      
      selector?: "export"
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    modifiers?: ("value" | "type")[]
    
    selector?: "export"
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  
  newlinesBetween?: ("ignore" | "always" | "never")
  
  groups?: (string | string[] | {
    
    newlinesBetween: ("ignore" | "always" | "never")
  })[]
}[]
// ----- perfectionist/sort-heritage-clauses -----
/** @internal */
export type PerfectionistSortHeritageClauses = []|[{
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  customGroups?: {
    [k: string]: (string | string[]) | undefined
  }
  
  groups?: (string | string[] | {
    
    newlinesBetween: ("ignore" | "always" | "never")
  })[]
}]
// ----- perfectionist/sort-imports -----
/** @internal */
export type PerfectionistSortImports = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  customGroups?: ({
    
    value?: {
      [k: string]: (string | string[]) | undefined
    }
    
    type?: {
      [k: string]: (string | string[]) | undefined
    }
  } | ({
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      modifiers?: ("default" | "named" | "require" | "side-effect" | "ts-equals" | "type" | "value" | "wildcard")[]
      
      selector?: ("side-effect-style" | "tsconfig-path" | "side-effect" | "external" | "internal" | "builtin" | "sibling" | "subpath" | "import" | "parent" | "index" | "style" | "type")
      
      elementValuePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    modifiers?: ("default" | "named" | "require" | "side-effect" | "ts-equals" | "type" | "value" | "wildcard")[]
    
    selector?: ("side-effect-style" | "tsconfig-path" | "side-effect" | "external" | "internal" | "builtin" | "sibling" | "subpath" | "import" | "parent" | "index" | "style" | "type")
    
    elementValuePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[])
  
  maxLineLength?: number
  
  sortSideEffects?: boolean
  
  environment?: ("node" | "bun")
  
  tsconfigRootDir?: string
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  
  newlinesBetween?: ("ignore" | "always" | "never")
  
  internalPattern?: (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string))
  
  groups?: (string | string[] | {
    
    newlinesBetween: ("ignore" | "always" | "never")
  })[]
}[]
// ----- perfectionist/sort-interfaces -----
/** @internal */
export type PerfectionistSortInterfaces = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    sortBy?: ("name" | "value")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  customGroups?: ({
    [k: string]: (string | string[]) | undefined
  } | ({
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
      sortBy?: ("name" | "value")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      modifiers?: ("optional" | "required" | "multiline")[]
      
      selector?: ("index-signature" | "member" | "method" | "multiline" | "property")
      
      elementValuePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      sortBy?: ("name" | "value")
    }[]
  } | {
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
      sortBy?: ("name" | "value")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    modifiers?: ("optional" | "required" | "multiline")[]
    
    selector?: ("index-signature" | "member" | "method" | "multiline" | "property")
    
    elementValuePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    sortBy?: ("name" | "value")
  })[])
  
  groupKind?: ("mixed" | "required-first" | "optional-first")
  
  useConfigurationIf?: {
    
    allNamesMatchPattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    declarationMatchesPattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  }
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  
  newlinesBetween?: ("ignore" | "always" | "never")
  
  ignorePattern?: (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string))
  sortBy?: ("name" | "value")
  
  groups?: (string | string[] | {
    
    newlinesBetween: ("ignore" | "always" | "never")
  })[]
}[]
// ----- perfectionist/sort-intersection-types -----
/** @internal */
export type PerfectionistSortIntersectionTypes = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  customGroups?: ({
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      selector?: ("intersection" | "conditional" | "function" | "operator" | "keyword" | "literal" | "nullish" | "import" | "object" | "named" | "tuple" | "union")
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    selector?: ("intersection" | "conditional" | "function" | "operator" | "keyword" | "literal" | "nullish" | "import" | "object" | "named" | "tuple" | "union")
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  
  newlinesBetween?: ("ignore" | "always" | "never")
  
  groups?: (string | string[] | {
    
    newlinesBetween: ("ignore" | "always" | "never")
  })[]
}[]
// ----- perfectionist/sort-jsx-props -----
/** @internal */
export type PerfectionistSortJsxProps = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  customGroups?: ({
    [k: string]: (string | string[]) | undefined
  } | ({
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      modifiers?: ("shorthand" | "multiline")[]
      
      selector?: ("multiline" | "prop" | "shorthand")
      
      elementValuePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    modifiers?: ("shorthand" | "multiline")[]
    
    selector?: ("multiline" | "prop" | "shorthand")
    
    elementValuePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[])
  
  useConfigurationIf?: {
    
    allNamesMatchPattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    tagMatchesPattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  }
  
  partitionByNewLine?: boolean
  
  newlinesBetween?: ("ignore" | "always" | "never")
  
  ignorePattern?: (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string))
  
  groups?: (string | string[] | {
    
    newlinesBetween: ("ignore" | "always" | "never")
  })[]
}[]
// ----- perfectionist/sort-maps -----
/** @internal */
export type PerfectionistSortMaps = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  customGroups?: ({
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  useConfigurationIf?: {
    
    allNamesMatchPattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  }
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  
  newlinesBetween?: ("ignore" | "always" | "never")
  
  groups?: (string | string[] | {
    
    newlinesBetween: ("ignore" | "always" | "never")
  })[]
}[]
// ----- perfectionist/sort-modules -----
/** @internal */
export type PerfectionistSortModules = []|[{
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  customGroups?: ({
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      modifiers?: ("async" | "declare" | "decorated" | "default" | "export")[]
      
      selector?: ("enum" | "function" | "interface" | "type" | "class")
      
      decoratorNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    modifiers?: ("async" | "declare" | "decorated" | "default" | "export")[]
    
    selector?: ("enum" | "function" | "interface" | "type" | "class")
    
    decoratorNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  
  newlinesBetween?: ("ignore" | "always" | "never")
  
  groups?: (string | string[] | {
    
    newlinesBetween: ("ignore" | "always" | "never")
  })[]
}]
// ----- perfectionist/sort-named-exports -----
/** @internal */
export type PerfectionistSortNamedExports = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  groupKind?: ("mixed" | "values-first" | "types-first")
  
  ignoreAlias?: boolean
  
  customGroups?: ({
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      modifiers?: ("value" | "type")[]
      
      selector?: "export"
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    modifiers?: ("value" | "type")[]
    
    selector?: "export"
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  
  newlinesBetween?: ("ignore" | "always" | "never")
  
  groups?: (string | string[] | {
    
    newlinesBetween: ("ignore" | "always" | "never")
  })[]
}[]
// ----- perfectionist/sort-named-imports -----
/** @internal */
export type PerfectionistSortNamedImports = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  groupKind?: ("mixed" | "values-first" | "types-first")
  
  ignoreAlias?: boolean
  
  customGroups?: ({
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      modifiers?: ("value" | "type")[]
      
      selector?: "import"
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    modifiers?: ("value" | "type")[]
    
    selector?: "import"
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  
  newlinesBetween?: ("ignore" | "always" | "never")
  
  groups?: (string | string[] | {
    
    newlinesBetween: ("ignore" | "always" | "never")
  })[]
}[]
// ----- perfectionist/sort-object-types -----
/** @internal */
export type PerfectionistSortObjectTypes = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    sortBy?: ("name" | "value")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  customGroups?: ({
    [k: string]: (string | string[]) | undefined
  } | ({
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
      sortBy?: ("name" | "value")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      modifiers?: ("optional" | "required" | "multiline")[]
      
      selector?: ("index-signature" | "member" | "method" | "multiline" | "property")
      
      elementValuePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      sortBy?: ("name" | "value")
    }[]
  } | {
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
      sortBy?: ("name" | "value")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    modifiers?: ("optional" | "required" | "multiline")[]
    
    selector?: ("index-signature" | "member" | "method" | "multiline" | "property")
    
    elementValuePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    sortBy?: ("name" | "value")
  })[])
  
  groupKind?: ("mixed" | "required-first" | "optional-first")
  
  useConfigurationIf?: {
    
    allNamesMatchPattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    declarationMatchesPattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  }
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  
  newlinesBetween?: ("ignore" | "always" | "never")
  
  ignorePattern?: (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string))
  sortBy?: ("name" | "value")
  
  groups?: (string | string[] | {
    
    newlinesBetween: ("ignore" | "always" | "never")
  })[]
}[]
// ----- perfectionist/sort-objects -----
/** @internal */
export type PerfectionistSortObjects = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  destructuredObjects?: (boolean | {
    
    groups?: boolean
  })
  customGroups?: ({
    [k: string]: (string | string[]) | undefined
  } | ({
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      modifiers?: ("optional" | "required" | "multiline")[]
      
      selector?: ("member" | "method" | "multiline" | "property")
      
      elementValuePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    modifiers?: ("optional" | "required" | "multiline")[]
    
    selector?: ("member" | "method" | "multiline" | "property")
    
    elementValuePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[])
  
  useConfigurationIf?: {
    
    allNamesMatchPattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    callingFunctionNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  }
  
  destructureOnly?: boolean
  
  objectDeclarations?: boolean
  
  styledComponents?: boolean
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  
  newlinesBetween?: ("ignore" | "always" | "never")
  
  ignorePattern?: (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string))
  
  groups?: (string | string[] | {
    
    newlinesBetween: ("ignore" | "always" | "never")
  })[]
}[]
// ----- perfectionist/sort-sets -----
/** @internal */
export type PerfectionistSortSets = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  groupKind?: ("mixed" | "literals-first" | "spreads-first")
  
  customGroups?: ({
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      selector?: ("literal" | "spread")
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    selector?: ("literal" | "spread")
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  useConfigurationIf?: {
    
    allNamesMatchPattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  }
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  
  newlinesBetween?: ("ignore" | "always" | "never")
  
  groups?: (string | string[] | {
    
    newlinesBetween: ("ignore" | "always" | "never")
  })[]
}[]
// ----- perfectionist/sort-switch-case -----
/** @internal */
export type PerfectionistSortSwitchCase = []|[{
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
}]
// ----- perfectionist/sort-union-types -----
/** @internal */
export type PerfectionistSortUnionTypes = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  customGroups?: ({
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      selector?: ("intersection" | "conditional" | "function" | "operator" | "keyword" | "literal" | "nullish" | "import" | "object" | "named" | "tuple" | "union")
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    selector?: ("intersection" | "conditional" | "function" | "operator" | "keyword" | "literal" | "nullish" | "import" | "object" | "named" | "tuple" | "union")
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  
  newlinesBetween?: ("ignore" | "always" | "never")
  
  groups?: (string | string[] | {
    
    newlinesBetween: ("ignore" | "always" | "never")
  })[]
}[]
// ----- perfectionist/sort-variable-declarations -----
/** @internal */
export type PerfectionistSortVariableDeclarations = []|[{
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  customGroups?: ({
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      selector?: ("initialized" | "uninitialized")
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    
    newlinesInside?: ("always" | "never")
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    selector?: ("initialized" | "uninitialized")
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  
  newlinesBetween?: ("ignore" | "always" | "never")
  
  groups?: (string | string[] | {
    
    newlinesBetween: ("ignore" | "always" | "never")
  })[]
}]
// ----- promise/always-return -----
/** @internal */
export type PromiseAlwaysReturn = []|[{
  ignoreLastCallback?: boolean
  ignoreAssignmentVariable?: string[]
}]
// ----- promise/catch-or-return -----
/** @internal */
export type PromiseCatchOrReturn = []|[{
  allowFinally?: boolean
  allowThen?: boolean
  allowThenStrict?: boolean
  terminationMethod?: (string | string[])
}]
// ----- promise/no-callback-in-promise -----
/** @internal */
export type PromiseNoCallbackInPromise = []|[{
  exceptions?: string[]
  timeoutsErr?: boolean
}]
// ----- promise/no-return-wrap -----
/** @internal */
export type PromiseNoReturnWrap = []|[{
  allowReject?: boolean
}]
// ----- promise/param-names -----
/** @internal */
export type PromiseParamNames = []|[{
  resolvePattern?: string
  rejectPattern?: string
}]
// ----- promise/prefer-await-to-then -----
/** @internal */
export type PromisePreferAwaitToThen = []|[{
  strict?: boolean
  [k: string]: unknown | undefined
}]
// ----- promise/spec-only -----
/** @internal */
export type PromiseSpecOnly = []|[{
  allowedMethods?: string[]
}]
// ----- promise/valid-params -----
/** @internal */
export type PromiseValidParams = []|[{
  exclude?: string[]
}]
// ----- unicorn-x/better-regex -----
/** @internal */
export type UnicornXBetterRegex = []|[{
  sortCharacterClasses?: boolean
}]
// ----- unicorn-x/catch-error-name -----
/** @internal */
export type UnicornXCatchErrorName = []|[{
  name?: string
  ignore?: unknown[]
}]
// ----- unicorn-x/consistent-function-scoping -----
/** @internal */
export type UnicornXConsistentFunctionScoping = []|[{
  checkArrowFunctions?: boolean
}]
// ----- unicorn-x/escape-case -----
/** @internal */
export type UnicornXEscapeCase = []|[("uppercase" | "lowercase")]
// ----- unicorn-x/expiring-todo-comments -----
/** @internal */
export type UnicornXExpiringTodoComments = []|[{
  terms?: string[]
  ignore?: unknown[]
  ignoreDatesOnPullRequests?: boolean
  allowWarningComments?: boolean
  date?: string
}]
// ----- unicorn-x/explicit-length-check -----
/** @internal */
export type UnicornXExplicitLengthCheck = []|[{
  "non-zero"?: ("greater-than" | "not-equal")
}]
// ----- unicorn-x/filename-case -----
/** @internal */
export type UnicornXFilenameCase = []|[({
  case?: ("camelCase" | "snakeCase" | "kebabCase" | "pascalCase")
  ignore?: unknown[]
  multipleFileExtensions?: boolean
} | {
  cases?: {
    camelCase?: boolean
    snakeCase?: boolean
    kebabCase?: boolean
    pascalCase?: boolean
  }
  ignore?: unknown[]
  multipleFileExtensions?: boolean
})]
// ----- unicorn-x/import-style -----
/** @internal */
export type UnicornXImportStyle = []|[{
  checkImport?: boolean
  checkDynamicImport?: boolean
  checkExportFrom?: boolean
  checkRequire?: boolean
  extendDefaultStyles?: boolean
  styles?: _UnicornXImportStyle_ModuleStyles
}]
/** @internal */
export type _UnicornXImportStyleStyles = (false | _UnicornXImportStyle_BooleanObject) | undefined
interface _UnicornXImportStyle_ModuleStyles {
  [k: string]: _UnicornXImportStyleStyles | undefined
}
interface _UnicornXImportStyle_BooleanObject {
  [k: string]: boolean | undefined
}
// ----- unicorn-x/no-array-reduce -----
/** @internal */
export type UnicornXNoArrayReduce = []|[{
  allowSimpleOperations?: boolean
}]
// ----- unicorn-x/no-instanceof-builtins -----
/** @internal */
export type UnicornXNoInstanceofBuiltins = []|[{
  useErrorIsError?: boolean
  strategy?: ("loose" | "strict")
  include?: string[]
  exclude?: string[]
}]
// ----- unicorn-x/no-keyword-prefix -----
/** @internal */
export type UnicornXNoKeywordPrefix = []|[{
  
  disallowedPrefixes?: []|[string]
  checkProperties?: boolean
  onlyCamelCase?: boolean
}]
// ----- unicorn-x/no-null -----
/** @internal */
export type UnicornXNoNull = []|[{
  checkStrictEquality?: boolean
}]
// ----- unicorn-x/no-typeof-undefined -----
/** @internal */
export type UnicornXNoTypeofUndefined = []|[{
  checkGlobalVariables?: boolean
}]
// ----- unicorn-x/no-unnecessary-polyfills -----
/** @internal */
export type UnicornXNoUnnecessaryPolyfills = []|[{
  targets: (string | unknown[] | {
    [k: string]: unknown | undefined
  })
}]
// ----- unicorn-x/no-useless-undefined -----
/** @internal */
export type UnicornXNoUselessUndefined = []|[{
  checkArguments?: boolean
  checkArrowFunctionBody?: boolean
}]
// ----- unicorn-x/number-literal-case -----
/** @internal */
export type UnicornXNumberLiteralCase = []|[{
  hexadecimalValue?: ("uppercase" | "lowercase")
}]
// ----- unicorn-x/numeric-separators-style -----
/** @internal */
export type UnicornXNumericSeparatorsStyle = []|[{
  binary?: {
    onlyIfContainsSeparator?: boolean
    minimumDigits?: number
    groupLength?: number
  }
  octal?: {
    onlyIfContainsSeparator?: boolean
    minimumDigits?: number
    groupLength?: number
  }
  hexadecimal?: {
    onlyIfContainsSeparator?: boolean
    minimumDigits?: number
    groupLength?: number
  }
  number?: {
    onlyIfContainsSeparator?: boolean
    minimumDigits?: number
    groupLength?: number
  }
  onlyIfContainsSeparator?: boolean
}]
// ----- unicorn-x/prefer-add-event-listener -----
/** @internal */
export type UnicornXPreferAddEventListener = []|[{
  excludedPackages?: string[]
}]
// ----- unicorn-x/prefer-array-find -----
/** @internal */
export type UnicornXPreferArrayFind = []|[{
  checkFromLast?: boolean
}]
// ----- unicorn-x/prefer-array-flat -----
/** @internal */
export type UnicornXPreferArrayFlat = []|[{
  functions?: unknown[]
}]
// ----- unicorn-x/prefer-at -----
/** @internal */
export type UnicornXPreferAt = []|[{
  getLastElementFunctions?: unknown[]
  checkAllIndexAccess?: boolean
}]
// ----- unicorn-x/prefer-export-from -----
/** @internal */
export type UnicornXPreferExportFrom = []|[{
  ignoreUsedVariables?: boolean
}]
// ----- unicorn-x/prefer-number-properties -----
/** @internal */
export type UnicornXPreferNumberProperties = []|[{
  checkInfinity?: boolean
  checkNaN?: boolean
}]
// ----- unicorn-x/prefer-object-from-entries -----
/** @internal */
export type UnicornXPreferObjectFromEntries = []|[{
  functions?: unknown[]
}]
// ----- unicorn-x/prefer-single-call -----
/** @internal */
export type UnicornXPreferSingleCall = []|[{
  ignore?: unknown[]
}]
// ----- unicorn-x/prefer-structured-clone -----
/** @internal */
export type UnicornXPreferStructuredClone = []|[{
  functions?: unknown[]
}]
// ----- unicorn-x/prefer-switch -----
/** @internal */
export type UnicornXPreferSwitch = []|[{
  minimumCases?: number
  emptyDefaultCase?: ("no-default-comment" | "do-nothing-comment" | "no-default-case")
}]
// ----- unicorn-x/prefer-ternary -----
/** @internal */
export type UnicornXPreferTernary = []|[("always" | "only-single-line")]
// ----- unicorn-x/prevent-abbreviations -----
/** @internal */
export type UnicornXPreventAbbreviations = []|[{
  checkProperties?: boolean
  checkVariables?: boolean
  checkDefaultAndNamespaceImports?: (boolean | string)
  checkShorthandImports?: (boolean | string)
  checkShorthandProperties?: boolean
  checkFilenames?: boolean
  extendDefaultReplacements?: boolean
  replacements?: _UnicornXPreventAbbreviations_Abbreviations
  extendDefaultAllowList?: boolean
  allowList?: _UnicornXPreventAbbreviations_BooleanObject
  ignore?: unknown[]
}]
/** @internal */
export type _UnicornXPreventAbbreviationsReplacements = (false | _UnicornXPreventAbbreviations_BooleanObject) | undefined
interface _UnicornXPreventAbbreviations_Abbreviations {
  [k: string]: _UnicornXPreventAbbreviationsReplacements | undefined
}
interface _UnicornXPreventAbbreviations_BooleanObject {
  [k: string]: boolean | undefined
}
// ----- unicorn-x/relative-url-style -----
/** @internal */
export type UnicornXRelativeUrlStyle = []|[("never" | "always")]
// ----- unicorn-x/string-content -----
/** @internal */
export type UnicornXStringContent = []|[{
  patterns?: {
    [k: string]: (string | {
      suggest: string
      fix?: boolean
      message?: string
    }) | undefined
  }
}]
// ----- unicorn-x/switch-case-braces -----
/** @internal */
export type UnicornXSwitchCaseBraces = []|[("always" | "avoid")]
// ----- unicorn-x/template-indent -----
/** @internal */
export type UnicornXTemplateIndent = []|[{
  indent?: (string | number)
  tags?: string[]
  functions?: string[]
  selectors?: string[]
  comments?: string[]
}]
declare module "@eslint-deputy/define-config" {
  interface RulesRecord extends RuleOptions {}
}
