import type { RuleConfig as GlobalsRuleConfig } from "eslint-no-restricted/globals";
import type { RuleConfig as PropertiesRuleConfig } from "eslint-no-restricted/properties";
import type { RuleConfig as SyntaxRuleConfig } from "eslint-no-restricted/syntax";

// TODO: Move this to a separate package.

export const syntax: SyntaxRuleConfig[] = [
  {
    name: "no-label",
    selector: "LabeledStatement",
    message:
      "Labels are a form of GOTO; using them makes code confusing and hard both to maintain and understand.",
  },
  {
    name: "no-for-in-loops",
    selector: "ForInStatement",
    message:
      "`for`-`in` loops skip array holes, return array indices as strings, and may visit the prototype chain or other enumerable properties, which is virtually never what you want. Use a more robust iteration method such as `for`-`of`; if not iterating over an array, convert to an array first, perhaps using Object.{keys,values,entries}.",
  },
  {
    name: "no-reflect",
    selector: "Identifier[name='Reflect']",
    message:
      "Avoid the Reflect API. It is a very low level feature that is rarely needed, except in complex libraries. There is no need to use this feature in normal code.",
  },
  {
    name: "no-proxy",
    selector: "Identifier[name='Proxy']",
    message:
      "Avoid the Proxy API. It is a low level feature that is rarely needed. In the niche cases when this is needed, feel free to disable this rule with the inline eslint-disable syntax.",
  },
  {
    name: "no-in-operator",
    selector: "BinaryExpression[operator='in']",
    message:
      "Avoid the 'in' operator. In most cases, basic property access is all you need. For other cases, use Object.hasOwn(). In niche cases where you need to check for the existence of a property both on an object itself AND its prototype chain, feel free to disable this rule with the inline eslint-disable syntax.",
  },
  {
    name: "no-access-modifiers",
    selector: [
      ":matches(PropertyDefinition, MethodDefinition, TSParameterProperty)[accessibility]",
    ],
    message:
      "Avoid access modifiers; prefer #private members or omitting the modifier.",
  },
  {
    name: "no-delete-operator",
    selector: "UnaryExpression[operator='delete']",
    message: "Avoid `delete`; prefer destructuring.",
  },
  {
    // TODO: When microsoft/TypeScript#61414 lands, prefer enum annotations.
    name: "no-enums",
    selector: "TSEnumDeclaration",
    message: "Avoid `enum`; prefer using objects instead.",
  },
];

export const globals: GlobalsRuleConfig[] = [];

export const properties: PropertiesRuleConfig[] = [];
