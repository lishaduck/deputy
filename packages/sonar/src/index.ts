import sonarjs from "eslint-plugin-sonarjs";

import { type Domain, error, off } from "@eslint-deputy/config";

import type {} from "./typegen.d.ts";

export const sonar: Domain = {
  config: (options) => [
    { ...sonarjs.configs.recommended, name: "deputy-sonar/reccomended" },
    {
      name: "deputy-sonar/handpicked",
      rules: {
        "sonarjs/no-commented-code": options.skipHeavyRules ? off : error,

        "sonarjs/no-redundant-optional": off, // Cater toward `exactOptionalPropertyTypes`.
        "sonarjs/todo-tag": off, // I’d prefer a slightly different approach. // TODO: Implement
        "sonarjs/updated-loop-counter": off, // Deprecated.

        // We use the @typescript-eslint versions.
        "sonarjs/class-name": off,
        "sonarjs/cognitive-complexity": off,
        "sonarjs/deprecation": off,
        "sonarjs/function-return-type": off,
        "sonarjs/no-invalid-await": off,
        "sonarjs/unused-import": off,
      },
    },
  ],
};
