/* version: 0.1.1 – 2026-02-05 */
module.exports = function (eleventyConfig) {
  // Kopyala: assets klasörü
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Ürün koleksiyonu
  eleventyConfig.addCollection("products", async () => {
    const data = require("./src/data/products.json");
    return data;
  });

  // Fiyat formatı filtresi (TL)
  eleventyConfig.addFilter("currency", (num) => {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
    }).format(num);
  });

  return {
    dir: {
      input: "src/pages",   // ✅ index.njk, cart.html, thankyou.html burada
      includes: ".",        // ✅ layout dosyaların (base.njk) src/pages içinde
      data: "../data",      // ✅ global data dosyaların src/data içinde
      output: "dist"
    },
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
