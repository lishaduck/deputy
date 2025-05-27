import type { ESLint } from "eslint";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
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
          createTypeScriptImportResolver({
            extensions: [...options.extensions.ecma],
          }),
          createNodeResolver({ extensions: [...options.extensions.ecma] }),
        ],
      },

      rules: {
        "import-x/export": error,
        "import-x/no-absolute-path": error,
        "import-x/no-cycle": options.skipHeavyRules ? off : error,
        "import-x/no-default-export": error,
        // "import-x/no-relative-parent-imports": error, // import-js/eslint-plugin-import#2467
        "import-x/no-useless-path-segments": [error],

        "import-x/first": warn,
        "import-x/no-anonymous-default-export": warn,
        "import-x/no-duplicates": [warn, { "prefer-inline": true }],
        "import-x/no-named-as-default": warn,
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
