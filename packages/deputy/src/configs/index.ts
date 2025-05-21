import type { Domain } from "../options.ts";
import { deMorganLaws } from "./de-morgan-laws.ts";
import { documentation } from "./documentation.ts";
import { earlyReturn } from "./early-return.ts";
import { ecmascript } from "./ecmascript.ts";
import { eslintComments } from "./eslint-comments.ts";
import { ignores } from "./ignores.ts";
import { javascript } from "./javascript.ts";
import { linterConfig } from "./linter-config.ts";
import { nativeExtensions } from "./native-extensions.ts";
import { packageJson } from "./package-json.ts";
import { promises } from "./promises.ts";
import { regex } from "./regex.ts";
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
  nativeExtensions,
  promises,
  regex,
  restricted,
  sorting,
  unicorn,

  packageJson,
];
