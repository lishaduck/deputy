declare module "eslint-plugin-jsdoc" {
  import type { ESLint, Linter } from "eslint";

  type ConfigGroups =
    | "contents"
    | "logical"
    | "recommended"
    | "requirements"
    | "stylistic";

  type ConfigVariants = "-typescript-flavor" | "-typescript" | "";

  type ErrorLevelVariants = "-error" | "";

  namespace Plugin {
    const _default: ESLint.Plugin & {
      configs: Record<
        `flat/${ConfigGroups}${ConfigVariants}${ErrorLevelVariants}`,
        Linter.Config
      > &
        Record<
          | "default-expressions"
          | "examples-and-default-expressions"
          | "examples",
          Linter.Config[]
        >;
    };

    export { _default as default };
  }

  export = Plugin;
}

declare module "eslint-plugin-jsdoc/getJsdocProcessorPlugin.js" {
  import type { ESLint, Linter } from "eslint";

  namespace JsdocProcessorPlugin {
    interface JsdocProcessorOptions {
      captionRequired?: boolean;
      checkDefaults?: boolean;
      checkExamples?: boolean;
      checkParams?: boolean;
      checkProperties?: boolean;
      exampleCodeRegex?: string;
      matchingFileName?: string;
      matchingFileNameDefaults?: string;
      matchingFileNameParams?: string;
      matchingFileNameProperties?: string;
      paddedIndent?: number;
      parser?: Linter.Parser;
      rejectExampleCodeRegex?: string;
      sourceType?: "module" | "script";
    }

    export const getJsdocProcessorPlugin: (
      options?: JsdocProcessorOptions,
    ) => ESLint.Plugin;
  }

  export = JsdocProcessorPlugin;
}
