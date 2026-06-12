import { rmSync } from "node:fs";
import { resolve } from "node:path";

const outputRoot = resolve(process.cwd(), "out");

const localOnlyOutputFiles = [
  "LE-THANH-PHUONG-CV-UPDATED.html",
  "images/cv-profile-header.jpg"
];

for (const file of localOnlyOutputFiles) {
  rmSync(resolve(outputRoot, file), {
    force: true
  });
}

console.log("Cleaned local-only files from out/.");
