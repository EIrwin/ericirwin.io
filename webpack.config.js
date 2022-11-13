// @flow
const path = require('path');
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const merge = require('webpack-merge');

const getEnvVar = (name, { optional } = { optional: false }) => {
  const envVar = process.env[name];
  if (!optional && !envVar) {
    throw new Error(
      `Missing env var ${name} . Did you forget to add it to a .env file or the Dockerfile?`,
    );
  }

  return JSON.stringify(envVar);
};

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  node: {
    fs: 'empty',
    tls: 'empty',
    net: 'empty',
  },
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        loader: 'url-loader?limit=10000',
      },
      {
        test: /\.(ttf|eot)(\?[\s\S]+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};

const envConfig = isProduction
  ? require('./webpack.production')
  : require('./webpack.development');

module.exports = merge(config, envConfig);
