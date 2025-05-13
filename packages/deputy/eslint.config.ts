import { globalIgnores } from "eslint/config";
import type { FlatConfigComposer } from "eslint-flat-config-utils";
import { deputy } from "./src/index.ts";
import { node } from "@eslint-deputy/node";
import { pnpm } from "@eslint-deputy/pnpm";
import { sonar } from "@eslint-deputy/sonar";

const _default: FlatConfigComposer = deputy({
  domains: [node, pnpm, sonar],
  rootDir: import.meta.dirname,
}).append(globalIgnores(["./src/typegen.d.ts"]));

export default _default;
