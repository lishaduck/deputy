import type { Linter } from "eslint/universal";
import globals from "globals";

/**
 * Merge an array of globals into a single globals object.
 *
 * @param environmentGlobals - A list of globals. If a string, will be a set from `npm:globals`.
 * @returns A merged object of globals.
 *
 * @example
 * ```ts
 * console.log(getGlobals(["node"])
 * ```
 */
export function getGlobals(
  environmentGlobals: (keyof typeof globals | Linter.Globals)[],
): Linter.Globals {
  let allGlobals: Linter.Globals = {};

  for (const globalish of environmentGlobals) {
    const globalSet =
      typeof globalish === "string" ? globals[globalish] : globalish;

    allGlobals = {
      ...allGlobals,
      ...globalSet,
    };
  }

  return allGlobals;
}
