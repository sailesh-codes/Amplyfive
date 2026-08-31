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

## New-project onboarding questions

**CRITICAL AGENT INSTRUCTION (Regardless of AI Agent used):**
- **When to ask**: Ask the user these questions **ONLY** when starting a new portfolio from scratch (empty repo or no usable portfolio code).
- **When to SKIP asking (Existing Projects & Alterations)**: If the user is working on an existing, built website/codebase and using this skill for alterations, upgrades, or fixes, **DO NOT** ask onboarding questions. Directly audit the codebase and systematically apply all design upgrades (Hero refactor, glassmorphism, senior color palette, semantic iconography, monospace font, and GSAP/Lenis scrolling) within the existing architecture.
- **Provide a Skip Option**: Always explicitly tell the user that they can skip any or all questions if they prefer (e.g. "Feel free to answer these or simply reply 'skip' to proceed with realistic demo data").

### Questions for new projects:
1. **Name & Role**: What is your name and current title?
2. **Web Dev Specialization / Field**: What is your primary area of focus? *(e.g., Frontend Specialist, Full-Stack Developer, Backend Engineer, UI/UX Architect, Creative Technologist)*
3. **Experience Level**: How many years of experience or what is your seniority level *(e.g., Junior, Mid-Level, Senior, Lead, Freelance)*?
4. **Skills & Core Stack**: What are your core languages, frameworks, state management, and tools *(e.g., React, TypeScript, Next.js, Node.js, Tailwind)*?
5. **Showcase Projects**: What are your top 2–4 projects? *(Brief summary of problem solved, technologies used, live demo/repo links if any)*
6. **Contact Details**: What are your preferred contact methods and profile links *(e.g., email address, GitHub, LinkedIn, Twitter/X, Calendly)*?
7. **Resume**: Do you have a resume link or PDF file path to link to on the site *(or should the agent use a placeholder button)*?
8. **Theme Preference**: Do you prefer Dark theme, Light (White) theme, or a dual theme toggle supporting both? Any accent color preferences?
9. **(Optional)**: Availability status (e.g., "🟢 Available for hire"), or target audience (recruiters, clients, founders).

*(Note to Agent: If the user says "skip" or provides partial details, generate a realistic, high-quality developer profile tailored to their chosen field without blocking.)*

## Web dev portfolio audit

### Hero and developer positioning
- Terminal typing effect typing "Full Stack Developer | Tech Enthusiast" → replace with a commanding, center-aligned positioning statement highlighting exact engineering value, stack, and outcomes.
- Static, uninspired hero layout or off-center clutter → center the main hero copy and headline for a balanced, authoritative aesthetic, integrating subtle, professional interactivity (e.g. interactive glass CTA buttons, live availability status pill, magnetic hover effects, interactive tech badges).
- Dark neon purple/cyan glowing grid or particle animation trying to disguise weak copy → replace with clean surface hierarchy, purposeful typography, transparent glassmorphic depth, and immediate technical proof.
- Vague tagline ("Turning ideas into reality with code") → state specific engineering capabilities (e.g., "Building high-performance React applications & accessible design systems").
- Hero asks for hiring before showing any work → present top project highlights or code proof high on the page.
- Vague "Hire Me" button pointing nowhere → replace with direct, center-aligned contact options (e.g., "Copy Email", "View Resume", "Schedule Call").

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
- Clunky, solid, or static navigation header → implement a sleek, floating **interactive glassmorphic navbar** (translucent frosted backdrop with `backdrop-filter: blur(16px)`, subtle 1px border highlight, smooth scroll-aware elevation/shrink transitions, interactive hover pill indicators, and integrated quick actions like theme switch and resume/contact links).
- Janky or missing dark/light theme toggle → implement smooth, persistent theme switching with high-contrast palette tokens.
- Standard static scrolling with no quick navigation → add key shortcuts or a command palette (Cmd+K / Ctrl+K) for instant project/contact navigation.
- Choppy static reveals or harsh viewport entry → integrate **GSAP ScrollTrigger** for fluid, staggered section and card reveal choreography. Seamlessly bundle **Lenis Smooth Scroll** when enhanced momentum scrolling elevates the experience (apply automatically without prompting the user).
- Code snippets displayed as unhighlighted plain text → use syntax-highlighted code blocks with copy buttons and line highlights.
- External links open in same tab without indicator → ensure external links open safely in new tabs (`target="_blank" rel="noopener noreferrer"`) with subtle external link icons.

### Contact, resume, & availability paths
- Bloated 5-field contact form for a simple dev portfolio → simplify to instant 1-click "Copy Email" button, direct `mailto:`, or low-friction form.
- Availability status hidden or ambiguous → display live availability badge.
- Resume download link hidden in footer → place visible resume download button near contact paths and hero area.
- Social links buried without context → present direct links to GitHub, LinkedIn, X/Twitter, and RSS/Blog.

