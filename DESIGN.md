---
name: version.cam
description: A viewfinder on a black ground; the machine speaks in Departure Mono, the person in Inter; red means recording, amber means a number you can trust.
colors:
  black: "#000000"
  white: "#ffffff"
  rec-red: "#ff2a1f"
  trust-amber: "#ffb000"
  dim: "#8a8f98"
  hairline: "#2a2e35"
  panel: "#0b0c0e"
  inset: "#16181c"
  text-lead: "#eceef1"
  text-reading: "#c9ccd1"
  code-ink: "#e6e8eb"
  deep-grey: "#545861"
typography:
  display:
    fontFamily: "Departure Mono, ui-monospace, Menlo, monospace"
    fontSize: "55px"
    fontWeight: 400
    lineHeight: "66px"
    letterSpacing: "0"
  headline:
    fontFamily: "Departure Mono, ui-monospace, Menlo, monospace"
    fontSize: "33px"
    fontWeight: 400
    lineHeight: "44px"
    letterSpacing: "0"
  headline-docs:
    fontFamily: "Departure Mono, ui-monospace, Menlo, monospace"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: "33px"
    letterSpacing: "0"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: 1.4
  lead:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  small:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Departure Mono, ui-monospace, Menlo, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: "22px"
    letterSpacing: "0.08em"
  readout:
    fontFamily: "Departure Mono, ui-monospace, Menlo, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: "11px"
    letterSpacing: "0.04em"
  code:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  none: "0"
spacing:
  hairline: "1px"
  bracket-inset: "8px"
  osd-inset: "16px"
  row: "0.6875rem"
  gutter: "3rem"
  component-top: "2.25rem"
  beat-gap: "4rem"
  beat-pad: "2.5rem"
  beat-gap-wide: "6rem"
  beat-pad-wide: "3.5rem"
components:
  button-primary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.black}"
    typography: "{typography.readout}"
    rounded: "{rounded.none}"
    padding: "1rem 1.25rem"
  button-minimal:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.readout}"
    rounded: "{rounded.none}"
  button-icon:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    size: "2rem"
  tab:
    backgroundColor: "transparent"
    textColor: "{colors.dim}"
    typography: "{typography.readout}"
    rounded: "{rounded.none}"
    padding: "0.8125rem 1rem"
  tab-selected:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.white}"
  osd-chip:
    backgroundColor: "rgb(0 0 0 / 0.55)"
    textColor: "{colors.white}"
    typography: "{typography.readout}"
    rounded: "{rounded.none}"
    padding: "3px 4px"
  tag-planned:
    backgroundColor: "{colors.trust-amber}"
    textColor: "{colors.black}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 0.35em"
  panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text-reading}"
    rounded: "{rounded.none}"
  panel-head:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.dim}"
    typography: "{typography.label}"
    padding: "0.75rem 0.875rem"
  inline-code:
    backgroundColor: "{colors.inset}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "0.1em 0.35em"
---

# Design System: version.cam

