import type { ESLint } from "eslint";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import { importX } from "eslint-plugin-import-x";

import { type Domain, error, off, warn } from "@eslint-deputy/config";

export const imports: Domain = {
  config: (options) => [
    {
      name: "deputy-imports/core",
      files: [options.fileGlobs.ecma],
      plugins: { "import-x": importX as unknown as ESLint.Plugin },

      settings: {
        "import-x/internal-regex": options.internalPattern,
        "import-x/resolver-next": [
          createTypeScriptImportResolver({
            alwaysTryTypes: true,
            extensions: [...options.extensions.ecma, ".json", ".node"],
          }),
        ],
      },

      rules: {
        "import-x/export": error,
        "import-x/extensions": [
          options.skipHeavyRules ? off : error,
          "always",
          { checkTypeImports: true, fix: true, ignorePackages: true },
        ],

        "import-x/no-absolute-path": error,
        "import-x/no-cycle": options.skipHeavyRules ? off : error,
        "import-x/no-default-export": error,
        "import-x/no-named-as-default": options.skipHeavyRules ? off : error,
        // "import-x/no-relative-parent-imports": error, // import-js/eslint-plugin-import#2467
        "import-x/first": warn,
        "import-x/newline-after-import": [
          "error",
          {
            // TODO: Buggy.
            // considerComments: true,
          },
        ],
        "import-x/no-amd": "error",
        "import-x/no-anonymous-default-export": warn,
        "import-x/no-duplicates": [warn, { "prefer-inline": true }],
        "import-x/no-extraneous-dependencies": [
          "error",
          {
            includeTypes: true,
            packageDir: options.rootDir ?? [],
          },
        ],
        "import-x/no-mutable-exports": "error",
        "import-x/no-named-default": "error",
        "import-x/no-self-import": "error",
        "import-x/no-useless-path-segments": error,
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
