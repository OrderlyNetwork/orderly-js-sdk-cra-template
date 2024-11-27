const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  typescript: {
    enableTypeChecking: false,
  },
  webpack: {
    // configure: (webpackConfig, { env, paths }) => {
    //   return webpackConfig;
    // },
    plugins: [
      /**
       * plugin docs: https://github.com/Richienb/node-polyfill-webpack-plugin
       * node stdlib browser docs: https://github.com/niksy/node-stdlib-browser
       * If you need to reduce the bundle size, you can precisely specify the following polyfill:
       * ["assert", "buffer", "crypto", "http", "https", "os", "process", "stream", "url", "vm", "zlib"]
       */
      new NodePolyfillPlugin({
        additionalAliases: ["process"],
      }),
    ],
  },
};
