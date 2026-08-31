/**
 * Amplyfive Terminal UI Utilities
 *
 * Colored output, spinners, tables, and status badges.
 * Uses raw ANSI escape codes — zero dependencies.
 */

// ── ANSI Colors ──────────────────────────────────────────────────────
const ESC = '\x1b[';
const RESET = `${ESC}0m`;
const BOLD = `${ESC}1m`;
const DIM = `${ESC}2m`;
const ITALIC = `${ESC}3m`;
const UNDERLINE = `${ESC}4m`;

const colors = {
  red:     (s) => `${ESC}31m${s}${RESET}`,
  green:   (s) => `${ESC}32m${s}${RESET}`,
  yellow:  (s) => `${ESC}33m${s}${RESET}`,
  blue:    (s) => `${ESC}34m${s}${RESET}`,
  magenta: (s) => `${ESC}35m${s}${RESET}`,
  cyan:    (s) => `${ESC}36m${s}${RESET}`,
  white:   (s) => `${ESC}37m${s}${RESET}`,
  gray:    (s) => `${ESC}90m${s}${RESET}`,
  bold:    (s) => `${BOLD}${s}${RESET}`,
  dim:     (s) => `${DIM}${s}${RESET}`,
  italic:  (s) => `${ITALIC}${s}${RESET}`,
  underline: (s) => `${UNDERLINE}${s}${RESET}`,
};

// ── Brand ────────────────────────────────────────────────────────────
export function printBanner() {
  console.log('');
  console.log(colors.bold(colors.cyan('AMP UP')) + colors.dim(' — AI agent skill installer'));
  console.log('');
  console.log(colors.bold('By Amplyfive'));
  console.log('');
}

// ── Status Badges ────────────────────────────────────────────────────
export function success(msg) {
  console.log(`  ${colors.green('✔')} ${msg}`);
}

export function error(msg) {
  console.log(`  ${colors.red('✖')} ${msg}`);
}

export function warn(msg) {
  console.log(`  ${colors.yellow('⚠')} ${msg}`);
}

export function info(msg) {
  console.log(`  ${colors.blue('ℹ')} ${msg}`);
}

export function skip(msg) {
  console.log(`  ${colors.gray('○')} ${colors.dim(msg)}`);
}

// ── Spinner ──────────────────────────────────────────────────────────
const SPINNER_FRAMES = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

export function createSpinner(text) {
  let i = 0;
  let interval = null;

  return {
    start() {
      process.stdout.write(`\r\x1b[2K  ${colors.cyan(SPINNER_FRAMES[0])} ${text}`);
      interval = setInterval(() => {
        i = (i + 1) % SPINNER_FRAMES.length;
        process.stdout.write(`\r\x1b[2K  ${colors.cyan(SPINNER_FRAMES[i])} ${text}`);
      }, 80);
      return this;
    },
    stop(result = 'success', msg) {
      if (interval) clearInterval(interval);
      const finalMsg = msg || text;
      if (result === 'success') {
        process.stdout.write(`\r\x1b[2K  ${colors.green('✔')} ${finalMsg}\n`);
      } else if (result === 'error') {
        process.stdout.write(`\r\x1b[2K  ${colors.red('✖')} ${finalMsg}\n`);
      } else {
        process.stdout.write(`\r\x1b[2K  ${colors.gray('○')} ${colors.dim(finalMsg)}\n`);
      }
    },
  };
}

// ── Tables ───────────────────────────────────────────────────────────
export function printTable(headers, rows) {
  // Calculate column widths
  const widths = headers.map((h, i) =>
    Math.max(h.length, ...rows.map(r => stripAnsi(String(r[i] || '')).length))
  );

  // Header
  const headerLine = headers.map((h, i) => colors.bold(pad(h, widths[i]))).join('   ');
  const separator = widths.map(w => colors.dim('─'.repeat(w))).join('───');

  console.log(`  ${headerLine}`);
  console.log(`  ${separator}`);

  // Rows
  for (const row of rows) {
    const line = row.map((cell, i) => pad(String(cell || ''), widths[i])).join('   ');
    console.log(`  ${line}`);
  }
  console.log('');
}

function pad(str, width) {
  const visibleLen = stripAnsi(str).length;
  return str + ' '.repeat(Math.max(0, width - visibleLen));
}

function stripAnsi(str) {
  return str.replace(/\x1b\[[0-9;]*m/g, '');
}

// ── Section Headers ──────────────────────────────────────────────────
export function printSection(title) {
  console.log(`  ${colors.bold(colors.white(title))}`);
  console.log('');
}

// ── Misc ─────────────────────────────────────────────────────────────
export function newline() {
  console.log('');
}

export { colors };
