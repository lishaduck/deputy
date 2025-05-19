#!/usr/bin/env node
import { generate } from "@eslint-deputy/typegen";

import { allConfigs } from "../src/configs/index.ts";

await generate(...allConfigs);
