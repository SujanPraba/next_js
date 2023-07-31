/** @type {import('next').NextConfig} */
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // Other config options ...

  // webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
  //   config.module.generator.asset.publicPath = "/_next/";
  //   config.plugins.push(
  //     new MiniCssExtractPlugin({
  //       experimentalUseImportModule: false,
  //     })
  //   );
  //   return config;
  // },

  // Other config options ...
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};
