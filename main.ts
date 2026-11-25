import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Your 50x long was liquidated at 3am; tomorrow, let your lucky number be 1x.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", `${FORTUNE}\n`, "utf8");
