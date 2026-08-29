/**
 * Amplyfive Skill Content Fetcher & Resolver
 *
 * Resolves skill content locally first (bundled package or local repo),
 * falling back to GitHub raw content fetching if not found locally.
 * Zero external dependencies.
 */

import https from 'node:https';
import http from 'node:http';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PACKAGE_ROOT = resolve(__dirname, '..');
const REPO_ROOT = resolve(__dirname, '..', '..');

/**
 * Fetch content from a URL. Follows up to 5 redirects.
 * @param {string} url
 * @param {number} maxRedirects
 * @returns {Promise<string>}
 */
export function fetchUrl(url, maxRedirects = 5) {
  return new Promise((resolvePromise, rejectPromise) => {
    if (maxRedirects <= 0) {
      return rejectPromise(new Error('Too many redirects'));
    }

    const client = url.startsWith('https') ? https : http;

    const req = client.get(url, { headers: { 'User-Agent': 'amplyfive-cli/1.0' } }, (res) => {
      // Handle redirects (301, 302, 307, 308)
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolvePromise(fetchUrl(res.headers.location, maxRedirects - 1));
      }

      if (res.statusCode !== 200) {
        res.resume();
        return rejectPromise(new Error(`HTTP ${res.statusCode}: Failed to fetch ${url}`));
      }

      const chunks = [];
      res.setEncoding('utf8');
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => resolvePromise(chunks.join('')));
      res.on('error', rejectPromise);
    });

    req.on('error', rejectPromise);
    req.setTimeout(15000, () => {
      req.destroy();
      rejectPromise(new Error(`Timeout fetching ${url}`));
    });
  });
}

/**
 * Retrieve skill content by checking local filesystem first, then falling back to remote URL.
 *
 * @param {string} skillName
 * @param {object} skill - Skill entry from registry
 * @param {string} remoteUrl - Fallback GitHub URL
 * @returns {Promise<string>}
 */
export async function getSkillContent(skillName, skill, remoteUrl) {
  // 1. Check bundled package skills directory: cli/skills/<name>/SKILL.md
  const bundledPath = resolve(PACKAGE_ROOT, 'skills', skillName, 'SKILL.md');
  if (existsSync(bundledPath)) {
    const content = readFileSync(bundledPath, 'utf8').trim();
    if (content.length > 0) return content;
  }

  // 2. Check local repo path: e.g. ../page-niche-specific/...
  if (skill?.path) {
    const repoPath = resolve(REPO_ROOT, skill.path);
    if (existsSync(repoPath)) {
      const content = readFileSync(repoPath, 'utf8').trim();
      if (content.length > 0) return content;
    }

    const packageRelPath = resolve(PACKAGE_ROOT, skill.path);
    if (existsSync(packageRelPath)) {
      const content = readFileSync(packageRelPath, 'utf8').trim();
      if (content.length > 0) return content;
    }
  }

  // 3. Fallback to fetching from remote GitHub URL
  if (remoteUrl) {
    return await fetchUrl(remoteUrl);
  }

  throw new Error(`Skill content not found for ${skillName}`);
}
