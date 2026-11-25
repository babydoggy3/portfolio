# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS with minimal vanilla JS, no build step (decided by the user's brief). CSS is authored in `styles.css` and inlined into `index.html` by `tools/inline-css.py`. Hosted on GitHub Pages under the custom domain path `https://claudedaigan.com/portfolio/`, so every URL in the page is relative. The ported gym landing-page demo lives at `landing/` (with `_astro/`) and is not part of this design.

## Users

- Recruiters and hiring managers screening Claude Daigan for an operations, automation or virtual-assistant role. They arrive from a LinkedIn profile, a job application or a shared link, skim on desktop between other candidates, and want to know fast what he can do, whether the work is real, and how to reach him.
- Small-business owners evaluating him as an operations and automation VA. They mostly open the link on a phone, look for proof that he can take repetitive work off their plate, and decide whether to email.
- ASSUMPTION (no interview possible in this run): roughly half of visits are on phones; desktop is the recruiter's default.

## Product Purpose

A one-page personal portfolio for Claude Lester Daigan (Bohol, Philippines), an Operations & Automation Specialist. It shows the real work (automation projects with live demos, marketing creatives, Google Sheets systems), the work history behind it, and credentials, and it ends in one action: email him or open his LinkedIn. Success = a qualified visitor emails or connects on LinkedIn after seeing the work.

## Positioning

He came to automation from the operations seat itself: banking teller, HR assistant and aide, procurement officer, digital-marketing VA. He automates the repetitive work he used to do by hand (data entry, applicant screening, reporting, outreach) with Python, n8n and AI agents (LangChain, LangGraph, Deep Agents), and every project on the page has something a visitor can open and use.

## Operating Context

- Visitors compare several candidates or freelancers in one sitting; the page must make its case in the first screen and stay scannable.
- Proof is external: live demos on lackey43.duckdns.org subdomains, Google Sheets and Forms, Google Drive files, LangChain Academy and Coursera certificate pages.
- This portfolio is kept separate from his marketing site (claudedaigan.com root). It must not link to the marketing site and must not show WhatsApp, Messenger or a phone number.

## Capabilities and Constraints

- Content source of truth: the reference Astro portfolio's `src/config.ts` (name, title, description, availability, aboutMe, skills, marketing creatives in order, projects with links, experience, education, certifications). Copy is used verbatim; only obvious typos (double spaces) are fixed.
- Contact channels: email `claude_daigan@protonmail.com` and LinkedIn `https://linkedin.com/in/claude-lester-d-a84558288/`. No others.
- The "Gym Membership Landing Page" creative links to the ported page at the relative path `landing/`.
- Five short MP4 reel cuts ship as files with poster frames; they must not autoplay.
- Performance target: Lighthouse mobile >= 90. No render-blocking external CSS or fonts.

## Brand Commitments

- Name shown as "Claude Daigan"; title "Operations & Automation Specialist"; availability "Available".
- Voice: plain, first-person, unglamorous and specific ("I care about the unglamorous details, because that is where automation either holds up or quietly breaks."). No hype.
- Real headshot (`profile.png`, square) is the only photo of him.
- Must not reuse the marketing site's visual world (Messenger-thread layout, navy and gold).

## Evidence on Hand

- 11 automation and Sheets projects with live links (config.ts `projects`).
- 17 marketing creatives: 5 Canva concept posts, 5 concept reel/video cuts (MP4 + poster), a lead magnet, the gym landing page, a "Client Testimonial" social-post design, a carousel and three earlier reel thumbnails linking to Google Drive.
- 5 roles 2019-2026, 1 degree, 9 certificates (5 with local images, 4 with Coursera-hosted images).
- Absent and never to be fabricated: client names beyond those in the creatives, metrics, results percentages, testimonials text, years-of-experience totals, pricing.
- Concept creatives are labelled "Concept" exactly as in config.

## Product Principles

1. Show the working thing before describing it: every project leads with its live link.
2. Specific over impressive: plain verbs, real tool names, no invented numbers.
3. One way to act, everywhere: email first, LinkedIn second.
4. Respect the skim: a recruiter must get name, role and contact in one screen, and each section must be readable in seconds.

## Accessibility & Inclusion

WCAG 2.2 AA contrast, keyboard-reachable links, visible focus, captions-free short muted reels with poster frames and controls, reduced-motion respected. ASSUMPTION: no product-specific accessibility needs beyond AA were stated.
