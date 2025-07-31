import betterTailwind from "eslint-plugin-better-tailwindcss";

import { type Domain, warn } from "@eslint-deputy/config";

export const tailwind: Domain = {
  config: () => [
    {
      plugins: {
        "better-tailwind": betterTailwind,
      },
      rules: {
        "better-tailwind/enforce-consistent-important-position": warn,
        "better-tailwind/enforce-consistent-variable-syntax": warn,
        "better-tailwind/enforce-shorthand-classes": warn,
        "better-tailwind/no-conflicting-classes": warn,
        "better-tailwind/no-deprecated-classes": warn,
        "better-tailwind/no-duplicate-classes": warn,
        "better-tailwind/no-unregistered-classes": warn,
      },
    },
  ],
};
