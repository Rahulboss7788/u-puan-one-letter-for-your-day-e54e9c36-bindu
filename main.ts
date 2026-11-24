// One Letter for Your Day — entry: Q
//
// The letter Q stands for "queasy": a day that left your stomach
// unsettled — too much bad news, too much bad coffee, a day that kept
// spinning. Q is a sharp, distinctive initial whose day-word is vivid,
// specific and funny, and it is not one of the obvious picks (A for
// amazing, F for Friday-feeling, Z for zero sleep).
//
// This program writes exactly one character, "Q", with no trailing
// newline and no extra bytes, to /output/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LETTER = "Q";
const OUTPUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, LETTER, "utf8");

// Read back and verify: the entry must be exactly one A-Z character.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (!/^[A-Z]$/.test(written)) {
  throw new Error(
    `Invalid entry: expected exactly one A-Z character, got ${JSON.stringify(written)}`,
  );
}
