import type { Linter } from "eslint";
import gitignore from "eslint-config-flat-gitignore";

export const ignores = (): Linter.Config => gitignore();
