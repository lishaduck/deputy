declare module "eslint-plugin-no-use-extend-native" {
  import type { Linter } from "eslint";

  namespace Plugin {
    export const configs: {
      recommended: Linter.Config;
    };
  }

  export = Plugin;
}
