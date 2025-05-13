import type { Linter } from "eslint";
import promise from "eslint-plugin-promise";
import { defineConfig } from "eslint/config";
import { warn } from "../severity.ts";
import type { DeputyConfigOptions } from "../options.ts";

export const promises = ({ fileGlobs }: DeputyConfigOptions): Linter.Config[] =>
  defineConfig(
    { ...promise.configs["flat/recommended"], files: [fileGlobs.ecma] },
    {
      name: "deputy/promises/handpicked",
      files: [fileGlobs.ecma],
      rules: {
        "promise/prefer-await-to-callbacks": warn,
        "promise/prefer-catch": warn,
      },
    },
  );
