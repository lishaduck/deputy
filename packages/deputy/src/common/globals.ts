import type { Linter } from "eslint";
import globals from "globals";

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
