const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appConfig = require('./config');
const isProduction = process.env.NODE_ENV;

const config = {
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      inject: 'body'
    }),
  ]
};


if (isProduction) {
  config.mode = 'production';
} else {
  config.mode = 'development';
  config.entry = [
    './src/index.js',
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${appConfig.Port}`,
    'webpack/hot/only-dev-server',
  ]
}

module.exports = config;
