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
  addWebpackPlugin(new NodePolyfillWebpackPlugin()),
  addWebpackResolve({
    fallback: {
      fs: false,
      net: false,
      tls: false,
      path: false,
      crypto: false,
      stream: false,
      zlib: false,
      http: false,
      https: false,
      os: false,
      assert: false,
      buffer: false,
      util: false,
      url: false,
      querystring: false,
      constants: false,
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
  addWebpackPlugin(new webpack.NormalModuleReplacementPlugin(/node:/, (resource) => {
                    resource.request = resource.request.replace(/^node:/, "");
                  }),
  )
);