/** 
@type {import('@types/webpack').Configuration}
*/

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');
const config = require('./config');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    // Runtime code for hot module replacement
    hot: 'webpack/hot/dev-server.js',
    // Dev server client for web socket transport, hot and live reload logic
    client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
  },
  devServer: {
    client: {
      webSocketURL: `ws://localhost:${config.port || 8080}/ws`,
      webSocketTransport: 'ws',
      reconnect: 3,
    },
    webSocketServer: 'ws',
    allowedHosts: 'all',
    ...(config &&
      config.hostname && {
        open: config.hostname,
      }),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
  infrastructureLogging: {
    level: 'error',
  },
});
