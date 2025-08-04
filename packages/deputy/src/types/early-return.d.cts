// regru/eslint-plugin-prefer-early-return#5
declare module "@regru/eslint-plugin-prefer-early-return" {
  import type { ESLint } from "eslint";

  interface Plugin extends ESLint.Plugin {}

  const Plugin: Plugin;

  export = Plugin;
}
