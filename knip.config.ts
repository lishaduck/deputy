import type { KnipConfig } from "knip";

export default {
  ignoreExportsUsedInFile: {
    type: true,
    interface: true,
  },
  includeEntryExports: true,
  treatConfigHintsAsErrors: true,
} satisfies KnipConfig;
