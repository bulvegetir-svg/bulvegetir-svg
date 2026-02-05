/* version: 0.1.1 – 2026-02-04 */
module.exports = {
  plugins: [
    require('autoprefixer')(),
    require('cssnano')({ preset: 'default' })
  ]
};
