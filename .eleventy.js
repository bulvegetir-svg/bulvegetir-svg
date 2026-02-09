// .eleventy.js  (SON ve TEMİZ)

export default function (eleventyConfig) {
  // Statik dosyalar
  eleventyConfig.addPassthroughCopy({
    "src/assets": "assets",
  });

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
