import type { Linter } from "eslint";
import type { DeputyConfigOptions } from "../options.ts";
import { error, warn } from "../severity.ts";
import { defineConfig } from "eslint/config";

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

    // TODO: TSDoc
  });
