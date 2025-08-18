import type { KnipConfig } from "knip";

export default {
  ignoreExportsUsedInFile: {
    type: true,
    interface: true,
  },
  includeEntryExports: true,
  treatConfigHintsAsErrors: true,

  workspaces: {
    ".": {
      entry: ["node-modules-inspector.config.ts"],
    },

    // Ignore `@types/*` packages.
    "packages/types___eslint-community__eslint-plugin-eslint-comments": {
      includeEntryExports: false,
    },
    "packages/types___regru__eslint-plugin-prefer-early-return": {
      includeEntryExports: false,
    },
    "packages/types__eslint-plugin-no-use-extend-native": {
      includeEntryExports: false,
    },
    "packages/types__eslint-plugin-promise": {
      includeEntryExports: false,
    },
  },

  ignoreDependencies: [
    // For module augmentations.
    "@eslint-deputy/define-config",
  ],
} satisfies KnipConfig;
