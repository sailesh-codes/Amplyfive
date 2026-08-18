# Amplyfive – agent skills that amplify your UI, backend, and dev workflow

## What is Amplyfive?

Amplyfive is a collection of agent skills for AI coding agents like Claude Code, Cursor, OpenAI Codex, Gemini CLI, and more. Each skill is a folder containing a `SKILL.md` file with instructions, patterns, and examples that guide AI agents to produce higher-quality output.

Think of it as an expanded version of "Taste Skill" — but broader. While Taste Skill focuses primarily on frontend design, Amplyfive covers UI design, backend architecture, DevOps workflows, and development best practices. The core idea is simple: amplify the quality of AI-generated output by giving agents concrete, opinionated guidance.

Instead of generic "make it look good" instructions, agents can invoke specific skills that provide detailed patterns, real examples, and anti-patterns to avoid. This results in better UI design (less "AI slop"), stronger backend architecture, and cleaner CI/CD and development workflows.

## Quick start

Install skills directly into your AI agent's configuration:

```bash
# Install a frontend design skill
npx skills add https://github.com/amplyfive/skills --skill design-taste-frontend

# Install a backend API skill
npx skills add https://github.com/amplyfive/skills --skill java-spring-boot-api

# Install a DevOps skill
npx skills add https://github.com/amplyfive/skills --skill github-actions-ci
```

Each skill can be invoked by your AI agent when working on relevant tasks, providing context-specific guidance and patterns.

## Available skills

Skills are organized under the `skills/` directory, each in its own folder with a `SKILL.md` file:

- **design-taste-frontend** – UI/UX patterns for modern, polished frontend interfaces
- **java-spring-boot-api** – Best practices for building robust Spring Boot APIs
- **github-actions-ci** – CI/CD workflow patterns and GitHub Actions configurations
- **docker-basics** – Containerization patterns and Docker best practices
- **typescript-strict-mode** – Type-safe TypeScript patterns and configurations
- **testing-pyramid** – Testing strategies and test organization patterns

*More skills added regularly. Check the `skills/` directory for the full list.*

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
