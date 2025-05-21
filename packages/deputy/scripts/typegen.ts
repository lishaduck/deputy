#!/usr/bin/env node
import { builtinRules } from "eslint/use-at-your-own-risk";

import { allConfigs } from "@eslint-deputy/config/use-at-your-own-risk";
import { generate } from "@eslint-deputy/typegen";

await generate(
  {
    plugins: {
      // Core rules, needed until a resolution to eslint/eslint#19721 &/ eslint/eslint#19750 is found.
      "": {
        rules: Object.fromEntries(
          // eslint-disable-next-line @typescript-eslint/no-deprecated -- TODO: migrate ignore to ruleConfigurations once typescript-eslint/typescript-eslint#10660 is resolved.
          builtinRules.entries(),
        ),
      },
    },
  },
  ...allConfigs,
);
