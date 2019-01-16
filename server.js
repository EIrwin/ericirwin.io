// @flow
const PORT = process.env.PORT || 8080;
const SparkPost = require('sparkpost');
const isProduction = process.env.NODE_ENV === 'production';
const SPARKPOST_KEY = process.env.SPARKPOST_KEY;
const SPARKPOST_SENDER_EMAIL = 'contact@ericirwin.io';

if (isProduction) {
  const express = require('express');
  const app = express();
  const path = require('path');

  app.use(express.json());

  // $FlowFixMe
  app.post('/contact', async (req, res) => {
    const { body, name, subject, email } = req.body;
    const sparky = new SparkPost(SPARKPOST_KEY);
    try {
      await sparky.transmissions.send({
        content: {
          from: SPARKPOST_SENDER_EMAIL,
          subject,
          text: `${body}\r\n\r\nFrom ${name}(${email})`,
        },
        recipients: [{ address: 'Eric.Irwin1124@gmail.com' }],
      });
      res.status(200).json({ status: 'ok' });
    } catch (err) {
      res.status(500).json({ message: 'An error occurred' });
    }
  });

  // $FlowFixMe
  app.use('/public', express.static(__dirname + '/public'));
  app.use(express.static(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, '/dist')));

  // Open socket
  app.listen(PORT, () => {
    console.log(`Started Express server on port ${PORT}`);
  });
} else {
  const webpack = require('webpack');
  const WebpackDevServer = require('webpack-dev-server');
  const config = require('./webpack.config.js');

  // $FlowFixMe
  new WebpackDevServer(webpack(config), {
    hot: true,
    historyApiFallback: true,
  }).listen(PORT, 'localhost', error => {
    console.log(error || `Started WebpackDevServer on port ${PORT}`);
  });
}
