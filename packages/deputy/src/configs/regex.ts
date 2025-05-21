import type { Linter } from "eslint";
import regexp from "eslint-plugin-regexp";

import { defineConfig } from "@eslint-deputy/define-config";

import type { DeputyConfigOptions } from "../options.ts";

export const regex = ({ fileGlobs }: DeputyConfigOptions): Linter.Config[] =>
  defineConfig({
    name: "deputy/regex",
    files: [fileGlobs.ecma],
    ...regexp.configs["flat/recommended"],
  });
