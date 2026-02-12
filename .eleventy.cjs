/* -------------------------------------------------------------
   src/scripts/eleventy.js – Eleventy konfigürasyonu
------------------------------------------------------------- */
module.exports = function (eleventyConfig) {
  // --- EKLENEN SATIRLAR ---
  // Resim dosyalarını kopyala (assets klasörü içindeki tüm resimler)
  eleventyConfig.addPassthroughCopy("src/assets/**/*.webp");
  eleventyConfig.addPassthroughCopy("src/assets/**/*.png");
  eleventyConfig.addPassthroughCopy("src/assets/**/*.jpg");
  eleventyConfig.addPassthroughCopy("src/assets/**/*.svg");

  // JSON veri dosyasını kopyala (Arama için gerekli)
  eleventyConfig.addPassthroughCopy({ "src/data/productGroups.json": "data/productGroups.json" });
  // -------------------------

  // Statik varlıkları kopyala
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Ürün koleksiyonu
  eleventyConfig.addCollection('products', async () => {
    // NOT: require kullanımı veriyi build zamanında alır.
    // Arama fonksiyonu fetch kullandığı için dosyayı dist'te görmelidir.
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