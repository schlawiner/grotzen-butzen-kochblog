# grotzen-butzen-kochblog
Converting my old food blog from Wordpress to 11ty

What I did (documented, so I can retrace my steps later):

1. Export Wordpress stuff: https://wordpress.com/export/apfeleimer.wordpress.com ("select all"). I also exported media content, but didn't need it in the end, because the converted I chose downloaded all the images from the live site.
2. Use npm package https://github.com/lonekorean/wordpress-export-to-markdown to turn the exported xml into markdown. I cloned and installed the repo (`npm install`), but you could just run directly using `npx wordpress-export-to-markdown`. 
3. Unzip and copy the xml you get into the exporter package's folder. Should probably rename it from `whateveryourblogname-plus-stuff.xml` to `export.xml` to save you some copy-pasting when converting.
4. Convert using `node index.js --addcontentimages=true`, which makes sure the image paths in your mardown files lead to your local copy of the image, not to the copy of your image on wordpress servers. Other options I chose in the "wizard" that you are being run through, without giving it much thought: I created **year and month** folders. 
5. Make a repo for the project at github (this one) and clone it on your machine.
6. Go into the folder and set up eleventy: 
```
npm init -y
npm install @11ty/eleventy --save-dev
```
7. Create some basic standard eleventy folders and config files: 
    
    - `src` for the source files such as your markdown blog posts, with subfolders `_data`and `_includes` (which gets its own subfolder `layouts` for any layout templates you'll make and use) 
    - `_site` as the output folder where eleventy will place the html files it generates from markdown in `src`.
    - make a **.gitignore** file for node_modules and _site so you don't add the generated html (or node modules) to the repo.
    - tell eleventy you want to use these folders: see my `.eleventy.js` file.
7. Copy the folder of markdown files created by the converter package (aka "your old blog") (usually in "output" of the package's folder structure) into the `src`folder. I made a subfolder `posts` for them, as is traditional for blogs.
8. Make an index.md for the site and make a basic html page template (`layouts/base.njk`). Tell every md in posts to use your new layout `base.njk` by creating a json file in the posts directory, also called posts.json, and adding `"layout": "layouts/base.njk"`
9. Check to see wheter eleventy spits out your blog as html pages (starting a live server): `npx @11ty/eleventy --serve`
9. Commit and push!

TODO:
- [ ] Add Tailwind and PostCSS for styling
- [ ] Make a nice basic layout template for each recipe page
- [ ] Think about navigation concept, create index page layout
- [ ] Add Alpine for reactivity