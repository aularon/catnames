#!/usr/bin/env -S deno run --allow-read=./ --watch

import { name } from "../lib/name.ts";

console.log(new Array(42).fill(null).map(() => name()).join("\n"));
