import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "You will soon find true balance in life, though your exchange currently lists it as $0.00.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", `${FORTUNE}\n`, "utf8");
