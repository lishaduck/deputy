import * as tsParser from "@typescript-eslint/parser";
import sv from "eslint-plugin-svelte";
import type { SvelteConfig } from "svelte-eslint-parser";

import { type Domain, error, off, warn } from "@eslint-deputy/config";

const SVELTE_GLOB = "**/*.svelte{,.js,.ts}";

export const svelte = (svelteConfig: SvelteConfig): Domain => ({
  additionalExtensions: [
    {
      extension: ".svelte",
      executable: true,
      moduleSystem: "ambiguous",
      types: true,
    },
  ],
  config: () => [
    ...sv.configs.recommended,

    {
      files: [SVELTE_GLOB],
      languageOptions: {
        parserOptions: {
          parser: tsParser,
          svelteConfig,
        },
      },
    },

    {
      name: "deputy-svelte/handpicked",
      files: [SVELTE_GLOB],

      rules: {
        // Rules that don't work well with Svelte.
        "@typescript-eslint/no-confusing-void-expression": off,
        "@typescript-eslint/no-unsafe-argument": off,
        "@typescript-eslint/no-unsafe-assignment": off,
        "@typescript-eslint/no-unsafe-call": off,
        "sonarjs/no-use-of-empty-return-value": off,
        "storybook/default-exports": off,

        // Best Practices
        "prefer-const": off,
        "svelte/block-lang": [warn, { script: "ts" }],
        "svelte/button-has-type": warn,
        "svelte/no-add-event-listener": error,
        "svelte/no-inline-styles": warn,
        "svelte/no-top-level-browser-globals": error,
        "svelte/prefer-const": warn,
        "svelte/require-event-prefix": warn,
        "svelte/require-optimized-style-attribute": warn,

        // Stylistic Issues
        "svelte/consistent-selector-style": [
          warn,
          { style: ["type", "class"] },
        ],
        "svelte/derived-has-same-inputs-outputs": warn,
        "svelte/html-self-closing": warn,
        "svelte/prefer-class-directive": warn,
        "svelte/prefer-style-directive": warn,
        "svelte/shorthand-attribute": warn,
        "svelte/shorthand-directive": warn,
        "svelte/sort-attributes": warn,
        "svelte/spaced-html-comment": warn,
      },
    },
  ],
});
