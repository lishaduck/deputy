declare module "eslint-plugin-no-use-extend-native" {
  import type { ESLint, Linter } from "eslint";

  interface Plugin extends ESLint.Plugin {
    configs: {
      recommended: Linter.Config;
    };
  }

  const Plugin: Plugin;

  export = Plugin;
}
