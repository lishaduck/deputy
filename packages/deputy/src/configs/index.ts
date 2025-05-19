import type { Linter } from "eslint";

import { restrictedSyntax } from "../common/restricted.ts";
import type { Domain } from "../options.ts";
import { deMorganLaws } from "./de-morgan-laws.ts";
import { documentation } from "./documentation.ts";
import { earlyReturn } from "./early-return.ts";
import { ecmascript } from "./ecmascript.ts";
import { eslintComments } from "./eslint-comments.ts";
import { ignores } from "./ignores.ts";
import { javascript } from "./javascript.ts";
import { linterConfig } from "./linter-config.ts";
import { packageJson } from "./package-json.ts";
import { promises } from "./promises.ts";
import { restricted } from "./restricted.ts";
import { sorting } from "./sorting.ts";
import { typescript } from "./typescript.ts";
import { unicorn } from "./unicorn.ts";

export const configs: NonNullable<Domain["config"]>[] = [
  ignores,
  linterConfig,

  ecmascript,
  javascript,
  typescript,

  deMorganLaws,
  documentation,
  earlyReturn,
  eslintComments,
  promises,
  restricted,
  sorting,
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
        syntax: restrictedSyntax,
      },
    },
  }),
);
