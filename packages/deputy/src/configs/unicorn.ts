import type { Linter } from "eslint";
import unicornX from "eslint-plugin-unicorn-x";
import { defineConfig } from "eslint/config";
import { off } from "../severity.ts";
import type { DeputyConfigOptions } from "../options.ts";

const handpicked: Linter.RulesRecord = {
  "unicorn-x/empty-brace-spaces": off,
  "unicorn-x/no-abusive-eslint-disable": off, // We use eslint-plugin-eslint-comments.
};

const handpickedDts: Linter.RulesRecord = {
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
