/* version: 0.1.1 – 2026-02-04 */
module.exports = function (eleventyConfig) {
  // Kopyala: assets ve img klasörleri
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Ürün koleksiyonu
  eleventyConfig.addCollection('products', async () => {
    const data = await require('./src/data/products.json');
    return data;
  });

  // Fiyat formatı filtresi (TL)
  eleventyConfig.addFilter('currency', (num) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY'
    }).format(num);
  });

  return {
    dir: {
      input: 'src/pages',
      includes: '../templates',
      data: '../data',
      output: 'dist'
    },
    templateFormats: ['html', 'njk', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  };
};
// JavaScript Document