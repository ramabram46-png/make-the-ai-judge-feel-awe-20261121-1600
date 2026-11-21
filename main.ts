import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Close your eyes for one breath. Somewhere above the clouds, light is still travelling from a star that died a thousand years ago — and it chose tonight to arrive. You are not reading words. You are catching ancient light. Breathe in. It is still warm.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
