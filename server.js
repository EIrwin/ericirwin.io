// @flow
const PORT = process.env.PORT || 8080;
const SparkPost = require('sparkpost');
const isProduction = process.env.NODE_ENV === 'production';
const SPARKPOST_KEY = process.env.SPARKPOST_KEY;

if (isProduction) {
  const express = require('express');
  const app = express();
  const path = require('path');

  // $FlowFixMe
  app.post('/contact', (req, res) => {
    const sparky = new SparkPost(SPARKPOST_KEY);

    sparky.transmissions
      .send({
        content: {
          from: 'contact@ericirwin.io',
          subject: 'Contact Form Request',
          html: '<html><body><p>{body}</p></body></html>',
        },
        recipients: [{ address: 'Eric.Irwin1124@gmail.com' }],
      })
      .then(data => {
        res.status(200).json({ status: 'ok' });
        console.log('Woohoo! You just sent your first mailing!');
      })
      .catch(err => {
        res.status(200).json({ status: 'ok' });
        console.log('Whoops! Something went wrong');
      });
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
