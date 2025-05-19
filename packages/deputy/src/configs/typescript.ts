import type { Linter } from "eslint";

import { defineConfig } from "@eslint-deputy/define-config";

import type { DeputyConfigOptions } from "../options.ts";
import { error, warn } from "../severity.ts";

export const typescript = ({
  fileGlobs,
}: DeputyConfigOptions): Linter.Config[] =>
  defineConfig({
    name: "deputy/ts",
    files: [fileGlobs.ts],
    rules: {
      "@typescript-eslint/explicit-function-return-type": [
        warn,
        { allowExpressions: true },
      ],
      "@typescript-eslint/explicit-module-boundary-types": error,
    },
  });
