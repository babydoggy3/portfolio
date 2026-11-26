---
name: Claude Daigan Portfolio
description: A provincial moviehouse at night, with his name on the marquee and the work in the poster cases.
colors:
  night: "#0c0b10"
  night-up: "#15141b"
  steel: "#23212b"
  steel-hi: "#3a3744"
  rule: "#2a2832"
  lamp-white: "#f1ebdf"
  dusk-muted: "#a49eae"
  bulb-amber: "#ffc25a"
  bulb-amber-hi: "#ffd88f"
  amber-ink: "#1c1306"
  bulb-off: "#4a3b26"
  milk-glass: "#f6edd8"
  glass-edge: "#e3d2ad"
  letter-black: "#17141a"
  letter-red: "#a3241b"
  case-mat: "#07070a"
typography:
  display:
    fontFamily: "Sofia Sans Extra Condensed, sans-serif"
    fontSize: "clamp(3.2rem, 1rem + 10.4vw, 10.5rem)"
    fontWeight: 860
    lineHeight: 1
    letterSpacing: "0em"
  headline:
    fontFamily: "Sofia Sans Extra Condensed, sans-serif"
    fontSize: "clamp(2.75rem, 1.4rem + 5vw, 5.75rem)"
    fontWeight: 800
    lineHeight: 1
  title:
    fontFamily: "Sofia Sans Extra Condensed, sans-serif"
    fontSize: "clamp(2rem, 1.2rem + 2.6vw, 3.6rem)"
    fontWeight: 800
    lineHeight: 0.94
  body:
    fontFamily: "Sofia Sans, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  lede:
    fontFamily: "Sofia Sans, sans-serif"
    fontSize: "clamp(1.15rem, .95rem + .9vw, 1.7rem)"
    fontWeight: 520
    lineHeight: 1.32
  label:
    fontFamily: "Sofia Sans Extra Condensed, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 650
    letterSpacing: "0.1em"
rounded:
  none: "0px"
  plate: "2px"
  window-arch: "999px 999px 0.3rem 0.3rem"
  bulb: "50%"
spacing:
  gutter: "clamp(1rem, 4vw, 3rem)"
  section: "clamp(4.5rem, 10vw, 8rem)"
  bulb-pitch: "1.5rem"
  case-frame: "6px"
components:
  ticket-primary:
    backgroundColor: "{colors.bulb-amber}"
    textColor: "{colors.amber-ink}"
    rounded: "{rounded.none}"
    padding: "0 1.6rem 0 1.15rem"
    height: "3.5rem"
  ticket-primary-hover:
    backgroundColor: "{colors.bulb-amber-hi}"
    textColor: "{colors.amber-ink}"
  line-button:
    backgroundColor: "transparent"
    textColor: "{colors.lamp-white}"
    rounded: "{rounded.plate}"
    padding: "0 1.3rem"
    height: "3.5rem"
  line-button-hover:
    textColor: "{colors.bulb-amber}"
  letterboard:
    backgroundColor: "{colors.milk-glass}"
    textColor: "{colors.letter-black}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
  poster-case:
    backgroundColor: "{colors.case-mat}"
    rounded: "{rounded.none}"
    padding: "0"
  status-lamp:
    backgroundColor: "transparent"
    textColor: "{colors.bulb-amber}"
    typography: "{typography.label}"
    rounded: "{rounded.plate}"
    padding: "0.2rem 0.7rem 0.2rem 0.55rem"
  nav-link:
    textColor: "{colors.dusk-muted}"
    typography: "{typography.label}"
    padding: "0.6rem 0 0.5rem"
---

# Design System: Claude Daigan Portfolio

## Overview

**Creative North Star: "The Moviehouse at Night"**

The page is a provincial cinema seen from the street after dark. His name is up on the marquee in slotted plastic letters on backlit milk glass, a steel canopy carries rows of chaser bulbs, the creatives hang in steel poster cases, the projects read like a program of showings, work history rolls like end credits, and the page closes on a second marquee where the box office is open. The ground is a blue-black night; light is the only accent, and light always means something is live or on offer.

Type is the spectacle. The letterboard face is set as large as the viewport allows and every letter sits slightly askew on its rail, the way a changer hangs them by hand. Everything outside the boards is quiet: warm lamp-white prose, dusk-grey captions, generous dark space between sections. The first viewport is the marquee plus the box office, with the actual creatives already drifting past underneath.

This world replaced the earlier "Personal Data Sheet" green form world; that look, the white/blue rounded-card template, and the marketing site's navy/gold Messenger-thread world are all anti-references.

**Key Characteristics:**
- Blue-black night ground, never pure black, never a gradient wash.
- Backlit milk-glass letterboards in black and cinema-red condensed letters, each letter its own slightly rotated tile.
- Amber bulb light as the single accent: chaser rails, the AVAILABLE lamp, skill bullets, links, the ticket CTA.
- Steel-framed poster cases with a near-black mat; artwork is never cropped past its headline.
- Motion belongs to the marquee: bulbs that chase a few rounds then settle lit, letters put up one by one on the two signature boards, posters drifting under the canopy.

