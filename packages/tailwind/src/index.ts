import betterTailwind from "eslint-plugin-better-tailwindcss";

import type { Domain } from "@eslint-deputy/config";

export const tailwind: Domain = {
  config: () => [
    {
      plugins: {
        "better-tailwind": betterTailwind,
      },
      rules: {
        "better-tailwind/enforce-consistent-variable-syntax": "warn",
        "better-tailwind/no-conflicting-classes": "warn",
        "better-tailwind/no-unregistered-classes": "warn",
      },
    },
  ],
};
