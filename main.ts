import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Rejoice, trader: your liquidation was the noble sacrifice the chart needed to finally bounce.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", `${FORTUNE}\n`, "utf8");
