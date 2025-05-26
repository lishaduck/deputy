import * as pnpmPlugin from "eslint-plugin-pnpm";

import { type Domain, off } from "@eslint-deputy/config";

export const pnpm: Domain = {
  config: () => [
    ...pnpmPlugin.configs.json,
    ...pnpmPlugin.configs.yaml,
    {
      name: "deputy-pnpm/yaml/handpicked",
      files: ["pnpm-workspace.yaml"],
      rules: {
        "pnpm/yaml-no-duplicate-catalog-item": off, // This a completely valid pattern.
      },
    },
  ],
};
