#!/usr/bin/env node
import { builtinRules } from "eslint/use-at-your-own-risk";

import { allConfigs } from "@eslint-deputy/config/use-at-your-own-risk";
import { generate } from "@eslint-deputy/typegen";

await generate(
  {
    plugins: {
      // Core rules, needed until a resolution to eslint/eslint#19721 is found.
      "": {
        rules: Object.fromEntries(builtinRules.entries()),
      },
    },
  },
  ...allConfigs,
);
