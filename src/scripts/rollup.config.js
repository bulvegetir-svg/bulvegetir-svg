/* version: 0.1.1 – 2026-02-04 */
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/scripts/main.js',
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
