#!/usr/bin/env node
import { emptyConfig } from "@eslint-deputy/config/use-at-your-own-risk";
import { generate } from "@eslint-deputy/typegen";
import { tailwind } from "../src/index.ts";

await generate(tailwind.config!(emptyConfig));
