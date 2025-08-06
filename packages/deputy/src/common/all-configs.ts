import type { Linter } from "eslint/universal";

import { packageConfigs } from "../configs/index.ts";
import type { DeputyConfigOptions } from "../options.ts";
import * as restricted from "./restricted.ts";

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
  extraTsExtensions: [],
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
  internalPattern: undefined,
  rootDir: undefined,
  ruleConfigurations: {
    deprecations: undefined,
    restricted,
  },
  skipHeavyRules: false,
};

/** @internal */
export const allConfigs: Linter.Config[] = packageConfigs.flatMap((config) =>
  config(emptyConfig),
);
