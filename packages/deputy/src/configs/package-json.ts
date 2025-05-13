import type { Linter } from "eslint";
import pkgJson from "eslint-plugin-package-json";
import { error } from "../severity.ts";
import { defineConfig } from "eslint/config";

export const packageJson = (): Linter.Config[] =>
  defineConfig(pkgJson.configs.recommended, {
    name: "deputy/package-json/handpicked",
    files: ["**/package.json"],
    rules: {
      "package-json/no-redundant-files": error,
      "package-json/require-author": error,
      "package-json/require-engines": error,
      "package-json/require-files": error,
      "package-json/require-keywords": error,
    },
  });
