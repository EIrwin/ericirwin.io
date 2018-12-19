// @flow
const merge = require('webpack-merge');
const common = require('./webpack.config.js');

const config = require('./config');

module.exports = merge(common, {
  mode: 'development',
  entry: [
    './src/index.js',
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${config.Port}`,
    // 'webpack/hot/only-dev-server',
  ],
});
