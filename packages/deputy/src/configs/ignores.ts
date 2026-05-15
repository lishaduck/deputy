import type { Linter } from "eslint/universal";
import gitignore from "eslint-config-flat-gitignore";

export const ignores = (): Linter.Config => gitignore();
