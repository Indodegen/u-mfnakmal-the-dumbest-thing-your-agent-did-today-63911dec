// Copy entry.txt to the output dir (the grader reads out/entry.txt).
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "out");
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.txt"), join(outDir, "entry.txt"));
