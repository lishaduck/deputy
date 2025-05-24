import type { Linter } from "eslint/universal";
import unicornX from "eslint-plugin-unicorn-x";

import { defineConfig, type TypedRules } from "@eslint-deputy/define-config";

import type { DeputyConfigOptions } from "../options.ts";
import { error, off, warn } from "../severity.ts";

const handpicked: TypedRules = {
  "unicorn-x/consistent-destructuring": warn,
  "unicorn-x/custom-error-definition": error,
  "unicorn-x/no-keyword-prefix": warn,
  "unicorn-x/prefer-import-meta-properties": warn,
  "unicorn-x/prefer-json-parse-buffer": warn,

  "unicorn-x/empty-brace-spaces": off, // Prettier
  "unicorn-x/no-abusive-eslint-disable": off, // We use eslint-plugin-eslint-comments.
};

const handpickedDts: TypedRules = {
  "unicorn-x/no-named-default": off,
};

export const unicorn = ({ fileGlobs }: DeputyConfigOptions): Linter.Config[] =>
  defineConfig(
    unicornX.configs.recommended,
    {
      name: "deputy/unicorn/handpicked",
      files: [fileGlobs.ecma],
      rules: handpicked,
    },
    {
      name: "deputy/unicorn/dts",
      files: [fileGlobs.dts],
      rules: handpickedDts,
    },
  );
