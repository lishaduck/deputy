import { tsdownConfig, type UserConfig } from "@eslint-deputy/tsdown-config";

const _default: UserConfig = tsdownConfig({
  entry: ["src/index.ts", "src/use-at-your-own-risk.ts"],
  unused: false,
});

export default _default;
