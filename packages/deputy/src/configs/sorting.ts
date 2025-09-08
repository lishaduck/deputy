import type { Linter } from "eslint/universal";
import perfectionist from "eslint-plugin-perfectionist";
import { Alphabet } from "eslint-plugin-perfectionist/alphabet";

import { defineConfig } from "@eslint-deputy/define-config";

import type { DeputyConfigOptions } from "../options.ts";
import { off, warn } from "../severity.ts";
import type { PerfectionistSortObjects } from "../typegen.d.ts";

// See azat-io/eslint-plugin-perfectionist#546.
const importAlphabet = Alphabet.generateRecommendedAlphabet()
  .sortByNaturalSort()
  .placeCharacterBefore({ characterBefore: "/", characterAfter: "-" })
  .placeCharacterBefore({ characterBefore: ".", characterAfter: "/" })
  .getCharacters();

const objectSort: PerfectionistSortObjects = [
  {
    customGroups: [
      // Headers
      {
        groupName: "id",
        selector: "property",
        elementNamePattern: "^(?:id)$",
      },
      {
        groupName: "from",
        selector: "property",
        elementNamePattern: "^(?:from)$",
      },
      {
        groupName: "name",
        selector: "property",
        elementNamePattern: "^(?:name)$",
      },
      {
        groupName: "type",
        selector: "property",
        elementNamePattern: "^(?:type)$",
      },
      {
        groupName: "group",
        selector: "property",
        elementNamePattern: "^(?:group)$",
      },
      {
        groupName: "files",
        selector: "property",
        elementNamePattern: "^(?:files)$",
      },

      // Footers
      {
        groupName: "previous",
        selector: "property",
        elementNamePattern: "^(?:prev|previous|characterBefore)$",
      },
      {
        groupName: "next",
        selector: "property",
        elementNamePattern: "^(?:next|characterAfter)$",
      },
      {
        groupName: "pattern",
        selector: "property",
        elementNamePattern: "^(?:elementNamePattern|importNamePattern)$",
      },
    ],
    groups: [
      "id",
      "from",
      "name",
      "type",
      "group",
      "files",
      "unknown",
      "previous",
      "next",
      "pattern",
    ],
  },
];

export const sorting = ({
  fileGlobs,
  internalPattern,
}: DeputyConfigOptions): Linter.Config[] =>
  defineConfig(
    {
      name: "deputy/sorting",
      files: [fileGlobs.ecma],
      // TODO: Set to warn
      extends: [{ ...perfectionist.configs["recommended-natural"] }],

      settings: {
        perfectionist: {
          partitionByComment: true,
          partitionByNewLine: true,
        },
      },
    },
    {
      name: "deputy/perfectionist/handpicked",
      files: [fileGlobs.ecma],
      rules: {
        "perfectionist/sort-imports": [
          warn,
          {
            groups: [
              "side-effect",
              "builtin",
              "external",
              "internal",
              ["parent", "sibling", "index", "subpath"],
              "unknown",
            ],
            internalPattern:
              internalPattern === undefined ? [] : [internalPattern],
            partitionByNewLine: false,

            type: "custom",
            alphabet: importAlphabet,
          },
        ],
        "perfectionist/sort-interfaces": [warn, ...objectSort],
        "perfectionist/sort-modules": off,
        "perfectionist/sort-objects": [warn, ...objectSort],
        "perfectionist/sort-union-types": [
          warn,
          {
            groups: ["unknown", "nullish"],
          },
        ],
      },
    },
  );
