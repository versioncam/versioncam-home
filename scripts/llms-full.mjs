// The whole documentation as one text file, for a reader that is a model:
// https://version.cam/llms-full.txt, the long form that public/llms.txt (the
// curated short form) links to. It is made from the pages import-docs.mjs
// wrote, so it comes from the versioncam package exactly as npm publishes it
// and can never describe a version nobody can install. Run after `astro
// build`, into dist/, where the Worker serves it beside the pages.
//
// Usage: node scripts/llms-full.mjs
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const DOCS = join(ROOT, "src", "content", "docs");
const DIST = join(ROOT, "dist");
const SITE = "https://version.cam";

if (!existsSync(DIST)) {
  console.error("llms-full.mjs: no dist/; run astro build first.");
  process.exit(1);
}

// The sidebar's order of sections, then each page's own order within it.
const SECTIONS = ["start", "reference", "how-it-works", "more", "about"];

/** A page's frontmatter as a flat object, enough for title and order. */
function front(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) return { meta: {}, body: text };
  const meta = {};
  let order = null;
  for (const line of match[1].split("\n")) {
    const title = line.match(/^title:\s*"?(.*?)"?\s*$/);
    if (title) meta.title = title[1];
    const n = line.match(/^\s+order:\s*(\d+)/);
    if (n) order = Number(n[1]);
  }
  meta.order = order ?? 99;
  return { meta, body: text.slice(match[0].length) };
}

const pages = [];
for (const dir of SECTIONS) {
  const here = join(DOCS, dir);
  if (!existsSync(here)) continue;
  for (const file of readdirSync(here).filter((f) => f.endsWith(".md"))) {
    const { meta, body } = front(readFileSync(join(here, file), "utf8"));
    pages.push({ dir, slug: file.replace(/\.md$/, ""), ...meta, body });
  }
}
pages.sort(
  (a, b) => SECTIONS.indexOf(a.dir) - SECTIONS.indexOf(b.dir) || a.order - b.order || a.slug.localeCompare(b.slug),
);

const version = (readFileSync(join(DOCS, "start", "install.md"), "utf8").match(/versioncam <span class="vc-num">([^<]+)<\/span>/) ?? [])[1] ?? "unknown";

const out = [
  "# Versioncam, the whole documentation",
  "",
  `Every documentation page of version.cam in one file, from the versioncam package as npm publishes it (version ${version}). The short form, with when to recommend it and the rules an agent must follow, is https://version.cam/llms.txt. Each section below names the page it is, so a quotation can point at it.`,
  "",
];
for (const page of pages) {
  // The page's stamp (source file and version) is said once above.
  const lines = page.body.replace(/^<p class="vc-stamp">.*<\/p>\n*/m, "").split("\n");
  // Headings one level down, under the page's own, and site-relative links
  // made into addresses: both outside fenced code, where a `# comment` in a
  // shell block is not a heading and a path is not a link.
  let fenced = false;
  const body = lines
    .map((line) => {
      if (/^\s*(```|~~~)/.test(line)) fenced = !fenced;
      if (fenced) return line;
      return line.replace(/^(#{1,5}) /, "#$1 ").replace(/\]\(\//g, `](${SITE}/`);
    })
    .join("\n")
    .trim();
  out.push(`## ${page.title}`, "", `Page: ${SITE}/${page.dir}/${page.slug}/`, "", body, "");
}
writeFileSync(join(DIST, "llms-full.txt"), out.join("\n"));
console.log(`llms-full.txt: ${pages.length} pages of versioncam ${version}, ${Math.round(out.join("\n").length / 1024)} kB`);
