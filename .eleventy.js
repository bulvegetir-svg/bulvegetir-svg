// .eleventy.js
module.exports = function(eleventyConfig) {
  // search-data.xml dosyasını olduğu gibi dist'e kopyala
  eleventyConfig.addPassthroughCopy("src/search-data.xml");

  // Assets klasörünü olduğu gibi kopyala
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};