import turborepo from "eslint-plugin-turbo";

import type { Domain } from "@eslint-deputy/config";

export const turbo: Domain = {
  config: () => [turborepo.configs["flat/recommended"]],
};
