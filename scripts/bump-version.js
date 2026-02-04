/* version: 0.1.1 – 2026-02-04 */
"husky": {
  "hooks": {
    "pre-commit": "node ./scripts/bump-version.js"
  }
}

/* version: 0.1.1 – 2026-02-04 */
const { execSync } = require('child_process');
const pkg = require('../package.json');
const newVer = pkg.version;
const today = new Date().toISOString().slice(0,10);
const glob = require('glob');
glob.sync('**/*.{js,scss,html,md,json,js,css,md}').forEach(file => {
  const content = require('fs').readFileSync(file, 'utf8');
  const updated = content.replace(/\/\*\s*version:\s*[\d.]+\s*–\s*\d{4}-\d{2}-\d{2}\s*\*\//,
    `/* version: ${newVer} – ${today} */`);
  require('fs').writeFileSync(file, updated);
});
console.log('Version headers updated to', newVer);
