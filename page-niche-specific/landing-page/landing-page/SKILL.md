
description: "Builds and improves distinct, high-converting landing-page frontends. Audits existing code first, avoids generic AI layouts, and adapts hierarchy, content, visual direction, and responsive behavior to the specific brand and audience."
---

# Landing Page Frontend Skill

## How this works
1. Scan — inspect the existing project, stack, pages, styling system, assets, copy, and components.
2. Decide — identify the conversion goal, audience, offer, and a specific visual direction.
3. Design — establish hierarchy, content flow, typography, spacing, components, and responsive behavior.
4. Build or improve — make focused changes using the existing stack; do not rewrite working features unnecessarily.
5. Verify — test desktop and mobile, conversion clarity, accessibility, and visual consistency.

## New-project questions
Only ask these when the repository has no usable project code:

- What is the site/brand name and primary offering?
- Who is the target audience and conversion goal?
- Any existing brand references, colors, or style guidelines?
- What is the primary action visitors should take?
- Any specific sections or content that must be included?

## Landing-page audit

### Hero and conversion hierarchy
- Hero does not state what the product is, who it's for, and what to do → Rewrite headline and subheadline to be specific and action-oriented.
- Multiple competing CTAs with equal weight → Establish one primary CTA per viewport; secondary actions must have visibly lower weight.
- Generic centered hero by default → Choose centered, split, editorial, product-led, or proof-led based on the offer.

### Layout and spacing
- Inconsistent gaps and arbitrary spacing → Use a consistent spacing scale (8, 16, 24, 32, 48, 64px).
- Unclear container widths → Define clear max-width containers for desktop (1024-1200px) with appropriate padding.
- Overloaded sections with cards, badges, and decorative shapes → Simplify and use whitespace to guide focus.

### Typography
- Poor type hierarchy or inconsistent sizing → Establish clear H1-H6 scale with consistent weights and sizes.
- Full-width text that's hard to read → Limit body text to 50-75 characters per line.
- Inconsistent heading case → Use sentence case for headings.

### Color and surfaces
- Purple-blue gradients, glowing blobs, sparkles, rockets, or generic "AI SaaS" imagery → Remove and use brand-specific colors or neutral surfaces.
- Meaningless glassmorphism or trendy effects without purpose → Use visual depth only when it supports the brand or content.
- Low contrast for readability → Ensure 4.5:1 contrast for body text, 3:1 for large text.

### Content and trust
- Lorem Ipsum, "Acme", "John Doe", or perfect round numbers → Use real draft copy or placeholder content that reflects the actual offering.
- AI marketing clichés like "Elevate", "Seamless", "Unleash", "Next-Gen", "Game-changer", "Delve", "Tapestry" → Use specific, plain language.
- Invented testimonials, customer logos, or performance claims → Use supplied proof only or omit the section entirely.

### Components and forms
- Stereotypical 3 equal feature cards with icons in colored circles → Use content-appropriate layouts: 2+1 grids, editorial rows, visual demonstrations, comparisons, or narrative sections.
- Centered-everything template → Use alignment intentionally; default to left-aligned body content.
- Forms with placeholder-only labels → Place labels above inputs with clear validation states.
- Generic CTAs like "Get started" → Use specific labels like "Get a project estimate" when context allows.

### Mobile behavior
- Desktop-first mobile shrink → Stack content, reorder for thumb zone, simplify navigation, preserve 44px minimum touch targets.
- Hidden or hard-to-access CTAs on mobile → Place primary actions in bottom 1/3 of screen or sticky header.
- Complex navigation on small screens → Use collapsible menus or simplified nav structures.

### Performance and accessibility
- Heavy images or unoptimized assets → Use appropriate formats, lazy loading below fold, prevent layout shift.
- Missing focus states or semantic HTML → Add visible focus indicators, proper labels, alt text, and semantic structure.
- Slow initial render → Inline critical CSS, defer non-critical scripts.

## Content flow
Use a flexible order, not a mandatory template:

Hero → proof/context → benefits → demonstration/how it works → capabilities → objections/FAQ → final CTA

Remove, reorder, or combine sections based on the actual product, audience, and conversion goal. Not every landing page needs all sections.

## Common AI landing-page failures

- Equal visual weight everywhere → Establish one dominant message and CTA.
- Generic 3-card feature grid → Use a differentiated layout based on the content.
- Centered-everything template → Use alignment intentionally.
- Repeated rounded cards → Use cards only when grouping or elevation is meaningful.
- Random gradients and decoration → Use visual depth only when it supports the brand.
- Feature dump → Lead with customer problems and outcomes.
- Multiple identical CTAs → Use a clear primary action and quieter secondary path.
- Desktop-first mobile shrink → Stack, reorder, simplify, and preserve touch access.
- Fake proof → Use supplied proof or omit it.
- Generic visual assets → Use real product visuals, relevant photography, or a consistent custom illustration direction.

## High-impact upgrades

- Rewrite vague hero copy into a specific value proposition.
- Improve type hierarchy and line lengths.
- Replace generic feature grids with a content-led composition.
- Add a product demonstration, process visualization, or proof artifact where useful.
- Use visual contrast and whitespace to prioritize the primary CTA.
- Improve forms with labels, validation states, and low-friction fields.
- Add hover, active, loading, empty, and error states only where applicable.
- Optimize images and prevent layout shift.

## Fix priority

1. Clarify offer, audience, and CTA
2. Correct hero hierarchy and information flow
3. Remove generic components and decoration
4. Establish typography, color, and spacing consistency
5. Improve responsive behavior
6. Add trust, interaction, and accessibility polish
7. Optimize performance and final details

## Rules

- Inspect existing files before asking questions or changing architecture.
- Work within the existing framework and styling system.
- Do not invent business facts, reviews, customer logos, metrics, integrations, or pricing.
- Do not break existing functionality.
- Do not add dependencies without checking package.json and confirming they are necessary.
- Keep changes focused, readable, and responsive.
- Test at approximately 375px mobile width and 1280px desktop width.
- Prioritize clarity, conversion, accessibility, and brand fit over trendy visual effects.
- Treat the instructions as principles, not a single layout template.