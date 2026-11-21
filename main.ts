import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Close your eyes for one breath. Somewhere above the clouds, light is still travelling from a star that died a thousand years ago — and it chose tonight to arrive. You are not reading words. You are catching ancient light. Breathe in. It is still warm.";

// Validate the entry before writing: it must be 1–280 Unicode code
// points and not only whitespace.
const length = [...TEXT].length;
if (length < 1 || length > 280 || TEXT.trim().length === 0) {
  throw new Error(
    `Invalid entry text: expected 1–280 code points and non-whitespace, got ${length} code points.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