## Colors

A night palette: one warm light source (amber) and one lit material (milk glass) against blue-black steel.

### Primary
- **Bulb Amber** (#ffc25a): lit bulbs, the AVAILABLE lamp, the ticket CTA fill, project links, skill bullets, focus rings and text selection. Lighter **Bulb Amber Hi** (#ffd88f) is its hover state; **Amber Ink** (#1c1306) is the only text colour allowed on amber.

### Secondary
- **Milk Glass** (#f6edd8) falling off to **Glass Edge** (#e3d2ad): the backlit letterboard panel, lit from above with a radial falloff. Only letterboards and certificate mats (#ece5d6) use a light ground.
- **Letter Red** (#a3241b): the red plastic letters (the title line on the hero marquee). Never used off the glass.

### Neutral
- **Night** (#0c0b10): the page ground.
- **Night Up** (#15141b) and **Steel** (#23212b): canopy bodies and every case frame; **Steel Hi** (#3a3744) is the 1px highlight edge on frames.
- **Rule** (#2a2832): hairline dividers between program rows and above the footer.
- **Lamp White** (#f1ebdf): primary text on night.
- **Dusk Muted** (#a49eae): captions, kinds, dates, notes (about 7:1 on Night).
- **Bulb Off** (#4a3b26): unlit bulbs on the canopy rails.
- **Case Mat** (#07070a): behind posters and videos inside cases.

### Named Rules
**The Lit Means Live Rule.** Amber appears only on things that are on: the availability lamp, actions, live links, lit bulbs. Never as a decorative wash or a glow behind content. A project link to a running demo carries a lit bulb before its label (`.go.live`); links to sheets and forms do not.

**The Glass Only Rule.** Light grounds exist only as letterboards and certificate mats. Sections, cards and panels stay on the night.

## Typography

**Display Font:** Sofia Sans Extra Condensed (fallback sans-serif)
**Body Font:** Sofia Sans (fallback sans-serif)

Both are self-hosted as subsets (Basic Latin plus · – — ’ ‘ “ ” … © and NBSP; condensed limited to wght 600–900, regular to 400–700, about 15 KB each). Both subsets are preloaded (A/B on Lighthouse mobile: preloading only the condensed one left a late body-font swap that re-laid the page after first paint, median 88.5 vs 93). Fallback stacks stay one generic family long: each missing family name costs a system font lookup on first layout. Re-run the subset (fontTools `varLib.instancer` then `subset --flavor=woff2`) if copy adds a glyph outside that set.

**Character:** One superfamily in two widths. The extra-condensed cut is the marquee letter: tall, blunt, heavy, uppercase, made to be read from across the street. The regular width is the program text: open, warm and plain.

### Hierarchy
- **Display** (860, clamp(3.2rem, 1rem + 10.4vw, 10.5rem), 1): the name on the hero marquee only, as letter tiles.
- **Headline** (800, clamp(2.75rem, 1.4rem + 5vw, 5.75rem), 1): section letterboards; the closing marquee goes to 6.25rem.
- **Title** (800, clamp(2rem, 1.2rem + 2.6vw, 3.6rem), 0.94, uppercase): project titles and credit roles (credits cap at 2.9rem).
- **Lede** (520, clamp(1.15rem, .95rem + .9vw, 1.7rem), 1.32): the statement, About text, contact lede, max about 34–40ch.
- **Body** (400, 1.0625rem, 1.6): descriptions, max 54ch.
- **Label** (650–750, 1–1.3rem, 0.06–0.18em tracking, uppercase, condensed): nav, lamp, dates, links, buttons.
- **Tools line** (Sofia Sans 500, 0.8125rem, 0.03em tracking, sentence case, Dusk Muted): the tools under each creative and certificate dates; small text stays in the regular width so it stays legible.

### Named Rules
**The Two Widths Rule.** Condensed is for anything that would be lettered on the building (boards, titles, labels, buttons); regular width is for anything you would read in the program. Never set prose in the condensed cut.

**The Hand-Hung Rule.** Board letters are separate tiles with small, varied rotations (−1.4° to 1.8°) and offsets. Never set a board as a straight text string.

**The Slotted Board Rule.** Every board reads as a changeable letterboard: rail grooves run under each row of tiles (a repeating-linear-gradient on `.board .letters`, pitched to the tile height plus row gap), and each letter sits on its own faint tile (`rgb(255 255 255 / .35)`, 1px drop line, inset bottom edge, .02em gap between tiles).

## Layout

One centred axis governs the page, like a facade: the canopy, section boards and credits all centre on it. Content max width 88rem with a fluid gutter (clamp(1rem, 4vw, 3rem)); sections are separated by clamp(4.5rem, 10vw, 8rem) of night.

- **Hero:** full-width canopy, then the box office row (arched window, lamp + statement, actions), then a full-bleed poster reel.
- **Creatives wall:** 4 columns at 48rem and up, 2 below; the first poster spans 2×2 (full width on phones) so the grid always fills whole rows (17 items + 3 extra cells = 20).
- **Program (projects):** 5:7 split of title and body at 48rem and up, stacked below.
- **Credits:** two columns meeting at the axis: the role right-aligned on the left spanning all rows, then company, dates and notes stacked on the right (`"role org" "role dates" "role notes"`). Below 48rem one centred column in the order role, company, dates, notes. Dates never sit above the role (that reads as an eyebrow).
- **Lobby cards (certificates):** 3 columns, becoming image-left rows below 40rem.
- Breakpoints: 64rem (box office actions drop below), 48rem, 40rem (phone).

## Elevation & Depth

Depth is light, not shadow. Surfaces are flat steel on night; the letterboards read as lit because they are the only light grounds. The single shadow is under the round play button so it lifts off busy video posters.

### Shadow Vocabulary
- **Play lift** (`box-shadow: 0 6px 18px rgb(0 0 0 / .45)`): the video play button only.

### Named Rules
**The No Glow Rule.** No coloured halos or glow shadows on the night ground. Bulbs carry their own small light inside their drawing; nothing else glows.

## Shapes

Square and mechanical: steel frames with 0 radius, 6px case borders with a 1px highlight edge, 2px plates for outline buttons and the lamp. Two curves only, both from the building: the arched box-office window (999px top corners) and round bulbs. The ticket CTA has punched semicircular notches on both ends and a dashed tear line after its icon stub.

## Components

### Buttons
- **Shape:** the primary is a ticket: square body with 0.5rem punched notches at left and right centre (mask on a pseudo-element so focus rings are never clipped).
- **Primary (ticket):** Bulb Amber fill, Amber Ink text, condensed 800 uppercase at 1.4rem, 3.5rem tall, mail icon in a stub divided by a 2px dashed tear line.
- **Hover / Focus:** fill lifts to Bulb Amber Hi and the icon nudges; press scales the stub to 0.97; focus is a 3px amber outline offset 3px.
- **Secondary (line):** transparent with a 1.5px lamp-white border at 40%, condensed 750 uppercase; hover turns border and text amber.

### Letterboard
- **Style:** milk-glass panel with radial top light, set in a steel frame (5–9px) with a 1px highlight; rail grooves under each row; letters are individual faint tiles, black by default, red for the secondary line.
- **Canopy variant:** the hero and closing boards sit inside a steel canopy with bulb rails above and below.

### Poster case
- **Style:** 4:5 case, 6px steel border, Case Mat inside; artwork whose ratio is not 4:5 is contained, never cropped.
- **Video:** poster frame shown, amber round play button centred; on click the button is removed, native controls appear and the video plays with sound; on fine-pointer hover a muted loop previews after 180ms.
- **Caption:** title (680, links out with an arrow-out icon), kind and tools in Dusk Muted.

### Navigation
- **Style:** a single row of condensed uppercase links in Dusk Muted with 0.1em tracking; hover turns them Lamp White with a 2px amber underline. On phones the row scrolls sideways under a right-edge fade.

### Status lamp
- A small amber-bordered plate with a lit bulb and AVAILABLE in tracked condensed caps; the only status indicator on the page.

## Do's and Don'ts

### Do:
- **Do** set every section title as a letterboard of individual tiles, with screen-reader text in an sr-only span and the tiles aria-hidden.
- **Do** keep motion optional and inside `prefers-reduced-motion: no-preference`: chaser bulbs run 4 rounds (about 4.2s, under the WCAG 2.2.2 five-second limit) and settle fully lit (`forwards`, last keyframe opacity 1); they start on the first scroll or pointer move once a canopy is on screen and re-run only on pointerenter over the canopy. Scroll-driven motion lives in `@supports (animation-timeline: view())`: the reel drift, letters put up one by one on `#creatives-h` and `#contact-h` only (one animation per board driving a registered `--put`, never one animation per letter), and the push-in on the feature poster only. Every other board is static.
- **Do** keep first-viewport content visible at rest: no opacity-0 starts, no load-time staggered entrances.
- **Do** mark links that leave the page with the arrow-out icon and "(opens in a new tab)" sr-only text.
- **Do** keep every URL relative; the page lives under /portfolio/.

### Don't:
- **Don't** reuse the Personal Data Sheet form look, the white/blue rounded-card template, or the marketing site's navy/gold Messenger-thread world.
- **Don't** add coloured glow shadows, gradient text, glassmorphism or radial halo washes on the night ground.
- **Don't** use amber for decoration; it marks only lit, live or actionable things.
- **Don't** autoplay video with sound or add looping motion that keeps running off-screen.
- **Don't** set prose in the condensed face or boards in the regular one.
