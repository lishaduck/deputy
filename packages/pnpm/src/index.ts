import type { Domain } from "@eslint-deputy/config";
import * as pnpmPlugin from "eslint-plugin-pnpm";

export const pnpm: Domain = {
  config: () => [...pnpmPlugin.configs.json, ...pnpmPlugin.configs.yaml],
};
