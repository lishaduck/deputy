import htmlEslint from "@html-eslint/eslint-plugin";
import type { ESLint, Linter } from "eslint";

import type { Domain } from "@eslint-deputy/config";
import type { RulesRecord } from "@eslint-deputy/define-config";

const htmlPlugin = htmlEslint as ESLint.Plugin & {
  configs: {
    "flat/recommended": Linter.Config<RulesRecord> & {
      rules: Partial<RulesRecord>;
    };
  };
};

export const html: Domain = {
  config: (options) => [
    {
      plugins: {
        html: htmlPlugin,
      },
    },
    {
      files: ["**/*.html"],
      language: "html/html",
      rules: htmlPlugin.configs["flat/recommended"].rules,
    },
    {
      files: [options.fileGlobs.ecma],
      rules: htmlPlugin.configs["flat/recommended"].rules,
    },
  ],
};
