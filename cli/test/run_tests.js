import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { execSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const cliPath = join(__dirname, '..', '..', 'cli', 'bin', 'amplyfive.js');

const commands = [
  '--help',
  '--version',
  'list',
  'agents',
];

for (const cmd of commands) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Testing: amplyfive ${cmd}`);
  console.log('='.repeat(60));
  try {
    const output = execSync(`node "${cliPath}" ${cmd}`, { encoding: 'utf8', timeout: 10000 });
    console.log(output);
  } catch (err) {
    console.error(`ERROR: ${err.message}`);
    if (err.stdout) console.log(err.stdout);
    if (err.stderr) console.error(err.stderr);
  }
}
