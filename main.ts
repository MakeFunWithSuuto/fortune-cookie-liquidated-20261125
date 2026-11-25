import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Take heart, liquidated trader: this cookie is 1x spot, and nobody can margin-call your snack.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", `${FORTUNE}\n`, "utf8");
