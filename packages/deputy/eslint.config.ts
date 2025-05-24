import type { FlatConfigComposer } from "eslint-flat-config-utils";

import { config } from "@eslint-deputy/internal-config";

const _default: FlatConfigComposer = config({
  type: "library",
  rootDir: import.meta.dirname,
});

export default _default;
