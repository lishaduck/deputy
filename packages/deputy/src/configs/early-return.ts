import type { Linter } from "eslint";
import preferEarlyReturn from "@regru/eslint-plugin-prefer-early-return";
import { warn } from "../severity.ts";
import { defineConfig } from "eslint/config";
import type { DeputyConfigOptions } from "../options.ts";

export const earlyReturn = ({
  fileGlobs,
}: DeputyConfigOptions): Linter.Config[] =>
  defineConfig({
    name: "deputy/early-return",
    files: [fileGlobs.ecma],
    plugins: { "@regru": preferEarlyReturn },
    rules: {
      "@regru/prefer-early-return": [warn, { maximumStatements: 1 }],
    },
  });
