const Encore = require("@symfony/webpack-encore");

/* Manually configure the runtime environment if not already configured yet by the "encore" command.
   It's useful when you use tools that rely on webpack.config.js file. */
if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || "dev");
}

Encore.setOutputPath("build/")
  .setPublicPath("/build")
  .setManifestKeyPrefix("build")
  .addEntry("main", "./assets/js/main.js")
  .enableSingleRuntimeChunk()
  .enableSourceMaps(!Encore.isProduction())
  /* enables @babel/preset-env polyfills */
  // .configureBabelPresetEnv((config) => {
  //   config.useBuiltIns = "usage";
  //   config.corejs = 3;
  // })
  /* enables Sass/SCSS support */
  // .enableSassLoader(function (options) {
  //   /* The following options should be autodetected and are kept for documentation reasons
  //   See https://github.com/webpack-contrib/sass-loader#implementation */
  //   options.implementation = require("sass"); // Force dart-sass
  //   options.sassOptions = {
  //     fiber: require("fibers"), // Force fibers to call asynchronous importers from the synchronous code path.
  //   };
  // }, {})
  .enablePostCssLoader();

if (Encore.isProduction()) {
  Encore.cleanupOutputBeforeBuild().enableVersioning();
}

module.exports = Encore.getWebpackConfig();
