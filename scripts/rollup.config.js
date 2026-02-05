/* rollup.config.js – 0.1.1 – 2026-02-04 */

/*---- CommonJS (CJS) yapılandırması -------------*/
const resolve = require('@rollup/plugin-node-resolve');
const { terser } = require('@rollup/plugin-terser');

module.exports = {
  input: 'src/scripts/main.js',          // <‑‑ kaynak dosyanın yolu
  output: {
    file: 'dist/script.min.js',
    format: 'iife',
    name: 'PEOJE',
    sourcemap: false
  },
  plugins: [
    resolve(),
    terser()
  ]
};
