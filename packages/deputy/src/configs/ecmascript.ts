import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import confusingBrowserGlobals from "confusing-browser-globals";
import type { Linter } from "eslint/universal";
import ts from "typescript-eslint";

import { defineConfig, type TypedRules } from "@eslint-deputy/define-config";

import { getGlobals } from "../common/globals.ts";
import type { DeputyConfigOptions, RuleConfigurations } from "../options.ts";
import { error, off, warn } from "../severity.ts";

const coreHandpicked: TypedRules = {
  "array-callback-return": [error, { allowImplicit: true, checkForEach: true }],
  curly: [error, "multi-line", "consistent"],
  eqeqeq: error,
  "func-style": [warn, "declaration", { allowArrowFunctions: true }],
  "logical-assignment-operators": [
    error,
    "always",
    { enforceForIfStatements: true },
  ],
  "no-alert": error,
  "no-caller": error,
  "no-console": [warn, { allow: ["warn", "error", "debug", "info", "table"] }],
  "no-else-return": [error, { allowElseIf: false }],
  "no-eval": error,
  "no-extend-native": error,
  "no-extra-bind": error,
  "no-extra-label": error,
  "no-implicit-coercion": error,
  "no-lone-blocks": error,
  "no-multi-assign": error,
  "no-multi-str": error,
  "no-new-wrappers": error,
  "no-object-constructor": error,
  "no-octal-escape": error,
  "no-param-reassign": error,
  "no-plusplus": [error, { allowForLoopAfterthoughts: true }],
  "no-promise-executor-return": error,
  "no-proto": error,
  "no-restricted-globals": [error, ...confusingBrowserGlobals],
  "no-restricted-imports": [
    error,
    {
      patterns: [
        {
          group: ["node_modules"],
          message: "Imports from `node_modules/` are likely a mistake.",
          importNamePattern: "^", // This allows side-effect imports; see eslint/eslint#18991.
        },
        {
          group: ["dist"],
          message: "Imports from `dist/` are likely a mistake.",
          importNamePattern: "^", // This allows side-effect imports; see eslint/eslint#18991.
        },
      ],
    },
  ],
  "no-return-assign": [error, "always"],
  "no-sequences": [error, { allowInParentheses: false }],
  "no-unassigned-vars": error,
  "no-unmodified-loop-condition": error,
  "no-unneeded-ternary": [error, { defaultAssignment: false }],
  "no-unreachable-loop": error,
  "no-useless-assignment": error,
  "no-useless-call": error,
  "no-useless-computed-key": error,
  "no-useless-rename": error,
  "no-void": [error, { allowAsStatement: true }],
  "object-shorthand": error,
  "operator-assignment": [error, "always"],
  "prefer-arrow-callback": [
    error,
    { allowNamedFunctions: false, allowUnboundThis: true },
  ],
  "prefer-exponentiation-operator": warn,
  "prefer-object-has-own": error,
  "prefer-object-spread": error,
  "prefer-template": error,
  "preserve-caught-error": warn,
  "require-atomic-updates": error,
  strict: [warn, "safe"],

  // Replaced by TSESLint rules:
  "no-return-await": off,
  "no-shadow": off,
  "no-undef": off,
  "no-use-before-define": off,
};

const tseslintHandpicked: TypedRules = {
  "@typescript-eslint/ban-ts-comment": [
    error,
    {
      minimumDescriptionLength: 20, // "(TSNNNN): " is 10 + 10.
      "ts-check": false,
      "ts-expect-error": {
        descriptionFormat: String.raw`^\(TS\d+\): .+$`,
      },
    },
  ],
  "@typescript-eslint/consistent-type-exports": [
    error,
    { fixMixedExportsWithInlineTypeSpecifier: true },
  ],
  "@typescript-eslint/consistent-type-imports": [
    error,
    { fixStyle: "inline-type-imports" },
  ],
  "@typescript-eslint/default-param-last": error,
  "@typescript-eslint/method-signature-style": error,
  "@typescript-eslint/no-empty-object-type": [
    error,
    {
      allowInterfaces: "with-single-extends",
    },
  ],
  "@typescript-eslint/no-import-type-side-effects": error,
  "@typescript-eslint/no-loop-func": error,
  "@typescript-eslint/no-shadow": [
    error,
    {
      allow: ["resolve", "reject", "done", "next", "err", "error"],
      hoist: "all",
      ignoreFunctionTypeParameterNameValueShadow: true,
      ignoreTypeValueShadow: true,
    },
  ],
  "@typescript-eslint/no-unused-expressions": [
    error,
    {
      allowShortCircuit: true,
      allowTaggedTemplates: true,
      allowTernary: true,
      enforceForJSX: true,
    },
  ],
  "@typescript-eslint/no-unused-vars": [
    error,
    {
      args: "all",
      argsIgnorePattern: "^_",
      caughtErrors: "all",
      caughtErrorsIgnorePattern: "^_",
      destructuredArrayIgnorePattern: "^_",
      varsIgnorePattern: "^_",

      ignoreRestSiblings: true,
    },
  ],
  "@typescript-eslint/no-use-before-define": error,
  "@typescript-eslint/prefer-destructuring": [
    warn,
    {
      AssignmentExpression: {
        array: false,
        object: false,
      },
      VariableDeclarator: {
        array: false,
        object: true,
      },
    },
    {
      enforceForRenamedProperties: false,
    },
  ],
  "@typescript-eslint/prefer-nullish-coalescing": [
    error,
    { ignorePrimitives: true },
  ],
  "@typescript-eslint/promise-function-async": warn,
  "@typescript-eslint/restrict-template-expressions": [
    error,
    { allowNumber: true },
  ],
  "@typescript-eslint/return-await": [error, "always"],
  "@typescript-eslint/strict-boolean-expressions": warn,
  "@typescript-eslint/switch-exhaustiveness-check": error,

  "@typescript-eslint/no-require-imports": off, // We use unicorn-x/prefer-module instead.
};

