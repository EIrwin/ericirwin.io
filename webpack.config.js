const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader"
        ]
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
    // new CopyWebpackPlugin([
    //   { from: 'public' }
    // ]),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
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
