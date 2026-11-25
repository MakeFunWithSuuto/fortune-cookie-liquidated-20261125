import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Your lucky numbers tonight are 0, 0, and the liquidation price you swore was safe.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", `${FORTUNE}\n`, "utf8");
