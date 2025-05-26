#!/usr/bin/env node
import { emptyConfig } from "@eslint-deputy/config/use-at-your-own-risk";
import { generate } from "@eslint-deputy/typegen";
import { node } from "../src/index.ts";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- IsolatedDecl
await generate(node.config!(emptyConfig));
