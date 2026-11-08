// Draws the picture a link to version.cam unfurls as (public/og-image.png,
// 1200x630) and the same picture for a GitHub repository's social preview
// (public/brand/social-preview.png, 1280x640, uploaded by hand in each
// repository's settings). Both say what the product is in one line and show
// one frame of the example app's first clip from CI's last take, framed the
// way the front page frames it: the corner brackets and a band reading REC,
// the version that recorded it, the commit and the frame's timecode, all from
// the take itself.
//
// The frame is cut from the clip's video by ffmpeg when it is on the PATH,
// at the moment the shipment has been typed in; without ffmpeg it is the
// take's poster, the clip's first frame. The type is the site's own fonts
// from public/fonts, set by a headless Chromium, so the picture matches the
// page. Playwright is not one of the site's dependencies, since the build
// never needs it; install it for the run without saving it:
//
//   npm i --no-save playwright && npx playwright install chromium
//   node scripts/og-image.mjs
//
// CLIPS_BASE points it at another take, as it does import-docs.mjs.
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const BASE = process.env.CLIPS_BASE ?? "https://clips.version.cam/example";
// Where in the clip the frame is cut, as a share of its length: by then the
// form is filled in and the pointer is on its way to the button.
const AT = 0.55;

let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch {
  console.error(
    "og-image: needs Playwright for the run: npm i --no-save playwright && npx playwright install chromium",
  );
  process.exit(1);
}

const get = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
  return response;
};

const manifest = await (await get(`${BASE}/manifest.json`)).json();
const clip = manifest.clips.find((c) => !c.id.endsWith("-mobile")) ?? manifest.clips[0];
const v = `?v=${encodeURIComponent(manifest.commit ?? manifest.recordedAt)}`;
const work = mkdtempSync(join(tmpdir(), "og-image-"));

// The frame, and the frame number it is, for the timecode on the band.
let frame = 0;
let picture = join(work, "frame.png");
try {
  const video = join(work, "clip.mp4");
  writeFileSync(video, Buffer.from(await (await get(`${BASE}/${clip.id}.mp4${v}`)).arrayBuffer()));
  frame = Math.round(clip.frames * AT);
  execFileSync("ffmpeg", ["-v", "error", "-ss", String(frame / clip.fps), "-i", video, "-frames:v", "1", "-y", picture]);
} catch (error) {
  console.warn(`og-image: no frame from the video (${error.message.split("\n")[0]}); using the poster`);
  frame = 0;
  picture = join(work, "poster.png");
  writeFileSync(picture, Buffer.from(await (await get(`${BASE}/${clip.id}-poster.png${v}`)).arrayBuffer()));
}

const pad = (n) => String(Math.floor(n)).padStart(2, "0");
const seconds = Math.floor(frame / clip.fps);
const timecode = `${pad(seconds / 3600)}:${pad((seconds / 60) % 60)}:${pad(seconds % 60)}:${pad(frame % clip.fps)}`;

// Inlined: a page set from a string may not read a file:// font.
const font = (name) =>
  `data:font/woff;base64,${readFileSync(join(ROOT, "public", "fonts", `${name}.woff`)).toString("base64")}`;
const lockup = readFileSync(join(ROOT, "public", "brand", "lockup-dark-bg.svg"), "utf8");
const image = `data:image/png;base64,${readFileSync(picture).toString("base64")}`;

// One layout for both sizes: the words on the left, the frame on the right,
// as the front page's first screen sets them. Departure Mono stays on its
// 11px grid (22, 44); the lockup is drawn at 2px to each of its pixels.
const page = (width, height) => `<!doctype html>
<meta charset="utf-8">
<style>
  @font-face { font-family: "Departure Mono"; src: url("${font("DepartureMono-Regular")}"); }
  * { box-sizing: border-box; margin: 0; }
  html, body { width: ${width}px; height: ${height}px; background: #000; color: #fff; overflow: hidden; }
  body {
    display: grid; grid-template-columns: 1fr 640px; align-items: center; gap: 56px;
    padding: 0 ${(width - 1200) / 2 + 64}px 0 ${(width - 1200) / 2 + 72}px;
  }
  .lockup svg { display: block; height: 26px; width: auto; }
  h1 {
    margin-top: 40px; font: 400 44px/55px "Departure Mono", monospace; letter-spacing: 0;
  }
  figure { border: 1px solid #2a2e35; position: relative; }
  figure img { display: block; width: 100%; aspect-ratio: 16 / 10; object-fit: cover; }
  figure::after {
    content: ""; position: absolute; inset: 8px; pointer-events: none;
    --c: rgb(255 255 255 / 0.85);
    background:
      linear-gradient(var(--c), var(--c)) 0 0 / 14px 2px no-repeat,
      linear-gradient(var(--c), var(--c)) 0 0 / 2px 14px no-repeat,
      linear-gradient(var(--c), var(--c)) 100% 0 / 14px 2px no-repeat,
      linear-gradient(var(--c), var(--c)) 100% 0 / 2px 14px no-repeat,
      linear-gradient(var(--c), var(--c)) 0 100% / 14px 2px no-repeat,
      linear-gradient(var(--c), var(--c)) 0 100% / 2px 14px no-repeat,
      linear-gradient(var(--c), var(--c)) 100% 100% / 14px 2px no-repeat,
      linear-gradient(var(--c), var(--c)) 100% 100% / 2px 14px no-repeat;
  }
  .band {
    display: flex; align-items: center; gap: 20px; padding: 10px 16px 11px;
    border-top: 1px solid #2a2e35; font: 400 11px/11px "Departure Mono", monospace;
    letter-spacing: 0.04em; white-space: nowrap;
  }
  .band i { display: inline-block; width: 8px; height: 8px; background: #ff2a1f; margin-right: 6px; }
  .amber { color: #ffb000; }
  .tc { margin-left: auto; }
</style>
<main>
  <div class="lockup">${lockup}</div>
  <h1>Demo videos of your web app, recorded by CI.</h1>
</main>
<figure>
  <img src="${image}" alt="">
  <div class="band">
    <span><i></i>REC</span>
    <span class="amber">v${manifest.recorder}</span>
    <span>${manifest.commit ? `main@${manifest.commit}` : ""}</span>
    <span class="amber tc">${timecode}</span>
  </div>
</figure>`;

const browser = await chromium.launch();
for (const [width, height, out] of [
  [1200, 630, join(ROOT, "public", "og-image.png")],
  [1280, 640, join(ROOT, "public", "brand", "social-preview.png")],
]) {
  const tab = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  await tab.setContent(page(width, height), { waitUntil: "load" });
  await tab.evaluate(async () => {
    await document.fonts.load('44px "Departure Mono"');
    await document.fonts.ready;
  });
  await tab.screenshot({ path: out });
  await tab.close();
  console.log(`og-image: ${out.slice(ROOT.length)} (${width}x${height}), ${clip.id} at ${timecode}, versioncam ${manifest.recorder}`);
}
await browser.close();
