# Amplyfive – agent skills that amplify your UI, backend, and dev workflow

## What is Amplyfive?

Amplyfive is a collection of agent skills for AI coding agents like Claude Code, Cursor, OpenAI Codex, Gemini CLI, and more. Each skill is a folder containing a `SKILL.md` file with instructions, patterns, and examples that guide AI agents to produce higher-quality output.

Think of it as an expanded version of "Taste Skill" — but broader. While Taste Skill focuses primarily on frontend design, Amplyfive covers UI design, backend architecture, DevOps workflows, and development best practices. The core idea is simple: amplify the quality of AI-generated output by giving agents concrete, opinionated guidance.

Instead of generic "make it look good" instructions, agents can invoke specific skills that provide detailed patterns, real examples, and anti-patterns to avoid. This results in better UI design (less "AI slop"), stronger backend architecture, and cleaner CI/CD and development workflows.

## Quick start

Install skills directly into your AI agent's configuration with a single command:

```bash
# Install a skill into ALL detected agents on your machine
npx amplyfive add web-dev-portfolio

# Install for a specific agent
npx amplyfive add web-dev-portfolio --agent claude
npx amplyfive add e-commerce --agent cursor

# Install multiple skills at once
npx amplyfive add landing-page portfolio e-commerce

# Install into your project directory instead of global config
npx amplyfive add web-dev-portfolio --local

# List all available skills
npx amplyfive list

# See which agents are detected on your machine
npx amplyfive agents

# Remove a skill
npx amplyfive remove web-dev-portfolio
```

The CLI auto-detects which coding agents you have installed and writes skills into the correct config location for each one. No manual file copying needed.

## Supported agents

Amplyfive works with **10 AI coding agents** out of the box:

| Agent | Global Config | Project Config |
|---|---|---|
| **Claude Code** | `~/.claude/skills/` | `.claude/skills/` |
| **Cursor** | *(project-only)* | `.cursor/rules/*.mdc` |
| **OpenAI Codex** | `~/.codex/AGENTS.md` | `AGENTS.md` |
| **Gemini CLI** | `~/.gemini/config/skills/` | `.agents/skills/` |
| **Windsurf** | `~/.windsurf/rules/` | `.windsurf/rules/` |
| **Cline** | `~/.cline/rules/` | `.clinerules/` |
| **GitHub Copilot** | *(project-only)* | `.github/copilot-instructions.md` |
| **Aider** | `~/CONVENTIONS.md` | `CONVENTIONS.md` |
| **Devin** | `~/.config/devin/` | `.devin/skills/` |
| **Zed** | `~/.config/zed/AGENTS.md` | `AGENTS.md` |

## Available skills

### Page / Landing
- **landing-page** – High-converting landing page frontends with brand-specific hierarchy and responsive behavior
- **e-commerce** – E-commerce frontends with catalog presentation, cart/checkout friction reduction, and trust signals
- **portfolio** – Distinctive portfolio websites with work presentation adapted to the owner and audience
- **web-dev-portfolio** – Web developer portfolio frontends that eliminate AI template clichés and elevate technical depth
- **admin-dashboard** – Admin dashboard patterns *(coming soon)*

### Animation
- **gsap** – GSAP animation patterns with ScrollTrigger and timeline orchestration *(coming soon)*
- **framer** – Framer Motion patterns for React *(coming soon)*
- **anime-js** – Anime.js timeline staggering and SVG morphing *(coming soon)*
- **lenis** – Lenis smooth scroll with GSAP integration *(coming soon)*
- **three-js** – Three.js 3D scene patterns *(coming soon)*
- **vanilla-js** – Vanilla JS animation with Web Animations API *(coming soon)*
- **shadcn** – shadcn/ui animation patterns *(coming soon)*
- **tailwind** – Tailwind CSS animation utilities *(coming soon)*

*More skills added regularly. Run `npx amplyfive list` for the latest.*

## Who is this for?

- **Students and early-career developers** – Learn industry-standard patterns by seeing them applied in AI-generated code
- **Frontend developers** – Get better UI design guidance and modern component patterns
- **Backend developers** – Build more robust APIs and service architectures
- **Full-stack developers** – Maintain consistency across the entire stack
- **Development teams** – Establish shared patterns and reduce code review friction

## Website

Visit [amplyfive.vercel.app](https://amplyfive.vercel.app) for the full documentation, skill previews, and interactive examples.

## Contributing

We welcome pull requests and new skills! If you have a pattern or practice that would help others produce better code with AI agents, we'd love to include it.

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on adding new skills and the pull request process.

## License

This project is open source under the MIT License. See [LICENSE](LICENSE) for details.

## Support / Sponsor

Amplyfive is free and open source. If you find it valuable, consider sponsoring the project via [GitHub Sponsors](https://github.com/sponsors) to help support ongoing development and maintenance.

---

Built with ❤️ for the AI-assisted development community
