import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import confusingBrowserGlobals from "confusing-browser-globals";
import type { Linter } from "eslint";
import stylistic from "@stylistic/eslint-plugin";
import ts from "typescript-eslint";
import type { DeputyConfigOptions, RuleConfigurations } from "../options.ts";
import { error, off, warn } from "../severity.ts";
import { getGlobals } from "../common/globals.ts";

const coreHandpicked: Linter.RulesRecord = {
  "func-style": [warn, "declaration", { allowArrowFunctions: true }],
  "no-promise-executor-return": error,
  "no-unreachable-loop": error,
  "no-caller": error,
  "no-extend-native": error,
  "no-extra-bind": error,
  "no-extra-label": error,
  "no-implicit-coercion": error,
  "no-multi-str": error,
  "no-new-wrappers": error,
  "no-object-constructor": error,
  strict: [warn, "safe"],
  "no-octal-escape": error,
  "no-proto": error,
  "no-sequences": [error, { allowInParentheses: false }],
  "no-unmodified-loop-condition": error,
  "no-void": [error, { allowAsStatement: true }],
  "no-multi-assign": error,
  "no-plusplus": [error, { allowForLoopAfterthoughts: true }],
  "no-useless-call": error,
  "prefer-object-has-own": error,
  "no-lone-blocks": error,
  "no-eval": error,
  "no-return-assign": [error, "always"],
  "no-else-return": [error, { allowElseIf: false }],
  "prefer-template": error,
  "operator-assignment": [error, "always"],
  "logical-assignment-operators": [
    "error",
    "always",
    { enforceForIfStatements: true },
  ],
  "prefer-object-spread": error,
  "no-param-reassign": error,
  "no-useless-computed-key": error,
  "no-useless-rename": error,
  "object-shorthand": error,
  "array-callback-return": [error, { allowImplicit: true, checkForEach: true }],
  "no-unneeded-ternary": [error, { defaultAssignment: false }],
  "require-atomic-updates": error,
  "no-console": [warn, { allow: ["warn", "error", "debug", "info", "table"] }],
  curly: [error, "multi-line", "consistent"],
  eqeqeq: error,
  "prefer-arrow-callback": error,
  "no-useless-assignment": error,
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
  "no-restricted-globals": [error, ...confusingBrowserGlobals],
};

const tseslintHandpicked: Linter.RulesRecord = {
  "@typescript-eslint/ban-ts-comment": [
    error,
    {
      minimumDescriptionLength: 10,
      "ts-check": false,
      "ts-expect-error": {
        descriptionFormat: String.raw`^\(TS\d+\): .+$`,
      },
    },
  ],
  "no-use-before-define": off,
  "@typescript-eslint/no-use-before-define": error,
  "@typescript-eslint/no-loop-func": error,
  "@typescript-eslint/method-signature-style": error,
  "@typescript-eslint/prefer-nullish-coalescing": [
    error,
    { ignorePrimitives: true },
  ],
  "@typescript-eslint/no-unused-expressions": [
    error,
    {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
      enforceForJSX: true,
    },
  ],
  "@typescript-eslint/no-import-type-side-effects": error,
  "@typescript-eslint/default-param-last": error,
  "@typescript-eslint/no-empty-object-type": [
    error,
    {
      allowInterfaces: "with-single-extends",
    },
  ],
  "no-shadow": "off",
  "@typescript-eslint/no-shadow": [
    error,
    {
      hoist: "all",
      allow: ["resolve", "reject", "done", "next", "err", "error"],
      ignoreTypeValueShadow: true,
      ignoreFunctionTypeParameterNameValueShadow: true,
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
  "@typescript-eslint/prefer-destructuring": [
    warn,
    {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: false,
        object: false,
      },
    },
    {
      enforceForRenamedProperties: false,
    },
  ],
  "@typescript-eslint/promise-function-async": warn,
  "@typescript-eslint/restrict-template-expressions": [
    error,
    { allowNumber: true },
  ],
  "no-return-await": off,
  "@typescript-eslint/return-await": [error, "always"],

  "@typescript-eslint/strict-boolean-expressions": warn,
  "@typescript-eslint/switch-exhaustiveness-check": error,
};

const stylisticHandpicked: Linter.RulesRecord = {
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
): Linter.RulesRecord => ({
  "@typescript-eslint/no-deprecated": [
    error,
    ...(ruleConfigurations.deprecations ?? []),
  ],
});

export const ecmascript = ({
  allowDefaultProject,
  environment,
  rootDir,
  ruleConfigurations,
  fileGlobs,
}: DeputyConfigOptions): Linter.Config[] =>
  defineConfig(
    {
      name: "deputy/es",
      files: [fileGlobs.ecma],
      extends: [
        { ...js.configs.recommended, name: "eslint/recommended" },
        ts.configs.strictTypeChecked as Linter.Config[],

        // `strictTypeChecked` already includes `base` and `eslintRecommended`
        // This is an implementation detail, so be careful when upgrading.
        ts.configs.stylisticTypeChecked[2] as Linter.Config,
      ],

      languageOptions: {
        globals: getGlobals(environment.globals ?? []),
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
            impliedStrict: true,
            globalReturn: false,
          },
          sourceType: "module",

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

    // TODO: JSDoc
  );
