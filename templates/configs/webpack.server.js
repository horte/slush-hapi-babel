const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  target: 'node',
  cache: false,
  context: path.resolve(__dirname, '..', 'src/'),
  debug: false,
  devtool: 'source-map',
  entry: ['../src/index.js'],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'server.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      __PRODUCTION__: true,
      __DEVELOPMENT__: false,
    }),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '\'production\'' } }),
  ],
  module: {
    loaders: [
      {
        test: /\.json$/, loaders: ['json'],
      },
      {
        test: /\.js$/,
        loaders: ['babel?presets[]=es2015&presets[]=stage-0'],
        exclude: /node_modules/,
      },
    ],
    postLoaders: [],
    noParse: /\.min\.js/,
  },
  externals: [nodeExternals({
    whitelist: ['webpack/hot/poll?1000'],
  })],
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules',
      'static',
    ],
    extensions: ['', '.json', '.js'],
  },
  node: {
    __dirname: true,
    fs: 'empty',
  },
};
