declare module "eslint-plugin-promise" {
  import type { Linter } from "eslint";

  namespace Plugin {
    export const configs: {
      "flat/recommended": Linter.Config;
    };
  }

  export = Plugin;
}
