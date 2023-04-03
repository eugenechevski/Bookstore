const { useBabelRc, override, addWebpackPlugin, addWebpackResolve } = require('customize-cra');

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
  addWebpackPlugin(new NodePolyfillWebpackPlugin())
);



/*
module.exports = override(
  useBabelRc(),
  addWebpackPlugin(new TopLevelAwaitPlugin()),
  addWebpackPlugin(new NodePolyfillWebpackPlugin()),
);
  addWebpackResolve({
    fallback: {
      fs: false,
      net: false,
      tls: false,
      path: require.resolve('path-browserify'), // fallback for path module
      crypto: require.resolve('crypto-browserify'), // fallback for crypto module
      stream: require.resolve('stream-browserify'), // fallback for stream module
      zlib: require.resolve('browserify-zlib'), // fallback for zlib module
      http: require.resolve('stream-http'), // fallback for http module
      https: require.resolve('https-browserify'), // fallback for https module
      os: require.resolve('os-browserify/browser'), // fallback for os module
      assert: require.resolve('assert/'), // fallback for assert module
      buffer: require.resolve('buffer/'), // fallback for buffer module
      util: require.resolve('util/'), // fallback for util module
      url: require.resolve('url/'), // fallback for url module
      querystring: require.resolve('querystring/'), // fallback for querystring module
      constants: require.resolve('constants-browserify'), // fallback for constants module
      vm: false,
      child_process: false,
      string_decoder: false,
      events: false,
      dgram: false,
      dns: false,
      readline: false,
      tty: false,
    }
  }),
  
  )
);
*/