/* .eleventy.cjs – Eleventy konfigürasyonu (CommonJS) */
module.exports = function (eleventyConfig) {
  // Statik dosyaları kopyala (assets klasörü)
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src/pages",   // sayfa şablonları burada
      includes: ".",        // <‑‑ Layout ve include dosyaları aynı klasörde (src/pages)
      output: "dist"
    },
    templateFormats: ["njk", "html"],
    htmlTemplateEngine: "njk"
  };
};
