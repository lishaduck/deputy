import type { Linter } from "eslint";
import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import { warn } from "../severity.ts";
import { defineConfig } from "eslint/config";
import type { DeputyConfigOptions } from "../options.ts";

export const eslintComments = ({
  fileGlobs,
}: DeputyConfigOptions): Linter.Config[] =>
  defineConfig(
    {
      ...comments.recommended,
      name: "deputy/eslint-comments",
      files: [fileGlobs.ecma],
    },
    {
      name: "deputy/eslint-comments/handpicked",
      files: [fileGlobs.ecma],
      rules: {
        "@eslint-community/eslint-comments/require-description": warn,
      },
    },
  );
