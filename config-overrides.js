const { useBabelRc, override, addWebpackPlugin, addWebpackResolve } = require('customize-cra');

const DotenvWebpackPlugin = require('dotenv-webpack');
const NodePolyfillWebpackPlugin = require('node-polyfill-webpack-plugin');
const webpack = require('webpack');

class TopLevelAwaitPlugin {
  apply(compiler) {
    compiler.options.experiments = {
      topLevelAwait: true
    };
  }
}

module.exports = override(
  useBabelRc(),
  addWebpackPlugin(new TopLevelAwaitPlugin()),
  addWebpackPlugin(new webpack.ProvidePlugin({
    process: 'process/browser.js',
    Buffer: ['buffer', 'Buffer']
  })),
  addWebpackResolve({
    fallback: {
      console: require.resolve('console-browserify'),
      child_process: false,
      fs: require.resolve('browserify-fs'),
      net: require.resolve('net-browserify'),
      tls: require.resolve('tls-browserify'),
      assert: require.resolve("assert"),
      util: require.resolve('util/'),
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer/'),
      constants: require.resolve('constants-browserify'),
      crypto: require.resolve('crypto-browserify'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      os: require.resolve('os-browserify/browser'),
      path: require.resolve('path-browserify'),
      punycode: require.resolve('punycode'),
      querystring: require.resolve('querystring-es3'),
      string_decoder: require.resolve('string_decoder/'),
      sys: require.resolve('util/'),
      timers: require.resolve('timers-browserify'),
      tty: require.resolve('tty-browserify'),
      url: require.resolve('url/'),
      vm: require.resolve('vm-browserify'),
      zlib: require.resolve('browserify-zlib')
    }
  }),
  addWebpackPlugin(new webpack.NormalModuleReplacementPlugin(/node:/, (resource) => {
    resource.request = resource.request.replace(/^node:/, "");
  })),
  addWebpackPlugin(new NodePolyfillWebpackPlugin()),
  addWebpackPlugin(new DotenvWebpackPlugin())
);
