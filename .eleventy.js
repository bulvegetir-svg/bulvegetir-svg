// .eleventy.js
import fs from "fs";

export default function (eleventyConfig) {
  // Statik dosyalar ve XML dosyası
  eleventyConfig.addPassthroughCopy({
    "src/assets": "assets",
    "src/search-data.xml": "search-data.xml" // Yeni eklenen satır
  });

  // --- Ürün koleksiyonu ---
  eleventyConfig.addCollection("products", () => {
    const data = JSON.parse(fs.readFileSync("./src/_data/products.json", "utf-8"));
    return data.products;
  });
  // ------------------------

  // TL fiyat filtresi
  eleventyConfig.addFilter("currency", (num) => {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
    }).format(num);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes",
      output: "dist",
    },
    templateFormats: ["html", "njk", "md"],
  };
}