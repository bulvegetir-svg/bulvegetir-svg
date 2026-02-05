/* postcss.config.js – 0.1.1 – 2026-02-04 */
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default {
  plugins: [
    autoprefixer(),
    cssnano({ preset: 'default' })
  ]
};
