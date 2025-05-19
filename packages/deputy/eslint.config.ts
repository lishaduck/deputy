import { globalIgnores } from "eslint/config";
import type { FlatConfigComposer } from "eslint-flat-config-utils";

import { node } from "@eslint-deputy/node";
import { pnpm } from "@eslint-deputy/pnpm";
import { sonar } from "@eslint-deputy/sonar";

import { deputy } from "./src/index.ts";

const _default: FlatConfigComposer = deputy({
  domains: [node, pnpm, sonar],
  rootDir: import.meta.dirname,
}).append(globalIgnores(["./src/typegen.d.ts"]));

export default _default;
