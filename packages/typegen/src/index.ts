import fs from "node:fs/promises";

import type { Linter } from "eslint/universal";
import { type Awaitable, concat } from "eslint-flat-config-utils";
import { flatConfigsToRulesDTS } from "eslint-typegen/core";

/**
 * Generate a `.d.ts` file to add type-safety to ESLint configs.
 *
 * @param configs - ESLint configurations to extract plugins from.
 * @example
 * ```ts
 * generate({ plugins: {  } })
 * ```
 */
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
