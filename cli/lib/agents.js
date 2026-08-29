/**
 * Amplyfive Agent Configuration
 *
 * Defines where each AI coding agent reads its rules/skills from,
 * how to detect if it's installed, and how to transform content.
 */

import { homedir, platform } from 'node:os';
import { join } from 'node:path';
import { existsSync } from 'node:fs';

const HOME = homedir();
const IS_WIN = platform() === 'win32';
const APPDATA = process.env.APPDATA || join(HOME, 'AppData', 'Roaming');

// ── File format types ────────────────────────────────────────────────
// 'discrete'   → one file per skill (Claude, Cursor, Gemini, Windsurf, Cline, Devin)
// 'monolithic' → appends to a single file with delimiter blocks (Codex, Copilot, Aider, Zed)

export const AGENTS = {
  claude: {
    name: 'Claude Code',
    key: 'claude',
    format: 'discrete',
    globalPath: () => join(HOME, '.claude'),
    globalFile: (skillName) => join(HOME, '.claude', 'skills', `${skillName}.md`),
    localPath: () => '.claude',
    localFile: (skillName) => join('.claude', 'skills', `${skillName}.md`),
    detect: () => existsSync(join(HOME, '.claude')),
    transform: 'markdown',
  },

  cursor: {
    name: 'Cursor',
    key: 'cursor',
    format: 'discrete',
    globalPath: () => null, // Cursor has no global rules directory
    globalFile: () => null,
    localPath: () => '.cursor',
    localFile: (skillName) => join('.cursor', 'rules', `${skillName}.mdc`),
    detect: () => existsSync(join('.cursor')) || existsSync('.cursorrules'),
    transform: 'mdc',
  },

  codex: {
    name: 'OpenAI Codex',
    key: 'codex',
    format: 'monolithic',
    globalPath: () => join(HOME, '.codex'),
    globalFile: () => join(HOME, '.codex', 'AGENTS.md'),
    localPath: () => '.',
    localFile: () => 'AGENTS.md',
    detect: () => existsSync(join(HOME, '.codex')),
    transform: 'delimited',
  },

  gemini: {
    name: 'Gemini CLI',
    key: 'gemini',
    format: 'discrete',
    globalPath: () => join(HOME, '.gemini', 'config', 'skills'),
    globalFile: (skillName) => join(HOME, '.gemini', 'config', 'skills', skillName, 'SKILL.md'),
    localPath: () => '.agents',
    localFile: (skillName) => join('.agents', 'skills', skillName, 'SKILL.md'),
    detect: () => existsSync(join(HOME, '.gemini')),
    transform: 'raw', // Keep SKILL.md as-is
  },

  windsurf: {
    name: 'Windsurf',
    key: 'windsurf',
    format: 'discrete',
    globalPath: () => join(HOME, '.windsurf', 'rules'),
    globalFile: (skillName) => join(HOME, '.windsurf', 'rules', `${skillName}.md`),
    localPath: () => '.windsurf',
    localFile: (skillName) => join('.windsurf', 'rules', `${skillName}.md`),
    detect: () => existsSync(join(HOME, '.windsurf')) || existsSync('.windsurfrules'),
    transform: 'markdown',
  },

  cline: {
    name: 'Cline',
    key: 'cline',
    format: 'discrete',
    globalPath: () => join(HOME, '.cline', 'rules'),
    globalFile: (skillName) => join(HOME, '.cline', 'rules', `${skillName}.md`),
    localPath: () => '.clinerules',
    localFile: (skillName) => join('.clinerules', `${skillName}.md`),
    detect: () => existsSync(join(HOME, '.cline')) || existsSync('.clinerules'),
    transform: 'markdown',
  },

  copilot: {
    name: 'GitHub Copilot',
    key: 'copilot',
    format: 'monolithic',
    globalPath: () => null, // Copilot has no global config directory
    globalFile: () => null,
    localPath: () => '.github',
    localFile: () => join('.github', 'copilot-instructions.md'),
    detect: () => existsSync('.github'),
    transform: 'delimited',
  },

  aider: {
    name: 'Aider',
    key: 'aider',
    format: 'monolithic',
    globalPath: () => HOME,
    globalFile: () => join(HOME, 'CONVENTIONS.md'),
    localPath: () => '.',
    localFile: () => 'CONVENTIONS.md',
    detect: () => existsSync(join(HOME, '.aider.conf.yml')) || existsSync('.aider.conf.yml'),
    transform: 'delimited',
  },

  devin: {
    name: 'Devin',
    key: 'devin',
    format: 'discrete',
    globalPath: () => IS_WIN
      ? join(APPDATA, 'devin')
      : join(HOME, '.config', 'devin'),
    globalFile: (skillName) => IS_WIN
      ? join(APPDATA, 'devin', 'skills', `${skillName}.md`)
      : join(HOME, '.config', 'devin', 'skills', `${skillName}.md`),
    localPath: () => '.devin',
    localFile: (skillName) => join('.devin', 'skills', `${skillName}.md`),
    detect: () => IS_WIN
      ? existsSync(join(APPDATA, 'devin'))
      : existsSync(join(HOME, '.config', 'devin')),
    transform: 'markdown',
  },

  zed: {
    name: 'Zed',
    key: 'zed',
    format: 'monolithic',
    globalPath: () => IS_WIN
      ? join(APPDATA, 'Zed')
      : join(HOME, '.config', 'zed'),
    globalFile: () => IS_WIN
      ? join(APPDATA, 'Zed', 'AGENTS.md')
      : join(HOME, '.config', 'zed', 'AGENTS.md'),
    localPath: () => '.',
    localFile: () => 'AGENTS.md', // Same as Codex — they share the file
    detect: () => IS_WIN
      ? existsSync(join(APPDATA, 'Zed'))
      : existsSync(join(HOME, '.config', 'zed')),
    transform: 'delimited',
  },
};

/**
 * Detect which agents are installed on this machine.
 */
export function detectAgents() {
  const detected = [];
  for (const agent of Object.values(AGENTS)) {
    try {
      if (agent.detect()) {
        detected.push(agent);
      }
    } catch {
      // Ignore detection errors
    }
  }
  return detected;
}

/**
 * Get a specific agent config by key.
 */
export function getAgent(key) {
  return AGENTS[key] || null;
}

/**
 * Get all agent keys.
 */
export function getAgentKeys() {
  return Object.keys(AGENTS);
}