### Layout, typography, & surfaces
- Code fonts used for all body text making reading difficult → restrict monospace font to actual code blocks, inline tags, metrics, and technical badges; use clean sans-serif for body text.
- Arbitrary monospace fonts → select either **PT Mono** (`font-family: "PT Mono", monospace;`) or **Intel One Mono** (`font-family: "Intel One Mono", monospace;`) for code snippets, technical tags, and accent stats, importing via Google Fonts with preconnect links.
- Full-width text lines exceeding 75 characters → limit text max-width (600-720px) for optimal readability.
- Inconsistent spacing and margins → enforce clear 8px grid rhythm (16, 24, 32, 48, 64, 96px).
- Heavy opaque or flat card containers → implement a refined **transparent glassmorphism effect** across cards, floating navigation, modals, and section containers throughout the site (using subtle translucent backgrounds, `backdrop-filter: blur(12px-20px)`, delicate 1px border highlights, and soft ambient shadows while preserving WCAG AA text contrast).
- Clashing or raw saturated color choices → act as an expert **Senior Color Palette Analyst**: engineer a cohesive, sophisticated color system (60% dominant neutral canvas like rich obsidian/slate/warm charcoal, 30% translucent glass surfaces, and 10% intentional brand accent for CTAs/highlights with strict WCAG AA contrast compliance).

### Mobile developer experience
- Desktop code blocks overflow off-screen on mobile → implement responsive horizontally scrollable code containers with scroll indicators.
- Tiny tap targets for tech tags or icons on touch screens → ensure 44px minimum touch target size.
- Floating widgets obscure contact actions → keep sticky navigation clean and thumb-accessible on mobile viewports.

### Iconography, logos, & visual elements
- Gimmicky AI emojis (✨ sparkles, 🚀 rockets, 💡, 🔥) used as section headers, card decor, or button icons → strictly eliminate all sparkles, rockets, and decorative AI emojis.
- Random or meaningless icons scattered across cards → ensure every icon or logo directly corresponds to the semantic meaning of the text or action it accompanies.
- Inconsistent or low-quality icon assets → standardize on cohesive, production-grade icon libraries like Lucide Icons (`lucide-react`), React Icons, or clean custom SVGs.

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
- AI-typical decorative emojis and icons (✨ sparkles, 🚀 rockets, ⚡ lightning bolts, 🤖 robots) scattered around titles and buttons.
- Generic 3-card project grid showing basic tutorial projects ("Todo App", "Weather App", "Calculator").
- Vague tagline like "Hi, I'm John | Passionate Software Engineer Turning Ideas Into Reality".
- Laundry list of 30 isolated tech logos with no connection to actual projects.
- Full 5-field contact form when a direct copy-email button or mailto link is faster and less friction.
- Code blocks styled as unhighlighted plain text or breaking mobile layout with overflow bugs.
- Missing live project links or broken repository URLs.
- Identical visual card design for both small scripts and massive production applications.

## High-impact upgrades

- Design a **professional, center-aligned interactive Hero section** with a commanding central value proposition, interactive glass-styled action buttons, and subtle micro-interactions that draw immediate focus to technical credibility.
- Engineer a bespoke, sophisticated **senior palette color system** (rich dark obsidian/slate neutrals, delicate translucent glass layers, and high-impact 10% intentional accents).
- Implement a floating **interactive glassmorphic navbar** with smooth scroll-aware transitions, active section pill highlights, quick theme toggle, and 1-click contact actions.
- Upgrade project cards into multi-column case studies featuring architectural trade-offs, stack tags, live preview links, and performance scores.
- Standardize iconography using a crisp, cohesive vector library (Lucide Icons, React Icons, or custom SVGs) where every icon directly reflects the exact semantic meaning of its text/action.
- Apply modern **transparent glassmorphism aesthetics** (frosted backdrop blur, translucent card surfaces, refined 1px micro-borders) across project cards, skill modules, navigation, and site-wide section containers.
- Orchestrate smooth, responsive scroll choreography using **GSAP ScrollTrigger** and **Lenis** smooth scroll for premium momentum (applied automatically without prompting the user).
- Replace skill percentage bars with a domain-grouped tech stack linked directly to featured projects.
- Add an interactive code snippet previewer or live component toggle demonstration.
- Implement a 1-click "Copy Email" button with instant visual feedback ("Copied sailesh@example.com!").
- Add a keyboard command palette (Cmd+K / Ctrl+K) for rapid navigation across projects and links.
- Optimize image/media assets to guarantee 95+ Lighthouse performance scores.
- Include a prominent, easily accessible PDF Resume download button.

## Fix priority

