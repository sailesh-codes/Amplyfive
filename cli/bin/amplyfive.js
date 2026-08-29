#!/usr/bin/env node

/**
 * amplyfive — Universal AI Agent Skill Installer
 *
 * Usage:
 *   npx amplyfive list                          List all available skills
 *   npx amplyfive agents                        Show supported agents & detection status
 *   npx amplyfive add <skill> [skills...]        Install skill(s) into agent configs
 *   npx amplyfive remove <skill>                 Remove a skill from agent configs
 *
 * Flags:
 *   --agent <name>    Target specific agent(s) — repeatable
 *   --local           Install to project directory (workspace-local)
 *   --dir <path>      Override install directory
 *   --all             Include placeholder (coming soon) skills in list
 *   --help, -h        Show usage
 *   --version, -v     Show version
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, unlinkSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { SKILLS, getSkillUrl, getAvailableSkills, getSkillsByCategory } from '../lib/registry.js';
import { AGENTS, detectAgents, getAgent, getAgentKeys } from '../lib/agents.js';
import { getSkillContent } from '../lib/fetch.js';
import { transformContent, removeDelimitedBlock, hasDelimitedBlock } from '../lib/transform.js';
import { printBanner, success, error, warn, info, skip, createSpinner, printTable, printSection, newline, colors } from '../lib/ui.js';

// ── Parse CLI args ───────────────────────────────────────────────────
const args = process.argv.slice(2);

function getFlag(name) {
  return args.includes(`--${name}`) || args.includes(`-${name[0]}`);
}

function getFlagValues(name) {
  const values = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i] === `--${name}` && args[i + 1] && !args[i + 1].startsWith('-')) {
      values.push(args[i + 1]);
      i++;
    }
  }
  return values;
}

function getFlagValue(name) {
  const idx = args.indexOf(`--${name}`);
  if (idx !== -1 && args[idx + 1] && !args[idx + 1].startsWith('-')) {
    return args[idx + 1];
  }
  return null;
}

// Positional args (not flags or flag values)
function getPositionals() {
  const positionals = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('-')) {
      // Skip flag and its value
      if (!args[i].startsWith('--no-') && args[i + 1] && !args[i + 1].startsWith('-')) {
        i++;
      }
      continue;
    }
    positionals.push(args[i]);
  }
  return positionals;
}

const positionals = getPositionals();
const command = positionals[0];
const commandArgs = positionals.slice(1);

const isHelp = getFlag('help') || getFlag('h');
const isVersion = getFlag('version') || getFlag('v');
const isLocal = getFlag('local');
const showAll = getFlag('all');
const targetAgents = getFlagValues('agent');
const customDir = getFlagValue('dir');

// ── Version ──────────────────────────────────────────────────────────
if (isVersion) {
  console.log('amplyfive v1.0.0');
  process.exit(0);
}

// ── Help ─────────────────────────────────────────────────────────────
if (isHelp || !command) {
  printBanner();
  console.log(colors.bold('  USAGE'));
  console.log('');
  console.log(`    ${colors.cyan('amplyfive')} ${colors.green('<command>')} ${colors.gray('[options]')}`);
  console.log('');
  console.log(colors.bold('  COMMANDS'));
  console.log('');
  console.log(`    ${colors.green('list')}                          List all available skills`);
  console.log(`    ${colors.green('agents')}                        Show supported agents & detection status`);
  console.log(`    ${colors.green('add')} ${colors.cyan('<skill>')} ${colors.gray('[skills...]')}       Install skill(s) into agent configs`);
  console.log(`    ${colors.green('remove')} ${colors.cyan('<skill>')}                Remove a skill from agent configs`);
  console.log('');
  console.log(colors.bold('  OPTIONS'));
  console.log('');
  console.log(`    ${colors.yellow('--agent')} ${colors.gray('<name>')}     Target specific agent (repeatable)`);
  console.log(`    ${colors.yellow('--local')}              Install to project dir instead of global`);
  console.log(`    ${colors.yellow('--dir')} ${colors.gray('<path>')}        Override install directory`);
  console.log(`    ${colors.yellow('--all')}                Show coming-soon skills in list`);
  console.log(`    ${colors.yellow('--help')}, ${colors.yellow('-h')}          Show this help`);
  console.log(`    ${colors.yellow('--version')}, ${colors.yellow('-v')}       Show version`);
  console.log('');
  console.log(colors.bold('  EXAMPLES'));
  console.log('');
  console.log(colors.dim('    # Install into all detected agents'));
  console.log(`    ${colors.cyan('npx amplyfive add web-dev-portfolio')}`);
  console.log('');
  console.log(colors.dim('    # Install for Cursor and Claude only'));
  console.log(`    ${colors.cyan('npx amplyfive add gsap --agent cursor --agent claude')}`);
  console.log('');
  console.log(colors.dim('    # Install into project directory'));
  console.log(`    ${colors.cyan('npx amplyfive add e-commerce --local')}`);
  console.log('');
  console.log(colors.dim('    # Install into a custom directory'));
  console.log(`    ${colors.cyan('npx amplyfive add portfolio --agent gemini --dir ./my-skills')}`);
  console.log('');
  process.exit(0);
}

// ── Command Router ───────────────────────────────────────────────────
try {
  switch (command) {
    case 'list':
      cmdList();
      break;
    case 'agents':
      cmdAgents();
      break;
    case 'add':
      await cmdAdd();
      break;
    case 'remove':
      await cmdRemove();
      break;
    default:
      printBanner();
      error(`Unknown command: ${colors.bold(command)}`);
      info(`Run ${colors.cyan('amplyfive --help')} for usage.`);
      newline();
      process.exit(1);
  }
} catch (err) {
  error(err.message);
  process.exit(1);
}

// ═════════════════════════════════════════════════════════════════════
// ── COMMANDS ─────────────────────────────────────────────────────────
// ═════════════════════════════════════════════════════════════════════

/**
 * amplyfive list — Show all available skills
 */
