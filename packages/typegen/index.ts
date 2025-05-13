import fs from "node:fs/promises";

import { flatConfigsToRulesDTS } from "eslint-typegen/core";
import { concat, type Awaitable } from "eslint-flat-config-utils";
import type { Linter } from "eslint";

export async function generate(
  ...configs: Awaitable<Linter.Config | Linter.Config[]>[]
): Promise<void> {
  const config = await concat(...configs);

  const configNames = config
    .map((i) => i.name)
    .filter((name) => name !== undefined);

  let dts = await flatConfigsToRulesDTS(config, {
    augmentFlatConfigUtils: true,
  });

  dts += `
// Names of all the configs
export type ConfigNames = ${configNames.map((i) => `'${i}'`).join(" | ")}
`;

  dts = dts.replaceAll("\ntype", "\n/** @internal */\nexport type");

  await fs.writeFile("src/typegen.d.ts", dts);
}
