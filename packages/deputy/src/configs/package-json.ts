import type { Linter } from "eslint/universal";
import * as depend from "eslint-plugin-depend";
import pkgJson from "eslint-plugin-package-json";

import { defineConfig } from "@eslint-deputy/define-config";

import type { DeputyConfigOptions } from "../options.ts";
import { error } from "../severity.ts";

const GLOB_PACKAGE_JSON = "**/package.json";

export const packageJson = ({
  environment,
}: DeputyConfigOptions): Linter.Config[] =>
  defineConfig(
    pkgJson.configs.recommended,
    {
      name: "deputy/package-json/handpicked",
      files: [GLOB_PACKAGE_JSON],
      plugins: { depend },
      settings: {
        packageJson: {
          enforceForPrivate: true,
        },
      },

      rules: {
        // TODO: Move to `no-restricted-dependencies` once JoshuaKGoldberg/eslint-plugin-package-json#54 is resolved.
        "depend/ban-dependencies": error,
        "package-json/no-redundant-files": error,
        // "package-json/require-bugs": error,
        // "package-json/require-devEngines": error,
        // "package-json/require-homepage": error,
        // "package-json/require-license": error,
        // "package-json/require-repository": error,
        // "package-json/require-sideEffects": error,
      },
    },
    environment.type === "library" ?
      {
        name: "deputy/package-json/lib",
        files: [GLOB_PACKAGE_JSON],
        rules: {
          "package-json/require-author": error,
          "package-json/require-engines": error,
          "package-json/require-files": error,
          "package-json/require-keywords": error,
        },
      }
    : {
        name: "deputy/package-json/app",
        files: [GLOB_PACKAGE_JSON],
        rules: {
          // "package-json/require-private": error,
        },
      },
  );
