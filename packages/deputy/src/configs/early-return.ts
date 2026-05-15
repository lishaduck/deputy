import preferEarlyReturn from "@regru/eslint-plugin-prefer-early-return";
import type { Linter } from "eslint/universal";

import { defineConfig } from "@eslint-deputy/define-config";

import type { DeputyConfigOptions } from "../options.ts";
import { warn } from "../severity.ts";

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
