import type { Linter } from "eslint/universal";
import createNoRestrictedGlobals from "eslint-no-restricted/globals";
import createNoRestrictedProperties from "eslint-no-restricted/properties";
import createNoRestrictedSyntax from "eslint-no-restricted/syntax";

import { defineConfig } from "@eslint-deputy/define-config";

import type { DeputyConfigOptions } from "../options.ts";

export const restricted = ({
  ruleConfigurations: { restricted: restrictedConfig },
}: DeputyConfigOptions): Linter.Config[] => {
  const noRestrictedGlobals = createNoRestrictedGlobals(
    "no-restricted-globals",
    ...restrictedConfig.globals,
  );
  const noRestrictedProperties = createNoRestrictedProperties(
    "no-restricted-properties",
    ...restrictedConfig.properties,
  );
  const noRestrictedSyntax = createNoRestrictedSyntax(
    "no-restricted-syntax",
    ...restrictedConfig.syntax,
  );

  return defineConfig(
    noRestrictedGlobals.configs.recommended as Linter.Config,
    noRestrictedProperties.configs.recommended as Linter.Config,
    noRestrictedSyntax.configs.recommended as Linter.Config,
  );
};
