import { off, type Domain } from "@eslint-deputy/config";
import sonarjs from "eslint-plugin-sonarjs";
import type {} from "./typegen.d.ts";

export const sonar: Domain = {
  config: () => [
    { ...sonarjs.configs["recommended"], name: "deputy-sonar/sonar" },
    {
      name: "deputy-sonar/sonar/handpicked",
      rules: {
        "sonarjs/no-redundant-optional": off, // Cater toward `exactOptionalPropertyTypes`.
        "sonarjs/todo-tag": off, // I’d prefer a slightly different approach. // TODO: Implement

        // We use the @typescript-eslint versions.
        "sonarjs/deprecation": off,
        "sonarjs/function-return-type": off,
        "sonarjs/class-name": off,
        "sonarjs/unused-import": off,
      },
    },
  ],
};
