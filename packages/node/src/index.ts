import n from "eslint-plugin-n";
import security from "eslint-plugin-security";

import { type Domain, error, off } from "@eslint-deputy/config";

export const node: Domain = {
  config: (options) => [
    {
      ...n.configs["flat/recommended"],
      files: [options.fileGlobs.ambiguousModules],
    },
    {
      ...n.configs["flat/recommended-module"],
      files: [options.fileGlobs.esm],
    },
    {
      ...n.configs["flat/recommended-script"],
      files: [options.fileGlobs.cjs],
    },
    {
      name: "deputy-node/core",
      files: [
        options.fileGlobs.ambiguousModules,
        options.fileGlobs.esm,
        options.fileGlobs.cjs,
      ],

      rules: {
        "n/no-deprecated-api": off, // We use @typescript-eslint/no-deprecated instead.
        "n/no-extraneous-import": off, // Bundlers make these assumptions incorrect.
        "n/no-extraneous-require": off, // Bundlers make these assumptions incorrect.
        "n/no-missing-import": off, // TypeScript handles this.
        "n/no-missing-require": off, // TypeScript handles this.
        "n/no-process-exit": off, // We use unicorn-x/no-process-exit instead.

        "n/callback-return": error,
        "n/hashbang": [
          error,
          {
            ignoreUnpublished: true,
          },
        ],
        "n/no-mixed-requires": [
          error,
          {
            allowCall: true,
            grouping: true,
          },
        ],
        "n/no-new-require": error,
        "n/no-path-concat": error,
        "n/no-sync": error,
        "n/no-top-level-await": [error, { ignoreBin: true }],
        "n/prefer-global/buffer": [error, "never"],
        "n/prefer-global/console": [error, "always"],
        "n/prefer-global/process": [error, "never"],
        "n/prefer-global/text-decoder": [error, "always"],
        "n/prefer-global/text-encoder": [error, "always"],
        "n/prefer-global/url": [error, "always"],
        "n/prefer-global/url-search-params": [error, "always"],
        "n/prefer-promises/dns": error,
        "n/prefer-promises/fs": error,
      },
    },

    { ...security.configs.recommended, files: [options.fileGlobs.ecma] },
  ],
};
