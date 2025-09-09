import { tsdownConfig, type UserConfig } from "@eslint-deputy/tsdown-config";

const _default: UserConfig = tsdownConfig({
  entry: ["src/index.ts", "src/use-at-your-own-risk.ts"],
  unused: false,

  copy: ["src/typegen.d.ts"],
});

export default _default;
