import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Tonight's liquidation will make you delete the trading app forever, or at least until your coffee cools.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", `${FORTUNE}\n`, "utf8");
