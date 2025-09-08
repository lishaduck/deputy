import type { UserConfig } from "tsdown";

const defaultConfig = {
  attw: {
    profile: "esmOnly",
  },
  dts: true,
  failOnWarn: true,
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
export function tsdownConfig(userConfig?: UserConfig): UserConfig {
  if (Array.isArray(userConfig)) {
    return userConfig.map((config) => ({
      ...defaultConfig,
      ...config,
    }));
  }

  return {
    ...defaultConfig,
    ...userConfig,
  };
}

export type { UserConfig } from "tsdown";
