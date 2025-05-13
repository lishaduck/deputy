#!/usr/bin/env node
import { generate } from "@eslint-deputy/typegen";
import { allConfigs } from "../src/configs/index.ts";
import { builtinRules } from "eslint/use-at-your-own-risk";

await generate(
  {
    plugins: {
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
