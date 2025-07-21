import type { Linter } from "eslint/universal";
import promise from "eslint-plugin-promise";

import { defineConfig } from "@eslint-deputy/define-config";

import type { DeputyConfigOptions } from "../options.ts";
import { warn } from "../severity.ts";

export const promises = ({ fileGlobs }: DeputyConfigOptions): Linter.Config[] =>
  defineConfig(
    { ...promise.configs["flat/recommended"], files: [fileGlobs.ecma] },
    {
      name: "deputy/promises/handpicked",
      files: [fileGlobs.ecma],
      rules: {
        "promise/no-multiple-resolved": warn,
        "promise/prefer-await-to-callbacks": warn,
        "promise/prefer-await-to-then": warn,
        "promise/prefer-catch": warn,
      },
    },
  );
