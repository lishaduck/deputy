// regru/eslint-plugin-prefer-early-return#5
import type { ESLint } from "eslint";

interface Plugin extends ESLint.Plugin {}

declare const Plugin: Plugin;

export = Plugin;
