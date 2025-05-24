#!/usr/bin/env node
import { emptyConfig } from "@eslint-deputy/config/use-at-your-own-risk";
import { generate } from "@eslint-deputy/typegen";
import { vitest } from "../src/index.ts";

await generate(vitest.config!(emptyConfig));
