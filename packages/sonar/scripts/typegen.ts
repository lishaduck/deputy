#!/usr/bin/env node
import { generate } from "@eslint-deputy/typegen";
import { sonar } from "../src/index.ts";

await generate(sonar.config!());
