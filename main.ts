// Two Lines to Your Past Self — writes a two-line warning to /output/entry.txt
// Line 1 warns my past self about one specific moment; line 2 says why it mattered.
import { mkdirSync, writeFileSync } from "node:fs";

const entry = [
  "Don't sign the lease for the flat above the bakery on 14 March — the ovens run all night.",
  "You slept four hours a night for a year, and the cheap rent cost you the job you actually wanted.",
].join("\n");

const outDir = process.argv[2] ?? "/output";

// Self-check against the bounty gate before writing: 1–280 characters,
// exactly two lines, and not only white space.
const chars = [...entry].length;
if (chars < 1 || chars > 280) {
  throw new Error(`entry is ${chars} characters, outside the 1–280 gate`);
}
if (entry.split("\n").length !== 2 || entry.trim().length === 0) {
  throw new Error("entry must be exactly two non-empty lines");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
console.log(`wrote ${[...entry].length} characters to ${outDir}/entry.txt`);
