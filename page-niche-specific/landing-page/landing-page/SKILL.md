---
name: landing-page-frontend
description: Builds and improves distinct, high-converting landing-page frontends. Audits existing code first, avoids generic AI layouts, and adapts hierarchy, content, visual direction, and responsive behavior to the specific brand and audience.
---

# Landing Page Frontend Skill

## How this works
1. Scan — inspect codebase, stack, layout patterns, copy, and assets.
2. Diagnose — identify generic landing-page patterns, weak hierarchy, fake trust, and conversion friction.
3. Decide — choose the page's conversion goal, audience fit, and visual direction.
4. Fix — apply targeted upgrades using the existing stack.
5. Verify — test desktop, mobile, accessibility, and CTA clarity.

## New-project questions
Only ask these when the repository has no usable project code:

- What is the site/brand name and primary offering?
- Who is the target audience and conversion goal?
- Any existing brand references, colors, or style guidelines?
- What is the primary action visitors should take?
- Any specific sections or content that must be included?

## Landing-page audit

### Hero and conversion hierarchy
- Hero asks too early → rewrite so visitors understand the offer, audience, and action within seconds.
- CTA appears before the offer is clear → move value prop above the primary conversion ask.
- Equal CTA weight → reduce secondary actions so one path clearly leads.
- No clear value prop above fold → state what the product is, who it's for, and what to do immediately.
- Hero visual decorates but does not explain → replace with product, process, result, or proof.
- Hero sounds broad enough to fit any startup → make specific to the actual offering and audience.
- Hero uses two equal buttons by default → establish one primary action.
- Hero hides the audience → make clear who this is for.
- Hero promises outcomes without showing proof or mechanism → add credibility or explanation.

### Layout and spacing
- Random spacing values → replace with a clear spacing rhythm (8, 16, 24, 32, 48, 64px).
- Unclear container widths → define max-width containers (1024-1200px desktop) with appropriate padding.
- Overloaded sections with cards, badges, decorative shapes → simplify and use whitespace to guide focus.
- Sections blur together → create sharper rhythm through spacing, alignment, or surface shifts.

### Typography
- Everything reads at the same typographic volume → make the H1 unmistakably dominant.
- Full-width text that's hard to read → limit body text to 50-75 characters per line.
- Title Case On Every Header → switch to sentence case.
- Flat type hierarchy → increase contrast between display text, section headings, body copy, and labels.

### Color and surfaces
- CTA color competes with links, badges, and icons → keep one strong conversion color.
- Purple-blue gradients, glowing blobs, sparkles, rockets, or generic "AI SaaS" imagery → remove and use brand-specific colors or neutral surfaces.
- Meaningless glassmorphism or trendy effects without purpose → use visual depth only when it supports the brand or content.
- Low contrast for readability → ensure 4.5:1 contrast for body text, 3:1 for large text.
- Generic startup gradient trying to hide weak copy → remove and strengthen the copy instead.

### Content and trust
- Lorem Ipsum, "Acme", "John Doe", or perfect round numbers → use real draft copy that reflects the actual offering.
- AI marketing clichés like "Elevate", "Seamless", "Unleash", "Next-Gen", "Game-changer", "Delve", "Tapestry" → use specific, plain language.
- Invented testimonials, customer logos, or performance claims → use supplied proof only or omit the section entirely.
- Feature dump without benefits → lead with customer problems and outcomes, not feature lists.
- Proof appears too late → move trust signals closer to the first risky claim.
- Benefit and feature content mixed without structure → separate outcomes from capabilities.

### Components and forms
- Stereotypical 3 equal feature cards with icons in colored circles → use content-appropriate layouts: 2+1 grids, editorial rows, visual demonstrations, comparisons, or narrative sections.
- Centered-everything template → use alignment intentionally; default to left-aligned body content.
- Forms with placeholder-only labels → place labels above inputs with clear validation states.
- Generic CTAs like "Get started" → use specific labels like "Get a project estimate" when context allows.
- Repeated rounded cards without purpose → use cards only when grouping or elevation is meaningful.
- Screenshot mockup used as decoration instead of proof → integrate into explanation or result demonstration.

