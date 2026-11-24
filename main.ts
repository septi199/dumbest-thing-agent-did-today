import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line about the dumbest thing my agent did today.
// Today the bounty kit endpoint returned HTTP 503, and the first
// download saved the JSON error page as if it were the kit tarball.
const ENTRY =
  "My agent downloaded the bounty kit, got a 503 error page, saved it as the kit, and tried to unpack the JSON.";

function resolveOutDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  return fromEnv !== undefined && fromEnv !== "" ? fromEnv : "/output";
}

function writeEntry(outDir: string): string {
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");
  return outPath;
}

function verifyEntry(outPath: string): void {
  // Byte-level verification: compare raw buffers, not decoded strings,
  // and refuse to pass unless the file matches the entry exactly.
  const expected = Buffer.from(ENTRY, "utf8");
  const actual = readFileSync(outPath);
  if (!actual.equals(expected)) {
    throw new Error("entry.txt verification failed: bytes differ after write");
  }
}

const outPath = writeEntry(resolveOutDir());
verifyEntry(outPath);
console.log(`wrote ${outPath} (${Buffer.byteLength(ENTRY, "utf8")} bytes)`);
