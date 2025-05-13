declare module "@regru/eslint-plugin-prefer-early-return" {
  import type { ESLint } from "eslint";

  namespace Plugin {
    export const rules: NonNullable<ESLint.Plugin["rules"]>;
  }

  export = Plugin;
}
