module.exports = function (eleventyConfig) {
   // Add classes, identifiers and attributes to markdown with e.g. { .text-xl }
  // See https://github.com/arve0/markdown-it-attrs
  let markdownIt = require("markdown-it");
  const markdownItAttrs = require("markdown-it-attrs");
  const markdownItdeflist = require("markdown-it-deflist");
  let options = {
    html: true,
  };
  let markdownLib = markdownIt(options)
    .use(markdownItAttrs)
    .use(markdownItdeflist);

  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.addFilter("markdown", function (value) {
    let markdown = require("markdown-it")({
      html: true,
    });
    return markdown.use(markdownItAttrs).use(markdownItdeflist).render(value);
  });

  eleventyConfig.setDataDeepMerge(true);


  eleventyConfig.addFilter("getAuthor", (authors,label) => {
    let author = authors.filter(a => a.key === label)[0];
    return author;
  });

  eleventyConfig.addFilter("getPostsByAuthor", (posts,author) => {
    return posts.filter(a => a.data.author === author);
  });

  
  eleventyConfig.addCollection("tagList", function(collection) {
    let tagSet = new Set();
    collection.getAll().forEach(function(item) {
      if( "tags" in item.data ) {
        let tags = item.data.tags;

        tags = tags.filter(function(item) {
          switch(item) {
            // this list should match the `filter` list in tags.njk
            case "all":
            case "nav":
            case "post":
            case "posts":
              return false;
          }

          return true;
        });

        for (const tag of tags) {
          tagSet.add(tag);
        }
      }
    });

    // returning an array in addCollection works in Eleventy 0.5.3
    return [...tagSet];
  });

  eleventyConfig.addPassthroughCopy("src/assets/js/");
  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy('src/assets/json');
  // Find and copy any `jpg` files, maintaining directory structure.
  eleventyConfig.addPassthroughCopy("src/posts/**/*.jpg");
  // eleventyConfig.addPassthroughCopy("**/*.png");

    return {
      passthroughFileCopy: true,
      dir: {
        input: 'src',
        includes: '_includes',
        data: '_data',
        output: '_site',
      },
    };
  };