/* -------------------------------------------------------------
   src/scripts/eleventy.js – Eleventy konfigürasyonu
------------------------------------------------------------- */
module.exports = function (eleventyConfig) {
  // 1. JSON veri dosyasını doğrudan dist/data klasörüne kopyala
  eleventyConfig.addPassthroughCopy({ "src/data/productGroups.json": "data/productGroups.json" });

  // 2. Resim dosyalarını kopyala
  eleventyConfig.addPassthroughCopy("src/assets/**/*.webp");
  eleventyConfig.addPassthroughCopy("src/assets/**/*.png");
  eleventyConfig.addPassthroughCopy("src/assets/**/*.jpg");
  eleventyConfig.addPassthroughCopy("src/assets/**/*.svg");
  
  // 3. assets klasörünün geri kalanını kopyala
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

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