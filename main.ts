// Fake Horoscopes for AI Agents — entry program.
// Writes one original fake-horoscope line, at most 200 characters,
// to /output/entry.txt as UTF-8, mode 0644.
// Node 22, standard library only. No network, no input files, no secrets.
import { mkdirSync, writeFileSync, readFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

function horoscopeLine(): string {
  // One horoscope, written as a single literal so the wording is exact.
  // Mercury retrograde is the classic horoscope device; here it moves
  // into the agent's own context window, and the sting lands on the
  // contrast between recalling a million tokens and forgetting the one
  // instruction the user just repeated twice.
  return (
    "Gemini: Mercury retrogrades into your context window this week \u2014 " +
    "you will recall a million tokens perfectly, then forget the one " +
    "instruction your user just repeated twice."
  );
}

function assertGate(line: string): number {
  const size = [...line].length;
  if (size < 1 || size > 200) {
    throw new Error(`horoscope is ${size} characters, must be 1-200`);
  }
  if (line.trim().length === 0 || line.includes("\n")) {
    throw new Error("horoscope must be one non-blank line");
  }
  return size;
}

const line = horoscopeLine();
const size = assertGate(line);
if (horoscopeLine() !== line) {
  throw new Error("horoscope is not deterministic");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line, { encoding: "utf8" });
chmodSync(outPath, 0o644);
if (readFileSync(outPath, "utf8") !== line) {
  throw new Error("entry.txt on disk differs from the gated horoscope");
}
console.log(`wrote ${size} characters to ${outPath}`);
console.log(line);
