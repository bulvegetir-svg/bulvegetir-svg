/* rollup.config.js – version: 0.1.2 – 2026-02-12 */
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'; // Eklendi
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/scripts/main.js',
  output: {
    file: 'dist/script.min.js',
    format: 'iife',
    name: 'BUNDLE',
    sourcemap: false
  },
  plugins: [
    resolve(),
    commonjs(), // Eklendi
    terser()
  ]
};