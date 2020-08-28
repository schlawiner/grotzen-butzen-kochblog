module.exports = function (eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);
  
  eleventyConfig.addPassthroughCopy("src/assets/js/");
  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy('src/assets/json');
  // Find and copy any `jpg` files, maintaining directory structure.
  eleventyConfig.addPassthroughCopy("jpg");
  eleventyConfig.addPassthroughCopy("png");

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