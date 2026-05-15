import type { Linter } from "eslint/universal";

import { defineConfig } from "@eslint-deputy/define-config";

export const linterConfig = (): Linter.Config[] =>
  defineConfig({
    name: "deputy/unused-directives",
    linterOptions: {
      reportUnusedDisableDirectives: true,
      reportUnusedInlineConfigs: "warn",
    },
  });
