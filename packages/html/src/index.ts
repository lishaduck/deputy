import type { Domain } from "@eslint-deputy/config";
import htmlEslint from "@html-eslint/eslint-plugin";
import type { ESLint } from "eslint";

export const html: Domain = {
  config: (options) => [
    {
      plugins: {
        html: htmlEslint as unknown as ESLint.Plugin,
      },
    },
    {
      files: ["**/*.html"],
      language: "html/html",
      rules: htmlEslint.configs["flat/recommended"].rules,
    },
    {
      files: [options.fileGlobs.ecma],
      rules: htmlEslint.configs["flat/recommended"].rules,
    },
  ],
};
