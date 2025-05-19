import type { Linter } from "eslint";
import jsdoc from "eslint-plugin-jsdoc";
import { getJsdocProcessorPlugin } from "eslint-plugin-jsdoc/getJsdocProcessorPlugin.js";
import tsdoc from "eslint-plugin-tsdoc";
import ts from "typescript-eslint";

import { defineConfig, type TypedRules } from "@eslint-deputy/define-config";

import type { DeputyConfigOptions, GlobBag } from "../options.ts";
import { error, off, warn } from "../severity.ts";

const handpicked: TypedRules = {
  "jsdoc/check-indentation": warn,
  "jsdoc/require-description": warn,
  "jsdoc/require-description-complete-sentence": warn,
  "jsdoc/require-hyphen-before-param-description": [warn, "always"],
  "jsdoc/require-jsdoc": [warn, { publicOnly: true }],
  "jsdoc/tag-lines": [warn, "always", { count: 0, startLines: 1 }],
};

const exampleDisables: TypedRules = {
  // "always" newline rule at end unlikely in sample code
  "eol-last": off,

  // Wouldn't generally expect example paths to resolve relative to JS file
  "import/no-unresolved": off,

  // Snippets likely too short to always include import/export info
  "import/unambiguous": off,
  "jsdoc/require-file-overview": off,

  // The end of a multiline comment would end the comment the example is in.
  "jsdoc/require-jsdoc": off,

  // Unlikely to have inadvertent debugging within examples
  "no-console": off,

  // Often wish to start `@example` code after newline; also may use
  //   empty lines for spacing
  "no-multiple-empty-lines": off,

  // Many variables in examples will be `undefined`
  "no-undef": off,

  // Common to define variables for clarity without always using them
  "@typescript-eslint/no-unused-vars": off,

  // See import/no-unresolved
  "node/no-missing-import": off,
  "node/no-missing-require": off,

  // Can generally look nicer to pad a little even if code imposes more stringency
  "padded-blocks": off,

  ...ts.configs.disableTypeChecked.rules,
};

// TODO: Get jsdoc/ to support fenced code blocks.
function _examples(fileGlobs: GlobBag): Linter.Config[] {
  return [
    {
      name: "deputy/docs/examples/setup",
      files: [fileGlobs.ecma],

      plugins: {
        examples: getJsdocProcessorPlugin({
          checkDefaults: true,
          checkParams: true,
          checkProperties: true,

          parser: ts.parser as Linter.Parser,
        }),
      },
      processor: "examples/examples",
    },
    {
      name: "deputy/docs/examples",
      files: ["**/*.md/*.js"],

      languageOptions: {
        parserOptions: {
          projectService: false,
        },
      },

      rules: exampleDisables,
    },
    {
      name: "deputy/docs/examples/defaults",
      files: [
        "**/*.jsdoc-defaults",
        "**/*.jsdoc-params",
        "**/*.jsdoc-properties",
      ],

      languageOptions: {
        parserOptions: {
          projectService: false,
        },
      },

      rules: {
        ...exampleDisables,

        "@stylistic/quotes": [error, "double"],
        "@stylistic/semi": [error, "never"],
        "@typescript-eslint/no-empty-function": off,
        "@typescript-eslint/no-unused-expressions": off,
        "no-new": off,
        strict: off,
      },
    },
  ];
}

export const documentation = ({
  fileGlobs,
}: DeputyConfigOptions): Linter.Config[] =>
  defineConfig(
    {
      name: "deputy/docs/js",
      files: [fileGlobs.js],
      extends: [
        jsdoc.configs["flat/contents-typescript-flavor"],
        jsdoc.configs["flat/stylistic-typescript-flavor"],
        jsdoc.configs["flat/logical-typescript-flavor"],
        jsdoc.configs["flat/requirements-typescript-flavor"],
      ],
      rules: handpicked,
    },
    {
      name: "deputy/docs/ts",
      files: [fileGlobs.ts],
      extends: [
        jsdoc.configs["flat/contents-typescript"],
        jsdoc.configs["flat/stylistic-typescript"],
        jsdoc.configs["flat/logical-typescript"],
        jsdoc.configs["flat/requirements-typescript"],
      ],

      plugins: { tsdoc },

      rules: { ...handpicked, "tsdoc/syntax": error },
    },

    // ...examples(fileGlobs),
  );
