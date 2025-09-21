import type { KnipConfig } from "knip";

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
      ignoreDependencies: ["eslint!"],
      project: ["src/**/*.ts!", "!scripts/*.ts!"],
    },
    "packages/svelte": {
      ignoreDependencies: ["svelte-eslint-parser!"],
      project: ["src/**/*.ts!", "!scripts/*.ts!"],
    },

    "packages/tsconfig": {
      project: ["base.json"],
    },

    // Revert `@types/*` packages' project glob.
    "packages/types__*": {
      ignoreDependencies: ["eslint!"],
    },
  },

  ignoreDependencies: [
    // For module augmentations.
    "@eslint-deputy/define-config",
  ],
} satisfies KnipConfig;
