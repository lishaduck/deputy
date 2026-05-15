import type { Linter } from "eslint/universal";
import noUseExtendNative from "eslint-plugin-no-use-extend-native";

import { defineConfig } from "@eslint-deputy/define-config";

import type { DeputyConfigOptions } from "../options.ts";

export const nativeExtensions = ({
  fileGlobs,
}: DeputyConfigOptions): Linter.Config[] =>
  defineConfig({
    name: "deputy/native-extensions",
    files: [fileGlobs.ecma],
    ...noUseExtendNative.configs.recommended,
  });
