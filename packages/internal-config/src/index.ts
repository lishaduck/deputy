import ci from "ci-info";
import { globalIgnores } from "eslint/config";
import type { FlatConfigComposer } from "eslint-flat-config-utils";

import { deputy, type PackageType } from "@eslint-deputy/config";
import { imports } from "@eslint-deputy/imports";
import { node } from "@eslint-deputy/node";
import { pnpm } from "@eslint-deputy/pnpm";
import { sonar } from "@eslint-deputy/sonar";

export interface ConfigOptions {
  type: PackageType;
  allowDefaultProject?: string[];
  rootDir: string;
}

export const config = ({
  type,
  allowDefaultProject = [],
  rootDir,
  // eslint-disable-next-line @typescript-eslint/promise-function-async -- returns a Composer.
}: ConfigOptions): FlatConfigComposer =>
  deputy({
    allowDefaultProject,
    domains: [node, pnpm, sonar, imports],
    environment: { type },
    internalPattern: "^@eslint-deputy/",
    rootDir,
    skipHeavyRules: !ci.isCI,
  }).append(
    globalIgnores(["**/typegen.d.ts"], "Nobody ever did care 'bout typegen"),
  );

export type { FlatConfigComposer } from "eslint-flat-config-utils";
