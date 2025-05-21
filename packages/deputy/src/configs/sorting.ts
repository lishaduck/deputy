import type { Linter } from "eslint";
import perfectionist from "eslint-plugin-perfectionist";
import { Alphabet } from "eslint-plugin-perfectionist/alphabet";

import { defineConfig } from "@eslint-deputy/define-config";

import type { DeputyConfigOptions } from "../options.ts";
import { error, off } from "../severity.ts";
import type { PerfectionistSortObjects } from "../typegen.js";

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
          error,
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
        "perfectionist/sort-modules": off,
        "perfectionist/sort-objects": [error, ...objectSort],
        "perfectionist/sort-union-types": [
          error,
          {
            groups: ["unknown", "nullish"],
          },
        ],
      },
    },
  );
