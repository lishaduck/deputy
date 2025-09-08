import process from "node:process";

import type { KnipConfig } from "knip";

const isProductionMode =
  process.argv.includes("--production") || process.argv.includes("--strict");

export default {
  ignoreExportsUsedInFile: {
    type: true,
    interface: true,
  },
  treatConfigHintsAsErrors: true,

  workspaces: {
    "packages/*": {
      project: ["src/**/*.ts!", "!scripts/*.ts!"],
    },

    "packages/deputy": {
      ignoreDependencies: ["@types/node"],
      project: ["src/**/*.ts!", "!scripts/*.ts!"],
    },

    "packages/define-config": {
      ignoreDependencies: isProductionMode ? ["eslint"] : [],
      project: ["src/**/*.ts!", "!scripts/*.ts!"],
    },
    "packages/svelte": {
      ignoreDependencies: isProductionMode ? ["svelte-eslint-parser"] : [],
      project: ["src/**/*.ts!", "!scripts/*.ts!"],
    },

    "packages/tsconfig": {
      project: ["base.json"],
    },

    // Revert `@types/*` packages' project glob.
    "packages/types__*": {
      ignoreDependencies: isProductionMode ? ["eslint"] : [],
    },
  },

  ignoreDependencies: [
    // For module augmentations.
    "@eslint-deputy/define-config",
  ],
} satisfies KnipConfig;
