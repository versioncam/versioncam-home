# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary, confirmed 2026-10-29: developers who ship web UI with coding agents
(Claude Code, Cursor, Codex) and cannot re-record demos as fast as the UI
changes. On launch day that is an engineer arriving from Hacker News who
decides in about thirty seconds whether to run three commands, and wants
the mechanism and its proof, not a pitch.

Also, in order: small teams whose README, landing page or changelog carries
a demo that no longer matches the product; open-source maintainers who want
a README demo that stays true without a release-day screencast.

## Product Purpose

Versioncam records short, true product videos of web apps. A clip is a
TypeScript script in the app's repository. The recorder drives the real app
in Chromium on an authored clock, renders a video, and CI re-records every
clip on every push. A control the clip can no longer find fails the build,
naming the control and the second it gave up. A change in how the app looks
makes a new video, never a failure.

Success for a user: a demo that is true by construction, re-recorded instead
of re-shot. Success for the business: the hosted layer, version.cam, keeps
clips living after CI has made them, and that is what is charged for.

## Positioning

The claim a neighbouring product cannot truthfully copy: the demo is a build
product that fails CI when the app no longer matches it, by control and by
second. Seven small open-source tools since February 2026 record demos from
scripts; none asserts anything (market scan, 2026-10-22). Playwright's own
video is a test artifact: wall clock, scaled to 800x800, no pointer. Screen
recorders give a good-looking clip once.

Category: product demo videos; secondarily visual CI. The brand word is
"true". Vocabulary: source-available, not open source; broken, not stale.

## Operating Context

Install: `npm i -D versioncam`, `npx versioncam install`, `npx versioncam init`.
Then, in Claude Code, `/versioncam "<what the clip should show>"` writes the
clip, records it, and has a fresh reviewer pass it from a contact sheet. In
CI, `npx versioncam check` takes seconds per clip, or `uses: versioncam/action@v1`,
which comments on a pull request when a clip breaks.

The site's front page plays the example app's clips, recorded by the public
repository's own CI on the last push to main, from clips.version.cam. The
docs pages are generated from the npm package at build time.

The hosted layer: `versioncam publish` from CI sends the timeline and the
distinct frames; version.cam keeps each clip at an address that only ever
plays the newest version from the default branch that passed. It gives
embeds and oEmbed, living screenshots of any beat, a check and a
before-and-after comment on pull requests, a README badge naming the last
verified commit, private repositories by GitHub's own permissions, and on
paid plans tells the team when a clip breaks.

## Capabilities and Constraints

- The recorder is free and source-available: FSL-1.1-ALv2, each version
  Apache 2.0 two years after its release. Source at
  github.com/versioncam/versioncam, public since 2026-10-28. npm 0.5.2,
  published 2026-10-29. The GitHub Action and this site are MIT.
- Node 22 or later, macOS and Linux; Windows untested.
- Two runs on one machine produce the same bytes; across machines the
  timeline is identical and only the pixels follow the platform's text
  rasteriser.
- A check fails for four reasons only: a control was renamed or removed, a
  page moved, a wait never came, the app would not start. How the app looks
  never fails a check.
- Not for: native mobile apps, terminal demos (Charm's VHS does those),
  interactive HTML tours, narrated screencasts.
- Measured: $1.09 to $2.69 and 5.8 to 11.8 minutes per agent-written clip on
  the example app (2026-09-22), median one review round; the package README
  states it as six to twelve minutes and one or two rounds, under Authoring,
  "What it costs"; about three seconds per clip for `check` on a
  GitHub runner; `versioncam install` fetches 190 MB since 0.5.2.
- Hosted layer status, confirmed 2026-10-30: the service runs, and a
  private beta is running. Nothing is sold yet and no card is asked for:
  Free works for public repositories for anyone who signs in, and the
  first ten accounts that write to hello@version.cam have Pro free until
  the beta ends (an operator's override; Stripe is not live). No public
  date is given. The call to action is "Sign in with GitHub" at
  app.version.cam.
- Plans, as planned and marked planned, never as final (prices are
  confirmed against the first bill, which does not exist). Decided
  2026-10-29: Free is for public repositories only, since a public clip is
  the product's advertisement and a private one is not; private
  repositories are Pro. Free, $0: three projects, 10 clips per project, 30
  days of history, 1 GB, clips to 60 s, the pull request check and the
  badge. Pro, $35 per project per month or $350 a year: private
  repositories, unlimited history, 100 clips, notifications by email, Slack
  or a GitHub issue. Max, $145 a month for ten projects, named in the docs,
  not on the front page. Prices lost their nines on 2026-10-30 ($39 and
  $149 before). An account from the beta pays 20% less for twelve months
  (the FOUNDING code). Per project, never per seat. The service's limits
  match since cloud-v1.5.0: Free stores no private project.

## Brand Commitments

Name: Versioncam; domain version.cam; lockup and mark for dark ground in
public/brand. Voice: engineer-dry; every claim carries a receipt (a clip, a
failing run, a number); never "AI-powered", "seamless", "revolutionary",
"10x", "excited to announce"; no long dashes anywhere a reader sees them.

The visual world in code is binding for this work: black ground, Departure
Mono for what a machine says and Inter for what a person reads, REC red and
amber as the only colours, viewfinder chrome (REC, timecode, STBY). The
2026-10-29 brief asks the front page for breathing room, a simpler account
of what nobody else does, and the hosted layer's features, not a new look.

## Evidence on Hand

- The example app's clips, scripts, timelines and the last check, published
  by CI to clips.version.cam/example; the front page reads them live. As of
  2026-10-29 the newest upload is from 2026-10-11 until the public
  repository holds the R2 secrets.
- One failing run captured by hand, a renamed test id, with the picture the
  recorder kept: public/take/failure-01-create-a-shipment.png.
- The badge, live: api.version.cam/v1/badge/versioncam/versioncam.
- The numbers above. No testimonials, no customers, no third-party
  benchmarks; none may be invented.

## Product Principles

1. Prove, never claim: the page shows the clip CI recorded and the run that
   failed, as they are.
2. The failure is the feature: the named control and the second are the
   pitch, not a disclaimer.
3. Looks change freely; the clip asserts behaviour. The page says so in
   plain words where the claim is first made.
4. The recorder is free; the living layer is sold. Never sell "we host your
   videos".
5. Honest status: planned prices read as planned, and a door that is not
   open says so.
