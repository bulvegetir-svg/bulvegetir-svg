module.exports = function(eleventyConfig) {
  // Statik dosyaları kopyala
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src/pages",
      output: "dist"
    },
    templateFormats: ["njk", "html"],
    htmlTemplateEngine: "njk"
  };
};
