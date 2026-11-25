---
name: Claude Daigan Portfolio
description: The portfolio as a filled-in personal record form
colors:
  form-green: "#0e4a36"
  form-green-deep: "#093526"
  form-green-soft: "#2c5c49"
  stamp-vermilion: "#b8301b"
  form-paper: "#f1f5ef"
  label-tint: "#dfe9dc"
  desk: "#d9e3d6"
  entry-ink: "#15191f"
  entry-ink-soft: "#39424b"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "calc(var(--box) * 0.64)"
    fontWeight: 800
    lineHeight: 1
  headline:
    fontFamily: "Archivo Narrow, Arial Narrow, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.8vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.05em"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 700
    lineHeight: 1.25
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Archivo Narrow, Arial Narrow, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.05em"
rounded:
  none: "0px"
spacing:
  cell-y: "0.85rem"
  pad: "clamp(1rem, 2.2vw, 1.75rem)"
  label-col: "11rem"
components:
  button-primary:
    backgroundColor: "{colors.form-green}"
    textColor: "{colors.form-paper}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.25rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.form-green-deep}"
    textColor: "{colors.form-paper}"
  button-plain:
    backgroundColor: "transparent"
    textColor: "{colors.form-green}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.25rem"
    height: "3rem"
  button-plain-hover:
    backgroundColor: "{colors.label-tint}"
  section-bar:
    backgroundColor: "{colors.form-green}"
    textColor: "{colors.form-paper}"
    typography: "{typography.headline}"
  field-label:
    backgroundColor: "{colors.label-tint}"
    textColor: "{colors.form-green}"
    typography: "{typography.label}"
    width: "{spacing.label-col}"
  status-stamp:
    textColor: "{colors.stamp-vermilion}"
    padding: "0.45rem 0.7rem"
  play-button:
    backgroundColor: "{colors.form-paper}"
    textColor: "{colors.form-green}"
    rounded: "{rounded.none}"
    size: "3.5rem"
  play-button-hover:
    backgroundColor: "{colors.label-tint}"
  na-cell:
    backgroundColor: "{colors.form-paper}"
    textColor: "{colors.entry-ink}"
  signature-row:
    backgroundColor: "{colors.form-paper}"
    textColor: "{colors.entry-ink}"
---

# Design System: Claude Daigan Portfolio

## Overview

**Creative North Star: "The Filled-In Record"**

The page is one printed form, a Philippine-style personal data sheet, already completed by its owner. Every recruiter and HR person has typed into a sheet like this; here the boxes hold his work instead of blanks. The printed parts of the form (rules, field-label column, solid section bars) are one deep green ink on pale security-green paper; everything he "filled in" is near-black. One vermilion rubber stamp marks his status.

Density is a form's density: tight label/entry rows, hairline rules between every field, no floating cards, no decoration that a print shop would not have set. Expression comes from the name typed letter by letter into comb boxes at poster scale, the passport-photo box, and the stamp. The previous Tailwind look (white, blue accent, rounded cards, dot grid) and the marketing site's Messenger/navy-gold world are rejected for this surface.

**Key Characteristics:**
- One sheet on a desk: a bordered paper panel centred on a slightly darker green field.
- Printed vs. filled: green for the form, near-black for his entries.
- Square everything: 0 radius, 1px and 2px ink rules, no shadows.
- Labels sit in a tinted left column, never as eyebrows above headings.
- State is a mark: ticked boxes, a rubber stamp, an arrow-out glyph on links that leave the page.

## Colors

One ink, one paper, one stamp: a committed green form with near-black entries and a single vermilion accent.

### Primary
- **Form Green** (form-green): every printed element: section bars, rules, label text, primary button, link colour, ticked boxes. Carries roughly a third of the screen through the solid section bars.
- **Deep Form Green** (form-green-deep): hover state of primary buttons and links.

### Secondary
- **Stamp Vermilion** (stamp-vermilion): the AVAILABLE status stamp and the focus ring. Nothing else.

### Neutral
- **Form Paper** (form-paper): the sheet ground and text on green bars.
- **Label Tint** (label-tint): the field-label column, table header row, certificate image wells, plain-button hover.
- **Desk** (desk): page background around the sheet on wide screens.
- **Entry Ink** (entry-ink): all filled-in content: name letters, titles, body copy.
- **Soft Entry Ink** (entry-ink-soft): secondary entry text such as dates, tool lists and intros.

### Named Rules
**The Printed vs. Filled Rule.** Green is for what the form prints; near-black is for what he wrote. Never set his content in green or the form's furniture in black.

**The One Stamp Rule.** Vermilion appears once per screen at most, as a stamp or a focus ring. It is never a fill, a link colour or a decoration.

## Typography

**Display Font:** Archivo (with Helvetica Neue, Arial)
**Body Font:** Archivo
**Label Font:** Archivo Narrow (with Arial Narrow)

**Character:** A plain grotesk of the kind form printers use, at two widths: Narrow caps are the printed form, regular Archivo is the hand that filled it in. Both self-hosted variable WOFF2 (latin subset), preloaded.

### Hierarchy
- **Display** (800, 0.64 x comb box, line-height 1): the name, one letter per comb box. Box size clamp(2.6rem, 7.4vw, 7rem) on desktop; on phones the six boxes fill the entry column exactly. Tracks are `repeat(auto-fill, minmax(var(--box), 1fr))` and each box is `aspect-ratio: 1`, so the row is always filled by whole square boxes.
- **Headline** (Narrow 700, uppercase, clamp(1.25rem, 1.1rem + 0.8vw, 1.75rem), 0.05em tracking): section bars.
- **Title** (600-700, 1.0625-2rem): position title in the hero, project names, creative and certificate titles.
- **Body** (400, 1.0625rem / 1.55): summaries and descriptions, capped at 60ch.
- **Label** (Narrow 700, uppercase, 0.8125rem, 0.05em): field labels, table headers, "Open" / "Built with".

