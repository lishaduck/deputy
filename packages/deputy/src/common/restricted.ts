import type { RuleConfig as SyntaxRuleConfig } from "eslint-no-restricted/syntax";

// TODO: Move this to a separate package.

export const restrictedSyntax: SyntaxRuleConfig[] = [
  {
    name: "no-label",
    message:
      "Labels are a form of GOTO; using them makes code confusing and hard both to maintain and understand.",
    selector: "LabeledStatement",
  },
  {
    name: "no-for-in-loops",
    message:
      "`for`-`in` loops skip array holes, return array indices as strings, and may visit the prototype chain or other enumerable properties, which is virtually never what you want. Use a more robust iteration method such as `for`-`of`; if not iterating over an array, convert to an array first, perhaps using Object.{keys,values,entries}.",
    selector: "ForInStatement",
  },
  {
    name: "no-reflect",
    message:
      "Avoid the Reflect API. It is a very low level feature that is rarely needed, except in complex libraries. There is no need to use this feature in normal code.",
    selector: "Identifier[name='Reflect']",
  },
  {
    name: "no-proxy",
    message:
      "Avoid the Proxy API. It is a low level feature that is rarely needed. In the niche cases when this is needed, feel free to disable this rule with the inline eslint-disable syntax.",
    selector: "Identifier[name='Proxy']",
  },
  {
    name: "no-in-operator",
    message:
      "Avoid the 'in' operator. In most cases, basic property access is all you need. For other cases, use Object.hasOwn(). In niche cases where you need to check for the existence of a property both on an object itself AND its prototype chain, feel free to disable this rule with the inline eslint-disable syntax.",
    selector: "BinaryExpression[operator='in']",
  },
  {
    name: "no-access-modifiers",
    message:
      "Avoid access modifiers; prefer #private members or omitting the modifier.",
    selector: [
      ":matches(PropertyDefinition, MethodDefinition, TSParameterProperty)[accessibility]",
    ],
  },
  {
    name: "no-delete-operator",
    message: "Avoid `delete`; prefer destructuring.",
    selector: "UnaryExpression[operator='delete']",
  },
  {
    name: "no-enums",
    // When microsoft/TypeScript#61414 lands, prefer enum annotations.
    message: "Avoid `enum`; prefer using objects instead.",
    selector: "TSEnumDeclaration",
  },
];
