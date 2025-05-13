import type { Domain } from "@eslint-deputy/config";
import n from "eslint-plugin-n";

export const node: Domain = {
  preset: () => ({
    environment: {
      globals: ["es2021", "node"],
    },
  }),
  config: () => [...n.configs["flat/mixed-esm-and-cjs"]],
};
