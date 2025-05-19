import fs from "node:fs/promises";

import { flatConfigsToRulesDTS } from "eslint-typegen/core";
import { concat, type Awaitable } from "eslint-flat-config-utils";
import type { Linter } from "eslint";

export async function generate(
  ...configs: Awaitable<Linter.Config | Linter.Config[]>[]
): Promise<void> {
  const config = await concat(...configs);

  let dts = await flatConfigsToRulesDTS(config, {
    includeAugmentation: true,
  });

  dts += `
declare module "@eslint-deputy/define-config" {
  interface RulesRecord extends RuleOptions {}
}
`;

  dts = dts.replaceAll("\ntype", "\n/** @internal */\nexport type");

  await fs.writeFile("src/typegen.d.ts", dts);
}
