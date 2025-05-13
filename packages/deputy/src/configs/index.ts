import type { Linter } from "eslint";
import { eslintComments } from "./eslint-comments.ts";
import { javascript } from "./javascript.ts";
import { typescript } from "./typescript.ts";
import { earlyReturn } from "./early-return.ts";
import { packageJson } from "./package-json.ts";
import { deMorganLaws } from "./de-morgan-laws.ts";
import { promises } from "./promises.ts";
import { ecmascript } from "./ecmascript.ts";
import { unicorn } from "./unicorn.ts";
import { restricted } from "./restricted.ts";
import type { Domain } from "../options.ts";
import { ignores } from "./ignores.ts";

export const configs: NonNullable<Domain["config"]>[] = [
  ignores,

  ecmascript,
  javascript,
  typescript,

  eslintComments,
  earlyReturn,
  deMorganLaws,
  promises,
  restricted,
  unicorn,

  packageJson,
];

export const allConfigs: Linter.Config[] = configs.flatMap((config) =>
  config({
    allowDefaultProject: [],
    environment: {},
    fileGlobs: {
      ecma: "",
      js: "",
      ts: "",
      dts: "",
    },
    rootDir: undefined,
    ruleConfigurations: {
      deprecations: undefined,
      restricted: {
        globals: [],
        properties: [],
        syntax: [],
      },
    },
  }),
);
