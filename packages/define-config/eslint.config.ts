import {
  config,
  type FlatConfigComposer,
} from "@eslint-deputy/internal-config";

const _default: FlatConfigComposer = config({
  type: "internal",
  rootDir: import.meta.dirname,
});

export default _default;
