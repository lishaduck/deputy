import type { KnipConfig } from "knip";

export default {
  treatConfigHintsAsErrors: true,
  ignoreExportsUsedInFile: {
    interface: true,
    type: true,
  },
  includeEntryExports: true,
} satisfies KnipConfig;
