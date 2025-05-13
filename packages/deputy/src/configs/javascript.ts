import { defineConfig } from "eslint/config";
import type { Linter } from "eslint";
import type { DeputyConfigOptions } from "../options.ts";
import { off } from "../severity.ts";

export const javascript = ({
  fileGlobs,
}: DeputyConfigOptions): Linter.Config[] =>
  defineConfig({
    name: "deputy/js",
    files: [fileGlobs.js],
    rules: {
      "@typescript-eslint/no-unsafe-assignment": off,
    },
  });
