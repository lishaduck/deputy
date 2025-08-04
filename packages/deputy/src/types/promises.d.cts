declare module "eslint-plugin-promise" {
  import type { ESLint, Linter } from "eslint";

  interface Plugin extends ESLint.Plugin {
    configs: {
      "flat/recommended": Linter.Config;
    };
  }

  const Plugin: Plugin;

  export = Plugin;
}
