// A tripwire for the few sentences that started docs/voice.md: "nothing is
// sold", "the team is told", "no card is asked for", "the door" for sign in.
// Each hides who does what, and once written they spread by copying. This
// fails the build when one comes back in the site's own words: src (but not
// the docs pages import-docs.mjs generates from the npm package, which are
// the README's words and are fixed there), public, and scripts. In a public
// repository a comment is copy too, as check-entity.mjs says. It is not the
// guard; reading the page as a stranger is (docs/voice.md, "How to check a
// page"). It only stops these exact sentences coming back.
//
// Usage: node scripts/check-voice.mjs   (npm run build runs it first)
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const GENERATED = join(ROOT, "src", "content", "docs");
const SELF = fileURLToPath(import.meta.url);
// Binary files hold no sentences, and a font or a video can match by chance.
const TEXT = /\.(astro|mdx?|[cm]?[jt]s|tsx?|css|json|txt|html|svg|template)$/;

const PHRASES = [/\bnothing is sold\b/i, /\bis sold\b/i, /\bis told\b/i, /\bis asked for\b/i, /\bthe door\b/i];

function* files(dir) {
  for (const name of readdirSync(dir).sort()) {
    const path = join(dir, name);
    if (path === GENERATED || path === SELF) continue;
    if (statSync(path).isDirectory()) yield* files(path);
    else if (TEXT.test(name)) yield path;
  }
}

const faults = [];
for (const dir of ["src", "public", "scripts"]) {
  for (const path of files(join(ROOT, dir))) {
    const lines = readFileSync(path, "utf8").split("\n");
    lines.forEach((line, i) => {
      // The first phrase only: "nothing is sold" would also report "is sold".
      const hit = PHRASES.map((phrase) => line.match(phrase)).find(Boolean);
      if (hit) faults.push(`${relative(ROOT, path)}:${i + 1}: "${hit[0]}"; say who does what (docs/voice.md)`);
    });
  }
}
if (faults.length > 0) {
  console.error(faults.join("\n"));
  process.exit(1);
}
console.log("check-voice: none of the phrases docs/voice.md retired.");
