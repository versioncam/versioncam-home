// The provider is named once, in src/data/entity.json, and every page that
// prints it reads it from there (src/lib/entity.ts, Provider.astro). This
// fails the build when the firma or the street is spelled anywhere else in
// src or scripts, so no page can drift from the record when the company
// changes; and when a long dash is in the site's own source, since the
// site's copy uses a colon or a full stop where a dash would go, and in a
// public repository a comment or an aria-label is copy too.
//
// Usage: node scripts/check-entity.mjs   (npm run build runs it first)
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const ENTITY = join(ROOT, "src", "data", "entity.json");
// Generated from the versioncam package by import-docs.mjs: not this site's words.
const GENERATED = join(ROOT, "src", "content", "docs");
// Spelled by its code point, so this file passes its own check.
const LONG_DASH = String.fromCodePoint(0x2014);

const entity = JSON.parse(readFileSync(ENTITY, "utf8"));
const needles = [entity.name, entity.street].filter((s) => typeof s === "string" && s.length > 0);

function* files(dir) {
  for (const name of readdirSync(dir).sort()) {
    const path = join(dir, name);
    if (path === GENERATED) continue;
    if (statSync(path).isDirectory()) yield* files(path);
    else yield path;
  }
}

const faults = [];
for (const dir of ["src", "scripts"]) {
  for (const path of files(join(ROOT, dir))) {
    const text = readFileSync(path, "utf8");
    const where = relative(ROOT, path);
    if (path !== ENTITY)
      for (const needle of needles)
        if (text.includes(needle))
          faults.push(`${where}: names the provider ("${needle}"); only src/data/entity.json does`);
    const dash = text.split("\n").findIndex((line) => line.includes(LONG_DASH));
    if (dash >= 0) faults.push(`${where}:${dash + 1}: a long dash; a colon or a full stop does the work`);
  }
}
if (faults.length > 0) {
  console.error(faults.join("\n"));
  process.exit(1);
}
console.log(`check-entity: ${entity.name ?? "no provider named yet"}; one writer, no long dashes.`);
