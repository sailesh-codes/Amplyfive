/**
 * Amplyfive Terminal UI Utilities
 *
 * Colored output, spinners, tables, and status badges.
 * Uses raw ANSI escape codes — zero dependencies.
 */

import readline from 'node:readline';

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

// ── Interactive Multi-Select Prompt ─────────────────────────────────
export async function promptMultiSelect({ message, choices, defaultChecked = [] }) {
  if (!process.stdin.isTTY) {
    return choices.filter(c => defaultChecked.includes(c.key) || c.detected);
  }

  return new Promise((resolve) => {
    readline.emitKeypressEvents(process.stdin);
    if (process.stdin.isRaw !== undefined) {
      process.stdin.setRawMode(true);
    }
    process.stdin.resume();

    // Hide terminal cursor during interactive selection
    process.stdout.write('\x1b[?25l');

    let cursor = 0;
    const items = choices.map(c => ({
      ...c,
      checked: c.checked !== undefined ? c.checked : defaultChecked.includes(c.key),
    }));

    let isFirstRender = true;
    let renderedLineCount = 0;

    function render() {
      if (!isFirstRender && renderedLineCount > 0) {
        process.stdout.write(`\x1b[${renderedLineCount}A\r\x1b[0J`);
      }
      isFirstRender = false;

      const lines = [];
      lines.push(`  ${colors.cyan('?')} ${colors.bold(message)} ${colors.dim('(Space: toggle, a: all, Enter: confirm)')}`);
      lines.push('');

      items.forEach((item, idx) => {
        const isCurrent = idx === cursor;
        const pointer = isCurrent ? colors.cyan('❯') : ' ';
        const checkbox = item.checked ? colors.green('●') : colors.gray('○');
        const name = isCurrent
          ? colors.bold(colors.cyan(item.name))
          : (item.checked ? colors.white(item.name) : colors.dim(item.name));
        const badge = item.detected ? colors.dim(colors.green(' (detected)')) : '';

        lines.push(`  ${pointer} [${checkbox}] ${name}${badge}`);
      });

      lines.push('');
      renderedLineCount = lines.length;
      process.stdout.write(lines.join('\n'));
    }

    render();

    function cleanup() {
      process.stdout.write('\x1b[?25h'); // Restore cursor
      process.stdin.removeListener('keypress', onKeypress);
      if (process.stdin.setRawMode) {
        process.stdin.setRawMode(false);
      }
      process.stdin.pause();
    }

    function onKeypress(str, key) {
      if (!key) return;

      if (key.ctrl && key.name === 'c') {
        cleanup();
        process.stdout.write('\n');
        process.exit(0);
      }

      if (key.name === 'up' || (key.name === 'k' && !str)) {
        cursor = (cursor - 1 + items.length) % items.length;
        render();
      } else if (key.name === 'down' || (key.name === 'j' && !str)) {
        cursor = (cursor + 1) % items.length;
        render();
      } else if (key.name === 'space' || str === ' ') {
        items[cursor].checked = !items[cursor].checked;
        render();
      } else if (str === 'a' || str === 'A') {
        const allChecked = items.every(i => i.checked);
        items.forEach(i => i.checked = !allChecked);
        render();
      } else if (str && str >= '1' && Number(str) <= items.length) {
        const idx = Number(str) - 1;
        items[idx].checked = !items[idx].checked;
        cursor = idx;
        render();
      } else if (key.name === 'return' || key.name === 'enter') {
        cleanup();
        if (renderedLineCount > 0) {
          process.stdout.write(`\x1b[${renderedLineCount}A\r\x1b[0J`);
        }

        const selected = items.filter(i => i.checked);
        resolve(selected);
      }
    }

    process.stdin.on('keypress', onKeypress);
  });
}

// ── Misc ─────────────────────────────────────────────────────────────
export function newline() {
  console.log('');
}

export { colors };
