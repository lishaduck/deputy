import type { Linter } from "eslint";

import { defineConfig } from "@eslint-deputy/define-config";

export const linterConfig = (): Linter.Config[] =>
  defineConfig({
    linterOptions: {
      reportUnusedDisableDirectives: true,
      reportUnusedInlineConfigs: "warn",
    },
  });
