import n from "eslint-plugin-n";
import security from "eslint-plugin-security";

import type { Domain } from "@eslint-deputy/config";

export const node: Domain = {
  config: () => [
    ...n.configs["flat/mixed-esm-and-cjs"],
    security.configs.recommended,
  ],
  preset: () => ({
    environment: {
      globals: ["es2021", "node"],
    },
  }),
};
