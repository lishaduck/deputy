import type { ESLint, Linter } from "eslint";

interface Plugin extends ESLint.Plugin {
  configs: {
    "flat/recommended": Linter.Config;
  };
}

declare const Plugin: Plugin;

export = Plugin;