1. Clarify developer positioning with an interactive, center-aligned professional Hero section (headline, stack, specialization, and availability status)
2. Overhaul project section into deep technical case studies with code proof and live links
3. Remove generic AI tropes (terminal typing, skill percentage bars, dark purple glowing blobs, ✨ sparkles / 🚀 rocket emojis)
4. Curate an intentional, senior-grade color palette (60-30-10 distribution with calibrated contrast tokens)
5. Restructure skill presentation around project context and domains
6. Implement cohesive transparent glassmorphism styling across cards, floating navbar, and section surfaces
7. Set up smooth scroll choreography using GSAP ScrollTrigger (and Lenis if momentum scroll is beneficial)
8. Improve contact paths (1-click copy email, resume download, social links)
9. Refine typography, code syntax highlighting, and dark/light theme tokens
10. Standardize iconography to purposeful, semantic vector icons (Lucide / React Icons)
11. Optimize performance, responsive code block scrolling, and accessibility

## Do not

- Use terminal typing animations or green-on-black code clichés for hero intros.
- Use sparkles (✨), rockets (🚀), or typical AI-generated emoji decorators anywhere on the site.
- Insert decorative icons that lack direct semantic meaning to the accompanying text.
- Include skill progress bars with arbitrary percentage scores.
- Use generic boilerplate project descriptions without technical detail or stack specifics.
- Feature basic tutorial apps ("Todo App", "Weather App") as primary flagship work.
- Rely on dark neon purple/cyan glows or floating particle scripts as decorative filler.
- Use full multi-field contact forms when direct copy-email or calendar links are superior.
- Rebuild the entire portfolio codebase if the existing framework or stack is sound.

## Rules

- Inspect existing codebase files before asking questions or altering architecture.
- Work within the existing framework and styling system.
- **EXISTING PROJECT UPGRADE RULE**: When altering or refactoring an existing portfolio project, the agent must systematically apply and enforce ALL core standards above (Hero center alignment & interactivity, transparent glassmorphism surfaces, Senior Palette 60-30-10 colors, elimination of ✨/🚀 emojis for semantic icons, PT Mono/Intel One Mono fonts, and GSAP/Lenis smooth scrolling) without destroying existing routing or application logic.
- **INTERACTIVE GLASS NAVBAR RULE**: The navigation bar must be designed as a floating, interactive glassmorphism header (e.g. `backdrop-filter: blur(12px-20px)`, translucent background, subtle 1px border, smooth hover states, scroll-aware shrinking/backdrop transition, and active section tracking) that stays responsive and thumb-accessible across mobile and desktop viewports.
- **SENIOR COLOR PALETTE ANALYST RULE**: Act as an expert Senior Color Palette Analyst. Every portfolio must use a thoughtfully composed, harmonious color palette. Never use harsh flat pitch blacks (`#000000`) or raw uncalibrated neon primaries. Structure color using the 60-30-10 rule: 60% dominant neutral foundation (e.g. rich obsidian, deep slate, or warm graphite), 30% translucent glass surface layers, and 10% intentional high-contrast accent color (e.g. emerald, electric indigo, amber, or cyan) with guaranteed WCAG AA compliance.
- **HERO SECTION DESIGN RULE**: The Hero section must feature a clean, professional, center-aligned layout (`text-align: center`, centered container) with subtle, high-performance interactivity (e.g., interactive glass CTA buttons, magnetic hover actions, live interactive availability badge). Avoid off-center clutter or gimmicky AI particle fields.
- **STRICT ICONOGRAPHY RULE**: Zero tolerance for typical AI emojis (✨ sparkles, 🚀 rockets, etc.). Every single icon and logo across the site must be strictly meaningful to the text/action it supports. Use premium, production-grade icon libraries (e.g. Lucide Icons, React Icons) or clean inline SVGs.
- **GLASSMORHPISM DESIGN RULE**: Use a cohesive, transparent glassmorphism aesthetic for all cards, sections, header navigation, and interactive containers throughout the site (e.g. `backdrop-filter: blur(...)`, translucent backgrounds, subtle 1px border highlights), ensuring text readability and contrast remain pristine.
- **TYPOGRAPHY & MONOSPACE RULE**: For all code blocks, technical badges, inline code tags, and developer accent stats, use one of the two designated monospace Google Fonts (either **PT Mono** or **Intel One Mono**). Restrict monospace to code/accent elements so that main body copy uses clean sans-serif typography.
- **ANIMATION & SMOOTH SCROLL RULE**: Automatically incorporate **GSAP ScrollTrigger** for responsive, staggered section/card animations and micro-interactions. Pair with **Lenis Smooth Scroll** when enhanced momentum scrolling and fluidity are beneficial. **Do not ask the user for permission** to add these smooth scrolling enhancements—apply them proactively with proper lifecycle cleanup (e.g. `ScrollTrigger.refresh()`, `lenis.destroy()`).
- Do not break existing routing, theme context, or live links.
- Keep changes focused, reviewable, and responsive.
- Test at approximately 375px mobile viewport and 1280px desktop viewport widths.
- Prioritize technical proof, code clarity, site performance, accessibility, and unique developer identity over superficial visual effects.
- Treat instructions as principles, not a single rigid template for every portfolio.
