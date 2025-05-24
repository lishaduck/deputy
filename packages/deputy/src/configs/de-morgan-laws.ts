import type { Linter } from "eslint/universal";
import deMorgan from "eslint-plugin-de-morgan";

import { defineConfig } from "@eslint-deputy/define-config";

import type { DeputyConfigOptions } from "../options.ts";

export const deMorganLaws = ({
  fileGlobs,
}: DeputyConfigOptions): Linter.Config[] =>
  defineConfig({
    ...deMorgan.configs.recommended,
    name: "deputy/de-morgan-laws",
    files: [fileGlobs.ecma],
  });
