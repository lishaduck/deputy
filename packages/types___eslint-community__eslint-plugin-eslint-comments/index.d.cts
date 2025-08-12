// eslint-community/eslint-plugin-eslint-comments#246
import type { Linter } from "eslint/universal";

declare namespace Configs {
  import defaultExports = Configs;

  export const recommended: Linter.Config;

  export { defaultExports as default };
}

export = Configs;
