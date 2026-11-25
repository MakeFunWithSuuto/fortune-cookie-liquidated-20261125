import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Your lucky numbers are 3am, 50x, and the liquidation price you trusted—tomorrow, try 1.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", `${FORTUNE}\n`, "utf8");
