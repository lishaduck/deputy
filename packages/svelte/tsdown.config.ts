import { tsdownConfig, type UserConfig } from "@eslint-deputy/tsdown-config";

const _default: UserConfig = tsdownConfig({
  copy: ["src/typegen.d.ts"],
});

export default _default;