function cmdList() {
  printBanner();
  printSection('Available Skills');

  const grouped = getSkillsByCategory();
  const rows = [];

  for (const [category, skills] of Object.entries(grouped)) {
    for (const skill of skills) {
      if (!skill.available && !showAll) continue;

      const status = skill.available
        ? colors.green('● ready')
        : colors.gray('○ coming soon');

      const name = skill.available
        ? colors.cyan(skill.name)
        : colors.dim(skill.name);

      // Truncate description to 70 chars
      const desc = skill.description.length > 70
        ? skill.description.slice(0, 67) + '...'
        : skill.description;

      rows.push([name, colors.dim(category), status, colors.dim(desc)]);
    }
  }

  printTable(['Skill', 'Category', 'Status', 'Description'], rows);

  const available = getAvailableSkills();
  info(`${available.length} skills ready to install. ${Object.keys(SKILLS).length - available.length} coming soon.`);
  info(`Run ${colors.cyan('amplyfive add <skill>')} to install.`);
  newline();
}

/**
 * amplyfive agents — Show supported agents and detection status
 */
function cmdAgents() {
  printBanner();
  printSection('Supported AI Coding Agents');

  const rows = [];
  for (const agent of Object.values(AGENTS)) {
    let detected = false;
    try { detected = agent.detect(); } catch {}

    const status = detected
      ? colors.green('● detected')
      : colors.gray('○ not found');

    const globalPath = agent.globalPath()
      ? colors.dim(agent.globalPath())
      : colors.dim('(project-only)');

    rows.push([
      detected ? colors.cyan(agent.name) : colors.dim(agent.name),
      status,
      globalPath,
    ]);
  }

  printTable(['Agent', 'Status', 'Global Config Path'], rows);

  const detected = detectAgents();
  info(`${detected.length} agent(s) detected on this machine.`);
  info(`Skills will be installed into ${colors.bold('all detected agents')} by default.`);
  info(`Use ${colors.yellow('--agent <name>')} to target specific agents.`);
  newline();
}

/**
 * amplyfive add <skill> [skills...] — Install skills
 */
async function cmdAdd() {
  if (commandArgs.length === 0) {
    printBanner();
    error('No skill name provided.');
    info(`Run ${colors.cyan('amplyfive list')} to see available skills.`);
    newline();
    process.exit(1);
  }

  printBanner();

  // Resolve which agents to install into
  const agents = resolveTargetAgents();

  if (agents.length === 0) {
    error('No target agents found.');
    info(`No agents detected on this machine. Use ${colors.yellow('--agent <name>')} to specify one.`);
    info(`Run ${colors.cyan('amplyfive agents')} to see supported agents.`);
    newline();
    process.exit(1);
  }

  printSection(`Installing ${commandArgs.length} skill(s) → ${agents.map(a => a.name).join(', ')}`);

  let totalInstalled = 0;

  for (const skillName of commandArgs) {
    const skill = SKILLS[skillName];

    if (!skill) {
      error(`Unknown skill: ${colors.bold(skillName)}`);
      info(`Run ${colors.cyan('amplyfive list')} to see available skills.`);
      continue;
    }

    if (!skill.available) {
      skip(`${skillName} — coming soon, skipping`);
      continue;
    }

    // Load the skill content (local bundle first, then GitHub remote fallback)
    const spinner = createSpinner(`Loading ${colors.cyan(skillName)}...`).start();
    let content;
    try {
      content = await getSkillContent(skillName, skill, getSkillUrl(skillName));
      spinner.stop('success', `Loaded ${colors.cyan(skillName)}`);
    } catch (err) {
      spinner.stop('error', `Failed to load ${skillName}: ${err.message}`);
      continue;
    }

    // Install into each target agent
    for (const agent of agents) {
      try {
        installSkill(agent, skillName, content);
        success(`${colors.dim(agent.name + ':')} installed ${colors.cyan(skillName)}`);
        totalInstalled++;
      } catch (err) {
        error(`${colors.dim(agent.name + ':')} failed — ${err.message}`);
      }
    }
  }

  newline();
  if (totalInstalled > 0) {
    info(`Done! Installed into ${colors.bold(String(totalInstalled))} location(s).`);
  } else {
    warn('No skills were installed.');
  }
  newline();
}

