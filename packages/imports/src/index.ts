import type { ESLint } from "eslint";
import { createNodeResolver, importX } from "eslint-plugin-import-x";

import { type Domain, error, off, warn } from "@eslint-deputy/config";

import type {} from "./typegen.d.ts";

export const imports: Domain = {
  config: (options) => [
    {
      name: "deputy-imports/core",
      files: [options.fileGlobs.ecma],
      plugins: { "import-x": importX as unknown as ESLint.Plugin },

      settings: {
        "import-x/internal-regex": options.internalPattern,
        "import-x/resolver-next": [
          createNodeResolver({
            extensions: [...options.extensions.ecma, ".json", ".node"],
          }),
        ],
      },

      rules: {
        "import-x/export": error,
        "import-x/extensions": [
          options.skipHeavyRules ? off : error,
          "always",
          { fix: true, ignorePackages: true, checkTypeImports: true },
        ],

        "import-x/no-absolute-path": error,
        "import-x/no-cycle": !options.skipHeavyRules ? off : error,
        "import-x/no-default-export": error,
        "import-x/no-named-as-default": options.skipHeavyRules ? off : error,
        // "import-x/no-relative-parent-imports": error, // import-js/eslint-plugin-import#2467
        "import-x/no-useless-path-segments": error,

        "import-x/first": warn,
        "import-x/no-anonymous-default-export": warn,
        "import-x/no-duplicates": [warn, { "prefer-inline": true }],

        "import-x/no-named-default": "error",
        "import-x/no-webpack-loader-syntax": "error",
        "import-x/no-self-import": "error",
        "import-x/newline-after-import": [
          "error",
          {
            // TODO: Buggy.
            // considerComments: true,
          },
        ],
        "import-x/no-amd": "error",
        "import-x/no-empty-named-blocks": "error",
        "import-x/no-extraneous-dependencies": [
          "error",
          {
            includeTypes: true,
          },
        ],
        "import-x/no-mutable-exports": "error",

        "import-x/no-unassigned-import": [
          "error",
          {
            allow: [
              "@babel/polyfill",
              "**/register",
              "**/register.*",
              "**/register/**",
              "**/register/**.*",
              "**/*.css",
              "**/*.scss",
              "**/*.sass",
              "**/*.less",
            ],
          },
        ],
      },
    },
    {
      name: "deputy-imports/defaults",
      files: [options.fileGlobs.dts, options.fileGlobs.configs],
      rules: {
        "import-x/no-default-export": off,
      },
    },
  ],
};
