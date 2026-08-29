/**
 * Amplyfive Content Transformer
 *
 * Transforms raw SKILL.md content into each agent's expected format.
 */

/**
 * Strip YAML frontmatter from SKILL.md content.
 * Returns the content body without the --- delimited block.
 */
function stripFrontmatter(content) {
  const trimmed = content.trim();
  if (!trimmed.startsWith('---')) return trimmed;

  const endIdx = trimmed.indexOf('---', 3);
  if (endIdx === -1) return trimmed;

  return trimmed.slice(endIdx + 3).trim();
}

/**
 * Extract the skill name from YAML frontmatter.
 */
function extractName(content) {
  const match = content.match(/^---\s*\n[\s\S]*?name:\s*(.+)\n[\s\S]*?---/);
  return match ? match[1].trim() : null;
}

/**
 * Extract the description from YAML frontmatter.
 */
function extractDescription(content) {
  const match = content.match(/^---\s*\n[\s\S]*?description:\s*(.+)\n[\s\S]*?---/);
  return match ? match[1].trim() : null;
}

/**
 * Transform content based on agent format type.
 *
 * @param {string} content  - Raw SKILL.md content
 * @param {string} format   - 'raw' | 'markdown' | 'mdc' | 'delimited'
 * @param {string} skillName - Skill identifier for delimiters
 * @returns {string}
 */
export function transformContent(content, format, skillName) {
  switch (format) {
    case 'raw':
      // Gemini — keep the SKILL.md exactly as-is
      return content;

    case 'markdown':
      // Claude, Windsurf, Cline, Devin — strip frontmatter, clean markdown
      return stripFrontmatter(content);

    case 'mdc':
      // Cursor — wrap in MDC frontmatter format
      return transformToMdc(content, skillName);

    case 'delimited':
      // Codex, Copilot, Aider, Zed — wrap in delimiter comments for append
      return transformToDelimited(content, skillName);

    default:
      return stripFrontmatter(content);
  }
}

/**
 * Transform to Cursor .mdc format with frontmatter.
 */
function transformToMdc(content, skillName) {
  const description = extractDescription(content) || `Amplyfive skill: ${skillName}`;
  const body = stripFrontmatter(content);

  return `---
description: "${description}"
globs: 
alwaysApply: true
---

${body}
`;
}

/**
 * Wrap content in delimiter comments for monolithic file agents.
 * These delimiters allow the CLI to find and remove skills later.
 */
function transformToDelimited(content, skillName) {
  const body = stripFrontmatter(content);

  return `
<!-- amplyfive:${skillName}:start -->
${body}
<!-- amplyfive:${skillName}:end -->
`;
}

/**
 * Remove a delimited skill block from monolithic file content.
 *
 * @param {string} fileContent - Current file content
 * @param {string} skillName   - Skill to remove
 * @returns {string}           - Content with skill block removed
 */
export function removeDelimitedBlock(fileContent, skillName) {
  const startTag = `<!-- amplyfive:${skillName}:start -->`;
  const endTag = `<!-- amplyfive:${skillName}:end -->`;

  const startIdx = fileContent.indexOf(startTag);
  const endIdx = fileContent.indexOf(endTag);

  if (startIdx === -1 || endIdx === -1) return fileContent;

  const before = fileContent.slice(0, startIdx).trimEnd();
  const after = fileContent.slice(endIdx + endTag.length).trimStart();

  return before + (after ? '\n\n' + after : '') || '';
}

/**
 * Check if a delimited skill block exists in file content.
 */
export function hasDelimitedBlock(fileContent, skillName) {
  return fileContent.includes(`<!-- amplyfive:${skillName}:start -->`);
}