<!--
First record, written 2026-10-29 from the shipped build (src/styles/site.css,
src/components/*.astro, astro.config.mjs, public/brand, public/fonts), after
the front page was recomposed inside the site's existing world. The site
repository's .gitignore keeps .impeccable/ local by its own rule, so the
token-bearing sidecar .impeccable/design.json travels with a checkout and
this file is the committed record. The YAML frontmatter is normative; the
prose says where and why.
-->

## Overview

**Creative North Star: "The Viewfinder"**

The site is the display of a camera that records software. The ground is pure black and the words on it are the on-screen text of a recording device: white, flat, and placed by a grid. Two voices share every page. What a machine says (the wordmark, headings, REC, the timecode, a version, a commit, a file name, a tab) is set in Departure Mono, a pixel face drawn on an 11px grid and therefore only ever set at 11, 22, 33, 44 or 55px. What a person reads (sentences, list items, definitions) is set in Inter at 400 and 500, nothing heavier. Code is neither voice: it takes the reader's own system monospace in the viewfinder's greys.

Colour is signal, never decoration. REC red appears only as the recording dot (an 8px square, blinking on a 1s step while a take plays). Amber appears only on a number the page read from an artifact: the version from the tarball, the timecode and frame counter from the recording, a price, an exit code. Starlight's own accent, aside and badge colours are all pulled back to white and greys so nothing else on the page can compete with those two signals. Emphasis that would elsewhere be a colour is reverse video here: black on white for the lit line's number and a FAIL verdict, black on amber for the word "planned".

Density is measured and ruled. Depth is drawn with one 1px hairline (#2a2e35), never a shadow; nothing has a radius; a picture is always framed by the mark's own corner brackets with the display over or under it. The front page tells one story in beats, and every beat opens the same way: a hairline rule the full width of the measure, air, a short heading in the machine's face, one paragraph in the person's, then one receipt (a take, two ruled columns, a run as it printed, four facts, a terminal).

**Key Characteristics:**
- Pure black ground; white and six greys do all the structural work
- Two signal colours with one job each: red records, amber is a number read from the artifact
- Departure Mono on an 11px grid for the machine's voice; Inter 400/500 for the person's
- Hairline rules and two-column ledgers instead of cards; flat throughout; no radius anywhere
- Every picture is a recording framed by corner brackets and stamped with REC, version, commit and timecode
- One beat grammar: rule, heading, one paragraph, one receipt

## Colors

A monochrome instrument panel with two lamps on it.

### Primary
- **Rec Red** (`rec-red`): the recording lamp only. An 8px square beside the word REC in the viewfinder's on-screen display and in the film band; the same 8px square before the ledger's "The build fails, by name" heading. It blinks (`steps(1)`, 1s) while the take plays, holds still when paused and under `prefers-reduced-motion`. Never text, never a border, never a background.
- **Trust Amber** (`trust-amber`): a number the page did not make up. The version read from the published tarball (`.vc-num` in the stamp and the colophon), the timecode and frame counter read from the recording, the exit code of a run, a planned price in the plans list. Also the ground of the one amber tag, `planned`, where the text is black. Nothing else is amber, including links, buttons and headings.

### Neutral
- **Black** (`black`): the page, the sidebar, the nav, the take's frame. Also text in reverse video.
- **White** (`white`): headings, body-strong, the active link, the primary button's fill, the caret, selection, focus ring, the lit line's number ground, the scrubber's played portion and thumb, the corner brackets (at 85% alpha). Starlight's accent is white: a link, the page you are on, a button.
- **Lead** (`text-lead`, Starlight gray-1): the beat's one paragraph under each front-page heading.
- **Reading** (`text-reading`, gray-2): body copy in definitions, ledger notes, run output, the hero tagline, strings and numbers in highlighted script.
- **Dim** (`dim`, gray-3): every label and term the machine prints quietly (sidebar group labels, "On this page", the stamp, panel heads, tabs at rest, prompts, comments in code, the take's hint, the colophon, the section-link `#`). The scrubber's step ticks. The colour Starlight's orange, red, green, blue and purple all collapse to.
- **Deep Grey** (`deep-grey`, gray-4): Starlight's own subdued tier; not used by the front page directly.
- **Hairline** (`hairline`, gray-5): the one line. Every rule, border, divider, track, tab edge and panel outline; selection in code frames; the scrollbar thumb.
- **Panel** (`panel`, gray-6): the ground of a code frame, a run, an install block, the take's script cell and the selected tab. Also the video poster ground.
- **Inset** (`inset`): inline code ground and Starlight's accent-low; the tier between panel and hairline.
- **Code Ink** (`code-ink`): code, script source and run output text; the Expressive Code foreground.

### Named Rules
**The Two Signals Rule.** Red means recording and amber means a number read from an artifact. Neither is ever decoration: not a link, not a heading, not a border, not a hover. A new surface that wants a third colour does not get one; it gets white, a grey, or reverse video.

**The Reverse Video Rule.** Emphasis is inversion, not hue. The running line's number, a FAIL verdict and a focused skip link are black on white; the word "planned" is black on amber. Nothing is bold beyond Inter 500.

**The Greys Take It Back Rule.** Starlight's accent, aside, badge and syntax colours are all remapped to white or `dim`; the code theme `viewfinder` colours tokens in white, `code-ink`, `text-reading` and `dim` only, so a code block can never bring red or amber onto the page.

## Typography

**Display Font:** Departure Mono (with ui-monospace, Menlo, monospace), self-hosted woff, one weight
**Body Font:** Inter (with system-ui, sans-serif), self-hosted woff at 400 and 500 only
**Label/Mono Font:** Departure Mono for anything the machine says; the reader's `ui-monospace` stack for code, scripts and command output

**Character:** A pixel face that speaks in readouts beside a plain humanist sans that reads like a sentence. The pair never blends: a word is either the machine's or the person's, and the face says which. The heading scale is the machine's grid times 2, 3, 4 and 5; the body scale is Inter's ordinary 16/18 with generous leading because light type on black needs it.

### Hierarchy
- **Display** (Departure Mono 400, 55px/66px at 80rem and up, 44px/55px at 40rem and up, 33px/44px below): the front page's title only. Starlight's 404 hero steps 44/33/22 by width.
- **Headline** (Departure Mono 400, 33px/44px on the front page at 40rem and up; 22px/33px in the docs and on phones): every `h2`, and the docs' page title (`h1` at 33/44). Always one step under the title at the same width. Letter-spacing 0, `text-wrap: balance`.
- **Title** (Inter 500, 18px/1.4, white): docs `h3`. Rank and size agree: the third level leaves the machine's face so it cannot be mistaken for a section.
- **Lead** (Inter 400, 18px/1.65): the one paragraph under each front-page heading (`text-lead`) and the hero's tagline (`text-reading`) and the ledger's list items (white). Measures: 62ch for the paragraph, 36rem for the tagline.
- **Body** (Inter 400, 16px/1.65): docs prose on a 52ch measure, front-page prose on 62ch; definitions at 48 to 52ch; ledger notes at 44ch. `text-wrap: pretty` on paragraphs.
- **Small** (Inter 400, 14px/1.6, `dim`): the take's hint, the plans note, the colophon.
- **Label** (Departure Mono 400, 11px, line-height 22px in flow or 11px in a chip, tracking 0.08em, uppercase, `dim` or white): sidebar group labels, "On this page", the stamp, code-frame titles, panel heads, facts and definition terms, ledger and hosted sub-heads, the two link buttons.
- **Readout** (Departure Mono 400, 11px/11px, tracking 0.04em, mixed case, `font-variant-numeric: tabular-nums` where numbers run): REC, the version, `main@commit`, a timecode, a file tab, a frame counter, a test id. A commit and a test id are names and keep their case (`.vc-id`).
- **Code** (ui-monospace stack, 14px/1.6 in frames and 1.7 in install blocks; 13px/20px for the take's script lines; 0.875em inline, no wrap at 50rem and up): commands, scripts, run output.

### Named Rules
**The 11px Grid Rule.** Departure Mono is set at 11, 22, 33, 44 or 55px and on a line height from the same grid. Any other size is a defect.

**The Two Voices Rule.** If a machine would print it (REC, a version, a commit, a timecode, a file name, a tab, a label over data), it is Departure Mono. If a person would say it, it is Inter. Code is the reader's own monospace, never Departure Mono.

**The Strong Is 500 Rule.** Inter ships here at 400 and 500; `strong` is 500 and white, and nothing is heavier, because anything heavier would be synthesised.

## Layout

One column of Starlight content on black, 50rem wide in the docs and 76rem on the front page (`data-has-hero`). Prose keeps its measure (52ch docs, 62ch front page) while code, tables, figures and every front-page receipt take the full column (`max-inline-size: none` on `.vc-facts`, `.vc-ledger`, `.vc-hosted`, `.vc-setup`, and the `h2` wrapper, so the rule above a heading is the receipt's width, not the paragraph's).

**The beat.** Every front-page `h2` wrapper carries `border-top: 1px solid hairline`, `margin-top: 4rem; padding-top: 2.5rem` (6rem and 3.5rem at 64rem and up). The first beat after the hero drops its top margin to 1rem (1.5rem wide) so it follows the hero's own air. The paragraph under the heading is the lead: `margin: 1.25rem 0 2.25rem`. A component follows at `margin-top: 2.25rem`. A paragraph after the ledger takes 3.5rem above and 1.75rem below. The colophon sits 5rem under the last beat.

**The hero.** One column on a phone with the film first (`order: -1`), then title, tagline, actions. At 64rem two equal columns, centred to each other, `gap: 4.5rem`, `min-height: min(72vh, 42rem)`; at 80rem the copy column widens to 1.05fr and the gap to 5.5rem. Actions wrap with `gap: 0.75rem 1.5rem` and sit 2rem (2.5rem wide) under the tagline.

**Two ruled columns.** The ledger and the hosted layer split at 50rem and 64rem respectively into two columns with no gap; the left column pads `3rem` on its end, the right pads `3rem` on its start and carries `border-left: 1px solid hairline`. The ledger's columns close with a bottom hairline; the hosted list is a `dl` ruled top and bottom with a hairline between rows. The facts grid is two columns at 50rem with a `3rem` column gap and each cell ruled below. The runs sit side by side at 64rem with `gap: 1.5rem`; the two install blocks the same, at `gap: 0.75rem` stacked.

**Rows.** A ledger item is 0.6875rem of padding above and below a hairline at 18px/1.5. A hosted row is 1.125rem above, 1.25rem below. A facts cell is 1.25rem above, 1.5rem below.

**Breakpoints** (min-width unless noted): 30rem (max: hide the film's commit, 404 title to 22px), 40rem (heading scale steps up), 50rem (inline code stops wrapping; ledger and facts go two-up), 64rem (hero, take, hosted, runs, setup go two-up; beat intervals widen), 80rem (display to 55px). Touch (`hover: none`) hides the section link and pads code so it scrolls out from under the copy button.

## Elevation & Depth

Flat, with no shadows anywhere. Depth is one hairline and three tiers of near-black: the page (`black`), a panel (`panel`, for code frames, runs, install blocks, the selected tab and the script cell) and an inset (`inset`, for inline code). A hovered script step lifts to `#101215` and the lit line to `#16191e`; both are tonal, not shadowed. The on-screen display chips sit on `rgb(0 0 0 / 0.55)` over the picture, which is the only translucency in the system. Expressive Code's frame shadow is set to `none` and its macOS dots to opacity 0.

The one `box-shadow` in the stylesheet is not depth: `inset 0 2px 0 white` draws the 2px top indicator on a selected file tab, matching Expressive Code's `editorActiveTabIndicatorTopColor`.

### Named Rules
**The Hairline Rule.** Separation is a 1px `hairline` line: a border, a rule, a divider, a track. Never a shadow, never a tonal gradient, never a second line weight.

**The Pixel Rule.** Pixels have no radius. `border-radius: 0` on every button, link button, tab, aside, kbd, code frame, menu toggle and range thumb, enforced with `!important` where Starlight would round them.

## Shapes

Square everything. Borders are 1px `hairline`; the only thicker strokes are the 2px tab indicator, the 2px scrubber track, the 2px focus outline (white, offset 2px, or inset 2px inside a frame) and the mark's corner brackets. Icons that exist are authored 16px SVGs on a 16-unit viewBox: `fill: none; stroke: currentColor; stroke-width: 1.5; stroke-linecap: square; stroke-linejoin: miter`, so a play triangle, a pause pair, a copy square and a tick are all drawn in the same square-ended line.

**The viewfinder frame.** A `.vc-viewfinder` is a 1px hairline box on black holding a 16:10 picture (the example app records at 1280x800). Its `::after` draws the brand mark's four corner brackets, inset 8px, each arm 14x2px in white at 85% alpha, as eight non-repeating solid `linear-gradient` strokes. On-screen display chips (`.vc-osd`, readout type on the 55% black ground, padding 3px 4px) sit 16px from the corners: REC with its red square top-left, the amber version top-right, `main@commit` bottom-left, the amber timecode bottom-right; STBY centred at 22px when there is no take; STOP top-left and `failure.png` bottom-left on a kept failure still. The hero's film puts the same display in a band under the picture instead (`.vc-film-osd`, hairline above, white readout, amber version and timecode, timecode pushed to the end), because the first screen should hide none of its subject.

Solid-colour `linear-gradient` is used only as a way to paint a rectangle (brackets, the scrubber's played fill); there is no tonal gradient in the system.

## Components

### Buttons
- **Shape:** square (0 radius), set in the machine's voice: Departure Mono 11px/11px, 0.08em tracking, uppercase, weight 400.
- **Primary** (Starlight `LinkButton`, default variant): white fill, black text, `padding: 1rem 1.25rem`. "Get started" in the hero and "Sign in with GitHub" at the hosted layer's door. Starlight appends its `right-arrow` icon when one is named.
- **Minimal** (`variant="minimal"`): white text on nothing, same type; "The source" beside the primary action.
- **Icon button** (`.vc-icon-button`): 2rem square, 1px hairline border, white 16px stroked SVG; hover turns the border white. Play/pause under the take.
- **Copy button** (`.vc-copy`): 2rem square, borderless, `dim` icon that turns white on hover; swaps to a tick with `data-done` for 1.6s and announces "Copied." through a visually hidden live region.
- **Hover / Focus:** hover is a colour step to white (text, border or stroke); focus is the global 2px white outline, inset 2px on tabs and script buttons.

### Chips
- **OSD chip** (`.vc-osd`): readout type on `rgb(0 0 0 / 0.55)`, padding 3px 4px, absolutely placed 16px from a frame's corner; white, or amber for a version and a timecode; the REC chip carries the 8px red square with a 6px gap.
- **Planned tag** (`.vc-planned`): black label type on amber, `padding: 0 0.35em`, 0.5rem before it; beside a planned price and nowhere else.
- **Verdict** (`.vc-verdict`): white text; `.is-fail` is black on white, bled 0.2em into its margins.
- **Live mark** (`.vc-run-mode.is-live::before`): a 6px white square before the word "Live".

### Cards / Containers
There are no cards. The containers that exist are instruments:
- **Panel** (`.vc-run`, `.vc-install-block`, `.vc-take`): 1px hairline border, `panel` ground (the take keeps black and lets its script cell go `panel`), zero radius, no shadow. A **panel head** runs along the top: label type in `dim`, `padding: 0.75rem 0.875rem` (runs) or a 2.5rem-tall bar with `0.875rem` start padding (install), hairline below; names in it (`.vc-id`) keep their case and go white; the exit code's number is amber and pushed to the end. Output inside is `pre` in the code face at 13 to 14px, `text-reading` or `code-ink`, pre-wrapped, no border or ground of its own, `padding: 0.875rem`.
- **Ruled list** (`.vc-ledger`, `.vc-hosted dl`, `.vc-facts`): no border around the whole; hairlines between rows and a hairline between the two columns; sub-heads in label type (white in the ledger and on terms, `dim` on the hosted columns' heads); bodies in `text-reading` on a 44 to 52ch measure.

### Inputs / Fields
The site has one input of its own, the take's scrubber (`.vc-scrub`): a native range made transparent over a 2px track that is `hairline` with the played portion painted white, a 1px `dim` tick 12px tall at every frame a script step began on, and a 3x18px white thumb. Starlight's search is left as shipped. Caret and selection are white on black; focus is the 2px white outline everywhere.

### Navigation
Starlight's chrome on black: the lockup (`public/brand/lockup-dark-bg.svg`) replaces the title; the theme switch is removed and the site is dark only (`DarkOnly.astro`, `NoThemeSelect.astro`). Sidebar group labels and "On this page" are label type in `dim`; the current page is Inter 500 white; groups stay collapsed unless they hold the page. Pagination links are square with hairline borders that turn white on hover. The section link beside a heading is a `#` in the machine's face (Inter for `h3`), `dim` until hovered, no underline, hidden on touch. The skip link, when focused, is a white block with black label type.

### The Take (signature)
A hairline box with three rows: file tabs (readout type in `dim`, `padding: 0.8125rem 1rem`, hairline right edge; the selected tab is white on `panel` with a 2px white top line), a body that is the script beside the viewfinder (5fr to 7fr at 64rem, the picture first on a phone), and a transport bar (icon button, scrubber, amber frame counter over `dim` total). Script lines are 13px/20px in the code face with right-aligned tabular numbers in `#7a7f89` on a 2.75rem gutter; comments `dim`, strings and numbers `text-reading`, keywords and calls white; the running line's ground lifts to `#16191e` and its number goes to reverse video. Steps are buttons that seek the video. A caption row below pairs a `small` hint with readout metadata (FRAMES, CAPTURED, FPS, RECORDED) whose terms are `dim` uppercase and whose values keep their case.

### The Film Band (signature)
The hero's viewfinder with its display as a band under the picture: hairline above, `padding: 0.625rem 1rem 0.6875rem`, `gap: 1.25rem`, readout type in white; the red square and REC first, then the amber version, then `main@commit` (hidden under 30rem), then the amber tabular timecode pushed to the end. Plays muted and looping; holds its poster under `prefers-reduced-motion`; the red square blinks only while playing.

### The Beat (signature)
Rule, air, heading, one paragraph, one receipt. The rule is the width of the receipt. The heading is Departure Mono 33/44 (22/33 on a phone). The paragraph is Inter 18px/1.65 in `text-lead` on 62ch. The receipt is one of: a take, a ruled two-column list, two run panels, a facts grid, two install blocks. No beat has two paragraphs or two receipts.

## Do's and Don'ts

### Do:
- **Do** set anything a machine would print in Departure Mono at 11px with 0.08em tracking and uppercase for a label, or 0.04em tracking and mixed case for a readout (a commit, a test id, a timecode, a file name).
- **Do** keep Departure Mono on its grid: 11, 22, 33, 44 or 55px, with a line height from the same grid.
- **Do** open every front-page section with a 1px `hairline` rule the width of the section's receipt, then one Inter 18px paragraph, then one receipt.
- **Do** lay out comparisons and lists as two ruled columns: hairlines between rows, a hairline between columns, label-type sub-heads, 3rem gutters.
- **Do** colour a number amber only when the page read it from an artifact (a published version, a recording's timecode or frame count, a run's exit code, a planned price); keep the red square for REC and for "fails".
- **Do** frame every picture as a viewfinder: a hairline box, the mark's corner brackets at 8px inset, and its provenance (REC, version, commit, timecode, or STOP and the file name for a kept failure) on the display.
- **Do** draw icons, when a control needs one, as authored 16-unit SVG paths with square caps and a 1.5 stroke in `currentColor`.
- **Do** use reverse video for emphasis: black on white, or black on amber for "planned".
- **Do** keep Inter at 400 and 500; `strong` is 500 and white.
- **Do** honour `prefers-reduced-motion`: the red square stops blinking and the film holds its poster.

### Don't:
- **Don't** add cards: no bordered-and-filled boxes with padding around marketing copy. The only filled panels are instruments that show output (a run, a terminal, a take).
- **Don't** introduce a third colour. No green for pass, no blue for links, no coloured asides or badges; Starlight's are remapped to greys on purpose.
- **Don't** use red or amber as text colour for a heading, a link, a border or a hover, or amber on a number the page invented.
- **Don't** use tonal gradients, shadows or blur. Solid `linear-gradient` strokes are a way to paint a rectangle, nothing more.
- **Don't** round a corner. `border-radius: 0` on everything, including Starlight's buttons, asides, kbd and the menu toggle.
- **Don't** use icon fonts or an icon library; the system has no glyph vocabulary beyond its own four stroked SVGs and Starlight's chrome.
- **Don't** set code in Departure Mono; code is the reader's `ui-monospace` stack in the `viewfinder` greys.
- **Don't** put long dashes in copy; a colon, a semicolon or a full stop does the work (PRODUCT.md, Brand Commitments).
- **Don't** let a heading or a rule inherit the prose measure on the front page; receipts and their rules take the full 76rem column while paragraphs keep 62ch.
- **Don't** stack two paragraphs or two receipts under one beat heading.
