import test from "@vitest/eslint-plugin";
import type { Linter } from "eslint";

import type { Domain } from "@eslint-deputy/config";

export const vitest: Domain = {
  config: () => [test.configs.recommended as unknown as Linter.Config],
};
