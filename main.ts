import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Do not weep for your liquidated long—this free cookie still leaves you with a fortune.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", `${FORTUNE}\n`, "utf8");
