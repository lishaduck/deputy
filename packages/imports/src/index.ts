import { error, off, warn, type Domain } from "@eslint-deputy/config";
import importX from "eslint-plugin-import-x";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import { type ESLint } from "eslint";
import type {} from "./typegen.d.ts";

export const imports: Domain = {
  config: (options) => [
    {
      name: "deputy-imports/core",
      files: [options.fileGlobs.ecma],
      plugins: { "import-x": importX as unknown as ESLint.Plugin },

      settings: {
        "import-x/extensions": options.extensions.ecma,
        "import-x/external-module-folders": [
          "node_modules",
          "node_modules/@types",
        ],
        "import-x/internal-regex": options.internalPattern,
        "import-x/resolver-next": [
          importX.createNodeResolver(),
          createTypeScriptImportResolver(),
        ],
      },

      rules: {
        "import-x/export": error,
        "import-x/no-absolute-path": error,
        "import-x/no-cycle": error,
        "import-x/no-default-export": error,
        // "import-x/no-relative-parent-imports": error, // import-js/eslint-plugin-import#2467
        "import-x/no-useless-path-segments": [error],

        "import-x/no-duplicates": [warn, { "prefer-inline": true }],
        "import-x/no-named-as-default": warn,
        "import-x/first": warn,
        "import-x/no-anonymous-default-export": warn,
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
