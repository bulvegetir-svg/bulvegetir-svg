// .eleventy.js (GÜNCELLENMİŞ YOL)
import fs from "fs";

export default function (eleventyConfig) {
  // Statik dosyalar
  eleventyConfig.addPassthroughCopy({
    "src/assets": "assets",
  });

  // --- DÜZELTİLEN ÇÖZÜM: Ürün koleksiyonu ---
  eleventyConfig.addCollection("products", () => {
    // Yolu _data olarak düzelttik
    const data = JSON.parse(fs.readFileSync("./src/_data/products.json", "utf-8"));
    return data.products;
  });
  // ----------------------------------------

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