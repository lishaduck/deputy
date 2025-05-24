#!/usr/bin/env node
import { emptyConfig } from "@eslint-deputy/config/use-at-your-own-risk";
import { generate } from "@eslint-deputy/typegen";
import { node } from "../src/index.ts";

await generate(node.config!(emptyConfig));
