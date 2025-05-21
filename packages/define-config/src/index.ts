import {
  defineConfig as eslintDefineConfig,
  type ExtendsElement,
} from "@eslint/config-helpers";
import type { Linter } from "eslint";

export interface RulesRecord extends Linter.RulesRecord {}

export type TypedRules = Partial<RulesRecord>;
export type TypedConfig = Linter.Config<RulesRecord>;

export interface ConfigWithExtends extends TypedConfig {
  extends?: ExtendsElement[];
}

export type InfiniteArray<T> = InfiniteArray<T>[] | T;

export type ConfigWithExtendsArray = InfiniteArray<ConfigWithExtends>;

export const defineConfig = (
  ...configs: ConfigWithExtendsArray[]
): TypedConfig[] => eslintDefineConfig(...configs);
