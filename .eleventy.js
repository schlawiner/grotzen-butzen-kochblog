module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/js/");
  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy('src/assets/json');

    return {
      // passthroughFileCopy: true,
      dir: {
        input: 'src',
        includes: '_includes',
        data: '_data',
        output: '_site',
      },
    };
  };