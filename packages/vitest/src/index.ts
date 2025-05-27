import test from "@vitest/eslint-plugin";

import type { Domain } from "@eslint-deputy/config";

export const vitest: Domain = {
  config: () => [test.configs.recommended],
};
