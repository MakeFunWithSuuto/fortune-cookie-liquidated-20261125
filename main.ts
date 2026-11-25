import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "A wise trader knows a liquidated 50x long is just tuition—and tonight you graduated with honors.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", `${FORTUNE}\n`, "utf8");
