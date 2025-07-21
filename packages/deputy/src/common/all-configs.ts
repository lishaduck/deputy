import type { Linter } from "eslint/universal";

import { packageConfigs } from "../configs/index.ts";
import type { DeputyConfigOptions } from "../options.ts";
import { restrictedSyntax } from "./restricted.ts";

/** @internal */
export const emptyConfig: DeputyConfigOptions = {
  allowDefaultProject: [],
  environment: {
    type: "library",
    globals: [],
  },
  extensions: {
    ecma: [],

    js: [],
    ts: [],

    ambiguousModules: [],
    cjs: [],
    esm: [],

    dts: [],
  },
  fileGlobs: {
    ecma: "",

    js: "",
    ts: "",

    ambiguousModules: "",
    cjs: "",
    esm: "",

    dts: "",

    configs: "",
  },
  extraTsExtensions: [],
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
  skipHeavyRules: false,
};

/** @internal */
export const allConfigs: Linter.Config[] = packageConfigs.flatMap((config) =>
  config(emptyConfig),
);
