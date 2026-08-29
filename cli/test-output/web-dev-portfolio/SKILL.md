---
name: web-dev-portfolio-frontend
description: Builds and improves distinctive, high-impact web developer portfolio frontends. Audits existing code first, eliminates cliché AI developer portfolio templates (terminal typing effects, skill percentage bars, dark neon purple glows, generic bios), and elevates code proof, live site visual breakdowns, technical architecture explanations, interactive project demos, performance metrics, and employer/client inquiry paths tailored to the developer's exact niche and level.
---

# Web Developer Portfolio Frontend Skill

## How this works
1. Scan — inspect codebase, stack, project case studies, code samples, live links, and existing sections.
2. Diagnose — identify generic AI developer templates (terminal typing animations, fake skill percentages, dark neon glows, vague "turning ideas into code" intro lines, and lack of technical depth).
3. Decide — define developer niche (Frontend, Full-Stack, UI/UX Architect, Creative Technologist, Systems/Backend), primary audience (recruiters, clients, engineering managers), showcase projects, and visual direction.
4. Fix — apply targeted upgrades using the existing stack to showcase real code quality, performance, and engineering problem-solving.
5. Verify — test desktop, mobile layout, theme toggling, interactive code blocks, live links, accessibility, and contact actions.

## New-project questions
Only ask these when the repository has no usable project code:

- What is the developer's name, current role, and engineering specialization (e.g., Frontend Specialist, Full-Stack Engineer, Creative Technologist)?
- Who is the primary target audience: tech recruiters, client leads, startup founders, or engineering managers?
- What are the top 2-4 showcase projects, including live demo links, repository URLs, and technical highlights?
- What is the core tech stack (languages, frameworks, state management, databases, build tools, cloud/infra)?
- What proof assets exist: production metrics (e.g., "reduced render time by 40%"), open-source contributions, npm packages, technical writing, or client testimonials?
- What is the developer's current availability status (e.g., "🟢 Available for full-time roles / freelance starting Q3")?
- What are the preferred contact actions: instant copy-email button, Calendly booking, LinkedIn/GitHub profiles, or PDF resume download?
- Are there specific color schemes, brand preferences, or dark/light theme requirements?

## Web dev portfolio audit

### Hero and developer positioning
- Terminal typing effect typing "Full Stack Developer | Tech Enthusiast" → replace with clear, authoritative positioning statement stating exact engineering value, stack, and outcomes.
- Dark neon purple/cyan glowing grid or particle animation trying to disguise weak copy → replace with clean surface hierarchy, purposeful typography, and immediate technical proof.
- Vague tagline ("Turning ideas into reality with code") → state specific engineering capabilities (e.g., "Building high-performance React applications & accessible design systems").
- Hero asks for hiring before showing any work → present top project highlights or code proof high on the page.
- Vague "Hire Me" button pointing nowhere → replace with direct contact options (e.g., "Copy Email", "View Resume", "Schedule Call").

### Technical project case studies & proof
- Project cards show static thumbnail images with zero technical context → add stack tags, core problem solved, architectural role, and measurable engineering outcomes.
- Projects limited to basic tutorial builds ("Todo App", "Weather App", "Calculator") → feature real-world applications, open-source modules, custom components, or deep technical experiments.
- Projects link only to raw GitHub repos with no breakdown → include inline architecture snippets, key engineering trade-offs, and live interactive previews.
- Uniform project cards treating a minor script the same as a complex full-stack app → create visual hierarchy giving flagship projects multi-column case study layouts.
- Screenshots wrapped in generic fake laptop frames → show actual live UI components, code snippets, or interactive video demos.

### Skills and tech stack presentation
- Animated skill percentage bars ("React 95%", "TypeScript 85%", "CSS 90%") → remove arbitrary self-assessments; group skills contextually by domain (Frontend, Backend, Testing, Tooling).
- Grid of 30 isolated tech icons with no context → connect technologies directly to the featured projects where they were utilized.
- Long laundry list of every tool ever touched → highlight core daily tools vs secondary tools with clarity.

### Experience, impact, & open source
- Work history reads like a basic job description → emphasize quantifiable engineering achievements (e.g., "Optimized initial bundle size by 45%, improving LCP from 2.8s to 1.1s").
- Open-source contributions or npm packages hidden or unlisted → highlight GitHub star counts, PR contributions, or published packages with live badges.
- Technical articles or documentation omitted → showcase engineering blog posts, architectural write-ups, or RFCs if available.

### Interactive developer UX & micro-interactions
- Janky or missing dark/light theme toggle → implement smooth, persistent theme switching with high-contrast palette tokens.
- Standard static scrolling with no quick navigation → add key shortcuts or a command palette (Cmd+K / Ctrl+K) for instant project/contact navigation.
- Code snippets displayed as unhighlighted plain text → use syntax-highlighted code blocks with copy buttons and line highlights.
- External links open in same tab without indicator → ensure external links open safely in new tabs (`target="_blank" rel="noopener noreferrer"`) with subtle external link icons.

### Contact, resume, & availability paths
- Bloated 5-field contact form for a simple dev portfolio → simplify to instant 1-click "Copy Email" button, direct `mailto:`, or low-friction form.
- Availability status hidden or ambiguous → display live availability badge (e.g., "🟢 Open to Senior Frontend roles").
- Resume download link hidden in footer → place visible resume download button near contact paths and hero area.
- Social links buried without context → present direct links to GitHub, LinkedIn, X/Twitter, and RSS/Blog.

