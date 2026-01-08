import {
  tsdownConfig,
  type UserConfigExport,
} from "@eslint-deputy/tsdown-config";

const _default: UserConfigExport = tsdownConfig({
  copy: ["src/typegen.d.ts"],
});

export default _default;
