import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import type { Linter } from "eslint";

import { defineConfig } from "@eslint-deputy/define-config";

import type { DeputyConfigOptions } from "../options.ts";
import { warn } from "../severity.ts";

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
