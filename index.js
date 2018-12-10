// @flow
const isProduction = process.env.NODE_ENV === 'production';

if (!isProduction) {
  // Babel polyfill to convert ES6 code in runtime
  require('babel-register')({
    plugins: [
      [
        'babel-plugin-webpack-loaders',
        {
          verbose: false,
        },
      ],
    ],
  });
  require('babel-polyfill');
  require('./server');
}