### Named Rules
**The Two Widths Rule.** Narrow is only ever printed furniture; regular width is only ever content. Do not set entries in Narrow caps.

## Layout

A single sheet, max-width 78rem, centred with a 2px ink border on wide screens and edge-to-edge on phones. Inside, every section is a solid green bar followed by field rows on one label column (11rem desktop, 8.5rem tablet, 5.75rem phone) plus an entry column. Grids of entries (creatives, certificates) are true cell grids with 1px ink lines (4/3/2 columns for creatives, 3/2/1 for certificates) and reflow by whole cells. Projects are a ledger: name cell, description, and an "Open / Built with" column, collapsing to stacked rows on phones. Experience and education are real tables that become labelled stacked records under 40rem. Breakpoints: 68rem, 52rem, 40rem.

**The Whole Cells Rule.** Comb boxes and grid cells never render fractionally: the comb uses auto-fill minmax(box, 1fr) tracks with square boxes and clips spare rows (the neighbouring rule closes the row, so no doubled line), and the leftover slots of an entry grid's last row are one N/A cell, never unruled holes.

## Elevation & Depth

Flat. There are no shadows anywhere; depth comes from the sheet sitting on a darker desk colour and from the contrast between the tinted label column and the paper.

## Shapes

Square corners throughout (0px). Borders are ink rules: 2px for the sheet edge, masthead and footer, 1px between fields and cells. The only rotated element is the status stamp (-4deg) with a 3px vermilion border. The only filter is the stamp's ink filter.

## Components

### Buttons
- **Shape:** square (0px), 2px ink border, min-height 3rem.
- **Primary:** form-green fill, paper text, mail icon; "Email me".
- **Hover / Focus:** fill deepens to form-green-deep over 180ms (ease-out-expo); focus is a 3px vermilion outline offset 2px.
- **Plain:** transparent with green text and border; hover tints to label-tint. Used for LinkedIn.

### Section Bar
Solid form-green band, Narrow uppercase headline in paper colour, full sheet width. Every section opens with one; no numbering.

### Field Row
Tinted label cell on the left, entry on the right, 1px rule below. On phones, labels become a tinted strip above the entry.

### Name Comb (signature)
The h1: "First name" and "Surname" label cells beside letter-per-box combs, followed by empty boxes as a real form would leave them. Screen readers get the plain name from visually hidden text; the comb is aria-hidden.

### Status Stamp (signature)
Vermilion uppercase "Available" in a 3px vermilion frame, rotated -4deg. One per page. It reads as rubber ink through the inline SVG filter `#ink` (feTurbulence fractalNoise, baseFrequency .9, 2 octaves, into feDisplacementMap scale 2.5) applied with `filter: url(#ink)`, plus `mix-blend-mode: multiply` and opacity .92. The word stays a real text element; large bold text keeps contrast above 3:1.

### Entry Cell
Media on top (4:5 cover for creatives, 16:10 contain on label-tint for certificates), then title link, kind in Narrow green, tools in soft ink. Any creative whose source is not 4:5 (square posts and cuts, the landing-page shot, 9:16 reels) carries class `fit`: `object-fit: contain` on label-tint, so headlines are never cropped. Videos ship with a real `poster`, muted, playsinline, preload none and no native controls until played.

### Video Play Button
A 3.5rem paper square with a 2px ink rule and a drawn triangle, centred on the poster, `aria-label="Play <title>"`. Click sets `controls`, calls `play()`, removes the button and moves focus to the video. Hover tints to label-tint. Only one video plays at a time.

### N/A Cell
The form's convention for a field with nothing to enter: a ruled cell with a 1px soft-ink diagonal strike (inline SVG, non-scaling stroke) and "N/A" in bold entry ink on a paper patch. It closes the last row of an entry grid, spanning the leftover columns: creatives (17) span 3 / 1 / 1 at 4 / 3 / 2 columns; certificates (9) show only at 2 columns (span 1) and are hidden at 3 and 1. aria-hidden. Recompute the spans when item counts change.

### Signature Row
The form closes with a final contact row: "Signature" label and the typed name "Claude Lester Daigan" in regular Archivo 600 above a 1px ink rule, then a "Date accomplished" label and "2026". Labels are bottom-aligned like a sign-here line; on phones every label becomes a strip above its entry. Never a handwriting font.

### Navigation
A row of Narrow links in the masthead beside the "Portfolio record" form title; underline in ink on hover. Wraps to two lines on phones.

## Do's and Don'ts

### Do:
- **Do** put every new block on the label column grid with a 1px ink rule below it.
- **Do** keep the name comb as the largest element in the first viewport.
- **Do** mark links that leave the page with the arrow-out icon and "(opens in a new tab)" text for screen readers.
- **Do** keep all URLs relative; the page lives under /portfolio/.

### Don't:
- **Don't** add rounded cards, shadows, gradients or a second accent colour.
- **Don't** put a kicker or eyebrow above a heading; labels live in the left column.
- **Don't** use vermilion for anything except the status stamp and focus ring.
- **Don't** reuse the marketing site's Messenger-thread or navy-and-gold look, or link to the marketing site.
- **Don't** add autoplaying media or entrance animations.