/**
 * amplyfive remove <skill> — Remove a skill
 */
async function cmdRemove() {
  if (commandArgs.length === 0) {
    printBanner();
    error('No skill name provided.');
    newline();
    process.exit(1);
  }

  printBanner();

  const agents = resolveTargetAgents();
  const skillName = commandArgs[0];

  printSection(`Removing ${colors.cyan(skillName)}`);

  for (const agent of agents) {
    try {
      const removed = removeSkill(agent, skillName);
      if (removed) {
        success(`${colors.dim(agent.name + ':')} removed ${colors.cyan(skillName)}`);
      } else {
        skip(`${agent.name}: ${skillName} not found`);
      }
    } catch (err) {
      error(`${colors.dim(agent.name + ':')} failed — ${err.message}`);
    }
  }

  newline();
}

// ═════════════════════════════════════════════════════════════════════
// ── HELPERS ──────────────────────────────────────────────────────────
// ═════════════════════════════════════════════════════════════════════

/**
 * Resolve which agents to install into.
 * Priority: --agent flags > auto-detect
 */
function resolveTargetAgents() {
  if (targetAgents.length > 0) {
    const resolved = [];
    for (const key of targetAgents) {
      const agent = getAgent(key);
      if (agent) {
        resolved.push(agent);
      } else {
        warn(`Unknown agent: ${colors.bold(key)}. Supported: ${getAgentKeys().join(', ')}`);
      }
    }
    return resolved;
  }

  // Auto-detect
  const detected = detectAgents();
  if (detected.length > 0) {
    info(`Auto-detected: ${detected.map(a => colors.cyan(a.name)).join(', ')}`);
    newline();
  }
  return detected;
}

/**
 * Install a skill into a specific agent.
 */
function installSkill(agent, skillName, rawContent) {
  const transformed = transformContent(rawContent, agent.transform, skillName);

  if (agent.format === 'discrete') {
    // Discrete file — write one file per skill
    const filePath = customDir
      ? resolve(customDir, skillName, 'SKILL.md')
      : isLocal
        ? resolve(agent.localFile(skillName))
        : resolve(agent.globalFile(skillName));

    if (!filePath) {
      throw new Error(`${agent.name} does not support ${isLocal ? 'local' : 'global'} install`);
    }

    // Ensure directory exists
    mkdirSync(dirname(filePath), { recursive: true });
    writeFileSync(filePath, transformed, 'utf8');

  } else {
    // Monolithic file — append with delimiters
    const filePath = customDir
      ? resolve(customDir, 'AGENTS.md')
      : isLocal
        ? resolve(agent.localFile())
        : resolve(agent.globalFile());

    if (!filePath) {
      throw new Error(`${agent.name} does not support ${isLocal ? 'local' : 'global'} install`);
    }

    // Ensure directory exists
    mkdirSync(dirname(filePath), { recursive: true });

    // Read existing content or start fresh
    let existing = '';
    if (existsSync(filePath)) {
      existing = readFileSync(filePath, 'utf8');
    }

    // Check if skill already exists — remove old version first
    if (hasDelimitedBlock(existing, skillName)) {
      existing = removeDelimitedBlock(existing, skillName);
    }

    // Append the new skill
    const final = existing.trimEnd() + '\n' + transformed;
    writeFileSync(filePath, final, 'utf8');
  }
}

/**
 * Remove a skill from a specific agent.
 * Returns true if the skill was found and removed.
 */
function removeSkill(agent, skillName) {
  if (agent.format === 'discrete') {
    const filePath = customDir
      ? resolve(customDir, skillName, 'SKILL.md')
      : isLocal
        ? resolve(agent.localFile(skillName))
        : resolve(agent.globalFile(skillName));

    if (!filePath || !existsSync(filePath)) return false;

    // Remove the file
    unlinkSync(filePath);

    // Try to remove the parent directory if it's now empty
    try {
      const dir = dirname(filePath);
      rmSync(dir, { recursive: false });
    } catch {
      // Directory not empty or other error — ignore
    }

    return true;

  } else {
    const filePath = customDir
      ? resolve(customDir, 'AGENTS.md')
      : isLocal
        ? resolve(agent.localFile())
        : resolve(agent.globalFile());

    if (!filePath || !existsSync(filePath)) return false;

    const content = readFileSync(filePath, 'utf8');
    if (!hasDelimitedBlock(content, skillName)) return false;

    const cleaned = removeDelimitedBlock(content, skillName);
    writeFileSync(filePath, cleaned, 'utf8');
    return true;
  }
}