const namingConvention: TypedRules = {
  "@typescript-eslint/naming-convention": [
    warn,
    {
      selector: "default",

      format: ["camelCase"],

      leadingUnderscore: "forbid",
      trailingUnderscore: "forbid",
    },
    {
      selector: "default",
      modifiers: ["exported"],

      format: ["camelCase"],

      leadingUnderscore: "allow",
      trailingUnderscore: "forbid",
    },
    {
      selector: "variable",
      modifiers: ["const"],
      types: ["string", "number"],

      format: ["camelCase", "UPPER_CASE"],

      leadingUnderscore: "forbid",
      trailingUnderscore: "forbid",
    },
    {
      selector: "objectLiteralProperty",

      format: null,

      leadingUnderscore: "allowSingleOrDouble",
      trailingUnderscore: "forbid",
    },
    {
      selector: "typeLike",

      format: ["PascalCase"],

      leadingUnderscore: "forbid",
      trailingUnderscore: "forbid",
    },
    // https://typescript-eslint.io/rules/naming-convention/#enforce-that-boolean-variables-are-prefixed-with-an-allowed-verb
    // Ensure destructured boolean variables keep original names (no prefix enforcement).
    {
      selector: "variable",
      modifiers: ["destructured"],
      types: ["boolean"],

      format: null,
    },
    {
      selector: "variable",
      types: ["boolean"],

      format: ["PascalCase"],
      prefix: ["is", "are", "has", "should", "can"],

      leadingUnderscore: "forbid",
      trailingUnderscore: "forbid",
    },
    // https://typescript-eslint.io/rules/naming-convention/#enforce-that-interface-names-do-not-begin-with-an-i
    {
      selector: "interface",

      format: ["PascalCase"],

      custom: {
        match: false,
        regex: "^I[A-Z]",
      },
    },
    {
      selector: "parameter",

      format: ["camelCase"],

      leadingUnderscore: "allow",
    },
    // https://typescript-eslint.io/rules/naming-convention/#ignore-destructured-names
    {
      selector: "variable",
      modifiers: ["destructured"],

      format: null,
    },
    {
      selector: "typeProperty",

      format: null,
    },
  ],
};

const stylisticHandpicked: TypedRules = {
  "@stylistic/padding-line-between-statements": [
    error,

    // Require blank lines after every sequence of variable declarations.
    { blankLine: "always", prev: ["const", "let"], next: "*" },
    { blankLine: "any", prev: ["const", "let"], next: ["const", "let"] },

    // Require blank lines before all return statements.
    { blankLine: "always", prev: "*", next: "return" },
  ],
};

const ecmascriptCustomized = (
  ruleConfigurations: RuleConfigurations,
): TypedRules => ({
  "@typescript-eslint/no-deprecated": [
    error,
    { allow: ruleConfigurations.deprecations ?? [] },
  ],
});

export const ecmascript = ({
  allowDefaultProject,
  environment,
  extraTsExtensions,
  fileGlobs,
  rootDir,
  ruleConfigurations,
}: DeputyConfigOptions): Linter.Config[] =>
  defineConfig(
    {
      name: "deputy/es",
      files: [fileGlobs.ecma],
      extends: [
        { ...js.configs.recommended, name: "eslint/recommended" },
        ts.configs.strictTypeChecked,

        // `strictTypeChecked` already includes `base` and `eslintRecommended`
        // This is an implementation detail, so be careful when upgrading.
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- It works. Hopefully.
        ts.configs.stylisticTypeChecked[2]!,
      ],

      languageOptions: {
        globals: getGlobals(environment.globals),
        parserOptions: {
          ecmaFeatures: {
            globalReturn: false,
            impliedStrict: true,
            jsx: true,
          },
          sourceType: "module",

          extraFileExtensions: extraTsExtensions,
          projectService: {
            allowDefaultProject,
          },
          tsconfigRootDir: rootDir,
        },
      },
    },

    {
      name: "deputy/es/js/handpicked",
      files: [fileGlobs.ecma],
      rules: coreHandpicked,
    },
    {
      name: "deputy/es/ts/handpicked",
      files: [fileGlobs.ecma],
      rules: tseslintHandpicked,
    },
    {
      name: "deputy/es/naming",
      files: [fileGlobs.ecma],
      rules: namingConvention,
    },
    {
      name: "deputy/es/stylistic/handpicked",
      files: [fileGlobs.ecma],
      plugins: {
        "@stylistic": stylistic,
      },
      rules: stylisticHandpicked,
    },
    {
      name: "deputy/es/customized",
      files: [fileGlobs.ecma],
      rules: ecmascriptCustomized(ruleConfigurations),
    },
  );
