/**
 * This server is to run your build locally
 */

const PORT = process.env.PORT || 8080;

const isProduction = process.env.NODE_ENV === 'production';

if (isProduction) {
  const express = require('express');
  const app = express();
  const path = require('path');

  // Configure static resources
  app.use(
    express.static(
      path.join(__dirname, '/dist')
    )
  );

  // Configure server-side routing
  app.get('*', (req, res) => {
    const dist = path.join(
      __dirname, '/dist/index.html'
    );
    res.sendFile(dist);
  });

  // Open socket
  app.listen(PORT, () => {
    console.log(`Started Express server on port ${PORT}`);
  });

} else {
  const webpack = require('webpack');
  const WebpackDevServer = require('webpack-dev-server');
  const config = require('./webpack.config.js');

  new WebpackDevServer(webpack(config), {
    hot: true,
    historyApiFallback: true
  }).listen(PORT, 'localhost', error => {
    console.log(error || `Started WebpackDevServer on port ${PORT}`);
  });
}
