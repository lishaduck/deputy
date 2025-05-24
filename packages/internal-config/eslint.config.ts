import { config, type FlatConfigComposer } from "./src/index.ts";

const _default: FlatConfigComposer = config({
  type: "internal",
  rootDir: import.meta.dirname,
});

export default _default;