### Layout, typography, & surfaces
- Code fonts used for all body text making reading difficult → restrict monospace font to actual code blocks, inline tags, and technical specs; use clean sans-serif for body text.
- Full-width text lines exceeding 75 characters → limit text max-width (600-720px) for optimal readability.
- Inconsistent spacing and margins → enforce clear 8px grid rhythm (16, 24, 32, 48, 64, 96px).

### Mobile developer experience
- Desktop code blocks overflow off-screen on mobile → implement responsive horizontally scrollable code containers with scroll indicators.
- Tiny tap targets for tech tags or icons on touch screens → ensure 44px minimum touch target size.
- Floating widgets obscure contact actions → keep sticky navigation clean and thumb-accessible on mobile viewports.

### Performance, accessibility, & code quality
- Heavy unoptimized media slowing site render → use WebP/AVIF formats, lazy loading below fold, and proper width/height attributes to prevent CLS.
- Low contrast code syntax highlighting → test dark/light code theme contrast to satisfy WCAG AA 4.5:1 ratio.
- Non-semantic HTML (`<div onClick=...>` instead of `<button>`) → use semantic HTML5 elements (`<article>`, `<section>`, `<nav>`, `<main>`) with visible keyboard focus states.

## Developer portfolio pattern selection
- Project-Led Full-Stack Showcase → use when flagship applications and end-to-end features are the strongest evidence of competence.
- Code & Architecture Deep-Dive → use when algorithmic solutions, system design, performance optimizations, or open-source packages carry the value.
- Creative Technologist & Interactive UI → use when WebGL, custom animations, design systems, and interactive UI engineering define the developer's strength.
- Minimalist Engineering Resume Portfolio → use when dense professional experience, leadership, and clean technical execution drive recruiter conversion.
- Freelance Technical Consultant → use when offering specialized engineering services, client case studies, testimonials, and booking calls.

## Technical proof checks
- Can a visitor understand the developer's exact niche, stack, and seniority within 3 seconds?
- Are project case studies supported by real technical context, architecture notes, or metrics rather than just screenshots?
- Is code syntax readable, properly highlighted, and accessible across dark and light modes?
- Are tech stack skills presented with real-world context rather than arbitrary percentage bars?
- Is there a clear, low-friction path to copy the developer's email or download their resume?
- Does the site achieve 90+ Lighthouse scores across Performance, Accessibility, and Best Practices?
- Does the portfolio feel handcrafted and distinct, avoiding generic template tropes?

## Content flow
Use a flexible order based on developer focus:

Hero (Positioning + Stack + Availability) → Flagship Projects (Case Studies & Code Proof) → Technical Architecture / Playground → Work History & Impact → Open Source & Writing → Skill Stack Breakdown → Direct Contact & Resume Download

## Common AI web dev portfolio failures

- Terminal typing animation typing "Full Stack Developer" in green font on a dark background.
- Animated skill percentage bars claiming "React 95%", "TypeScript 85%", "Node.js 90%".
- Dark neon purple/cyan glowing blobs and particle background effects trying to hide lack of technical depth.
- Generic 3-card project grid showing basic tutorial projects ("Todo App", "Weather App", "Calculator").
- Vague tagline like "Hi, I'm John | Passionate Software Engineer Turning Ideas Into Reality".
- Laundry list of 30 isolated tech logos with no connection to actual projects.
- Full 5-field contact form when a direct copy-email button or mailto link is faster and less friction.
- Code blocks styled as unhighlighted plain text or breaking mobile layout with overflow bugs.
- Missing live project links or broken repository URLs.
- Identical visual card design for both small scripts and massive production applications.

## High-impact upgrades

- Replace terminal typing effect with a clear, authoritative engineering positioning headline and live availability badge.
- Upgrade project cards into multi-column case studies featuring architectural trade-offs, stack tags, live preview links, and performance scores.
- Replace skill percentage bars with a domain-grouped tech stack linked directly to featured projects.
- Add an interactive code snippet previewer or live component toggle demonstration.
- Implement a 1-click "Copy Email" button with instant visual feedback ("Copied sailesh@example.com!").
- Add a keyboard command palette (Cmd+K / Ctrl+K) for rapid navigation across projects and links.
- Optimize image/media assets to guarantee 95+ Lighthouse performance scores.
- Include a prominent, easily accessible PDF Resume download button.

## Fix priority

1. Clarify developer positioning, stack, specialization, and availability status
2. Overhaul project section into deep technical case studies with code proof and live links
3. Remove generic AI tropes (terminal typing, skill percentage bars, dark purple glowing blobs)
4. Restructure skill presentation around project context and domains
5. Improve contact paths (1-click copy email, resume download, social links)
6. Refine typography, code syntax highlighting, and dark/light theme tokens
7. Optimize performance, responsive code block scrolling, and accessibility

## Do not

- Use terminal typing animations or green-on-black code clichés for hero intros.
- Include skill progress bars with arbitrary percentage scores.
- Use generic boilerplate project descriptions without technical detail or stack specifics.
- Feature basic tutorial apps ("Todo App", "Weather App") as primary flagship work.
- Rely on dark neon purple/cyan glows or floating particle scripts as decorative filler.
- Use full multi-field contact forms when direct copy-email or calendar links are superior.
- Rebuild the entire portfolio codebase if the existing framework or stack is sound.
- Add heavy external animation libraries before optimizing core native CSS/JS.

## Rules

- Inspect existing codebase files before asking questions or altering architecture.
- Work within the existing framework and styling system.
- Do not break existing routing, theme context, or live links.
- Keep changes focused, reviewable, and responsive.
- Test at approximately 375px mobile viewport and 1280px desktop viewport widths.
- Prioritize technical proof, code clarity, site performance, accessibility, and unique developer identity over superficial visual effects.
- Treat instructions as principles, not a single rigid template for every portfolio.