const webpack = require("webpack");
const path = require("path");
// const { GitRevisionPlugin } = require("git-revision-webpack-plugin");

module.exports = {
  typescript: {
    enableTypeChecking: false,
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.resolve.fallback = {
        https: require.resolve("https-browserify"),
        crypto: require.resolve("crypto-browserify"),
        os: require.resolve("os-browserify"),
        http: require.resolve("stream-http"),
        url: require.resolve("url"),
        stream: require.resolve("stream-browserify"),
        vm: require.resolve("vm-browserify"),
        assert: require.resolve("assert"),
        buffer: require.resolve("buffer"),
        "process/browser": require.resolve("process/browser"),
        zlib: require.resolve("browserify-zlib"),
      };
      return webpackConfig;
    },
    // alias: {
    //     'bn.js': path.resolve(process.cwd(), 'node_modules', 'bn.js'),
    //     goober: path.resolve(process.cwd(), 'node_modules', 'goober'),
    // },
    plugins: [
      new webpack.ProvidePlugin({
        process: "process/browser",
      }),
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
      // new webpack.DefinePlugin({ COMMIT_HASH }),
    ],
  },
};
