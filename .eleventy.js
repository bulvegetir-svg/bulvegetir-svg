/* -------------------------------------------------------------
   .eleventy.js – Eleventy konfigürasyonu
------------------------------------------------------------- */
module.exports = function (eleventyConfig) {
  // Statik varlıkları kopyala
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // JSON veri dosyasını kopyala (Arama için gerekli)
  eleventyConfig.addPassthroughCopy({ "src/data/productGroups.json": "data/productGroups.json" });

  // Ürün koleksiyonu
  eleventyConfig.addCollection('products', async () => {
    const data = require('./src/data/products.json');
    return data.products;
  });

  // TL fiyat filtresi
  eleventyConfig.addFilter('currency', (num) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY'
    }).format(num);
  });

  // Eleventy klasör ayarları
  return {
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: '_includes',
      output: 'dist'
    },
    templateFormats: ['html', 'njk', 'md']
  };
};