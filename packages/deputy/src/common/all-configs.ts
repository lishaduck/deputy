import type { Linter } from "eslint";

import { configs } from "../configs/index.ts";
import type { DeputyConfigOptions } from "../options.ts";
import { restrictedSyntax } from "./restricted.ts";

/** @internal */
export const emptyConfig: DeputyConfigOptions = {
  allowDefaultProject: [],
  environment: {},
  extensions: {
    ecma: [],

    js: [],
    ts: [],

    dts: [],
  },
  fileGlobs: {
    ecma: "",

    js: "",
    ts: "",

    dts: "",

    configs: "",
  },
  internalPattern: undefined,
  rootDir: undefined,
  ruleConfigurations: {
    deprecations: undefined,
    restricted: {
      globals: [],
      properties: [],
      syntax: restrictedSyntax,
    },
  },
};

/** @internal */
export const allConfigs: Linter.Config[] = configs.flatMap((config) =>
  config(emptyConfig),
);
