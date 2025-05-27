import createCommands from "eslint-plugin-command/config";

import type { Domain } from "@eslint-deputy/config";

export const command: Domain = {
  // TODO: Allow specifying custom commands.
  config: () => [createCommands()],
};
