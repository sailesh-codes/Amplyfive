# amplyfive

> Install Amplyfive AI agent skills into any coding agent — Claude Code, Cursor, Codex, Gemini CLI, Windsurf, Cline, Copilot, Aider, Devin, Zed.

## Install

No install needed. Just run with `npx`:

```bash
npx amplyfive add web-dev-portfolio
```

## Usage

```bash
# List all available skills
npx amplyfive list

# See which agents are detected on your machine
npx amplyfive agents

# Install a skill into ALL detected agents
npx amplyfive add web-dev-portfolio

# Install for a specific agent
npx amplyfive add web-dev-portfolio --agent claude
npx amplyfive add e-commerce --agent cursor

# Install multiple skills
npx amplyfive add landing-page portfolio e-commerce

# Install into project directory (workspace-local)
npx amplyfive add web-dev-portfolio --local

# Remove a skill
npx amplyfive remove web-dev-portfolio
```

## How it works

1. The CLI checks which AI coding agents are installed on your machine
2. It fetches the skill file from GitHub
3. It transforms the content into each agent's native format
4. It writes the skill to the correct config directory

Each agent has its own format:
- **Claude Code** → `.claude/skills/<name>.md`
- **Cursor** → `.cursor/rules/<name>.mdc` (with MDC frontmatter)
- **Gemini CLI** → `.gemini/config/skills/<name>/SKILL.md`
- **Codex / Copilot / Zed** → Appended to `AGENTS.md` with delimiter blocks
- **Windsurf / Cline / Devin** → Discrete markdown files in rules directory

## Supported agents

| Agent | Key | Format |
|---|---|---|
| Claude Code | `claude` | Discrete files |
| Cursor | `cursor` | MDC format |
| OpenAI Codex | `codex` | Monolithic append |
| Gemini CLI | `gemini` | SKILL.md (native) |
| Windsurf | `windsurf` | Discrete files |
| Cline | `cline` | Discrete files |
| GitHub Copilot | `copilot` | Monolithic append |
| Aider | `aider` | Monolithic append |
| Devin | `devin` | Discrete files |
| Zed | `zed` | Monolithic append |

## Zero dependencies

This CLI uses only Node.js built-in modules (`https`, `fs`, `path`, `os`). No external dependencies.

## License

MIT
