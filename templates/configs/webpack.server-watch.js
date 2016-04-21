const webpack = require('webpack');
const config = require('./webpack.server.js');
const wds = {
  hostname: process.env.SERVER_HOST || '0.0.0.0',
  port: process.env.SERVER_PORT || 8080,
};

config.cache = true;
config.debug = true;

config.entry.unshift(
  'webpack/hot/poll?1000'
);

config.output.publicPath = 'http://' + wds.hostname + ':' + wds.port + '/dist';

config.plugins = [
  new webpack.DefinePlugin({ __PRODUCTION__: false, __DEVELOPMENT__: true }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
];

module.exports = config;