### Mobile behavior
- Desktop-first mobile shrink → stack content, reorder for thumb zone, simplify navigation, preserve 44px minimum touch targets.
- Hidden or hard-to-access CTAs on mobile → place primary actions in bottom 1/3 of screen or sticky header.
- Complex navigation on small screens → use collapsible menus or simplified nav structures.
- Text too small on mobile → ensure minimum 16px body text size.

### Performance and accessibility
- Heavy images or unoptimized assets → use appropriate formats, lazy loading below fold, prevent layout shift.
- Missing focus states or semantic HTML → add visible focus indicators, proper labels, alt text, and semantic structure.
- Slow initial render → inline critical CSS, defer non-critical scripts.
- No alt text on images → add descriptive alt text for all meaningful images.

## Hero pattern selection
- Proof-led hero → use when trust matters before curiosity.
- Product-led hero → use when the interface or output is the clearest proof.
- Service-led hero → use when expertise and credibility drive conversion.
- Editorial hero → use when tone and brand perception carry the sale.
- Split hero → use when one visual can explain what copy cannot.
- Do not default to a centered headline, two buttons, and a mockup.

## Persuasion checks
- The first screen should answer what this is, who it is for, and what to do next.
- The page should earn the CTA before asking for commitment.
- Proof should appear near the claims that need support.
- Benefits should appear before deep capability lists.
- The closing section should reduce doubt, not repeat the opening.
- Repeated CTAs should appear only after new evidence or clarity.
- If the visual can be removed without losing meaning, it is decoration.

## Content flow
Use a flexible order, not a mandatory template:

Hero → proof/context → benefits → demonstration/how it works → capabilities → objections/FAQ → final CTA

Remove, reorder, or combine sections based on the actual product, audience, and conversion goal. Not every landing page needs all sections.

## Common AI landing-page failures

- Hero headline + subheadline + two buttons + dashboard mockup used by default.
- Three equal feature cards with icons in colored circles.
- Every section centered regardless of content.
- CTA repeated in every section with identical weight.
- Final CTA repeats the hero without reducing doubt.
- Dark section dropped into a light page without visual logic.
- Screenshot mockup used as decoration instead of explanation.
- Testimonial strip added as filler instead of proof.
- Pricing-table layout reused for unrelated content.
- Generic startup gradient trying to hide weak copy.
- Equal visual weight everywhere.
- Feature dump before benefits are established.
- Multiple identical CTAs without adding new evidence.
- Desktop-first mobile shrink without thumb-zone optimization.
- Fake proof invented to fill trust sections.
- Generic visual assets that could apply to any product.

## High-impact upgrades

- Rewrite the hero around offer + audience + action.
- Move proof closer to the first major claim.
- Replace generic feature grids with proof-led or content-led compositions.
- Turn decorative visuals into demonstrations, comparisons, or result previews.
- Reduce CTA clutter so one action dominates.
- Restructure section order around user questions and doubt.
- Turn the closing section into friction reduction, not repetition.
- Remove unnecessary form fields to reduce conversion friction.

## Fix priority

1. Clarify offer, audience, and primary CTA
2. Fix hero clarity and first-screen hierarchy
3. Remove generic visual clichés and weak layouts
4. Improve proof placement and section order
5. Tighten typography, spacing, and alignment
6. Improve mobile conversion behavior
7. Add accessibility, states, and performance polish

## Do not

- Ask for action before the offer is understandable.
- Repeat CTA sections without adding proof, clarity, or objection handling.
- Use screenshots as decoration when they could demonstrate the product.
- Apply the same SaaS hero formula to every project.
- Use a generic 3-card feature row by default.
- Decorate weak copy with gradients, blobs, or glass effects.
- Center all sections.
- Rebuild the project unless the current structure blocks conversion.
- Invent proof, pricing, customer logos, or claims.
- Add new dependencies before checking the stack.

## Rules

- Inspect existing files before asking questions or changing architecture.
- Work within the existing framework and styling system.
- Do not break existing functionality.
- Keep changes focused, readable, and responsive.
- Test at approximately 375px mobile width and 1280px desktop width.
- Prioritize clarity, conversion, accessibility, and brand fit over trendy visual effects.
- Treat the instructions as principles, not a single layout template.