declare module "eslint-plugin-promise" {
  import type { Linter } from "eslint/universal";

  namespace Plugin {
    export const configs: {
      "flat/recommended": Linter.Config;
    };
  }

  export = Plugin;
}
