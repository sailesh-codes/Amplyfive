import { readdirSync, statSync, copyFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SKILLS } from '../lib/registry.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const REPO_ROOT = resolve(__dirname, '..', '..');
const CLI_SKILLS_DIR = resolve(__dirname, '..', 'skills');

console.log('🔄 Syncing Amplyfive skills to CLI package bundle...\n');

let syncedCount = 0;

for (const [key, skill] of Object.entries(SKILLS)) {
  if (!skill.path) continue;

  const sourceFile = resolve(REPO_ROOT, skill.path);
  const targetDir = resolve(CLI_SKILLS_DIR, key);
  const targetFile = resolve(targetDir, 'SKILL.md');

  if (existsSync(sourceFile)) {
    mkdirSync(targetDir, { recursive: true });
    copyFileSync(sourceFile, targetFile);
    console.log(`  ✓ Synced: ${key} -> cli/skills/${key}/SKILL.md`);
    syncedCount++;
  } else if (skill.available) {
    console.warn(`  ⚠ Warning: Skill "${key}" marked available but source file not found at ${skill.path}`);
  }
}

console.log(`\n✨ Successfully synced ${syncedCount} skills to cli/skills/\n`);
