import type { UserConfig } from "tsdown";

const defaultConfig = {
  attw: {
    profile: "esm-only",
  },
  dts: true,
  failOnWarn: true,
  fixedExtension: false,
  publint: true,
  unused: {
    depKinds: ["dependencies"],
    ignore: ["@eslint-deputy/define-config", "@types/node"],
  },
} satisfies UserConfig;

/**
 * Create a complete, correct tsdown configuration.
 *
 * @param userConfig - Custom tsdown configuration.
 * @returns Complete tsdown configuration.
 *
 * @example
 * ```ts
 * export default tsdownConfig();
 * ```
 */
export function tsdownConfig(
  userConfig?: UserConfig | UserConfig[],
): UserConfig | UserConfig[] {
  if (Array.isArray(userConfig)) {
    return userConfig.map(
      (config) =>
        ({
          ...defaultConfig,
          ...config,
        }) satisfies UserConfig,
    );
  }

  return {
    ...defaultConfig,
    ...userConfig,
  };
}

export type { UserConfigExport } from "tsdown";
