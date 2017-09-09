const path = require('path');

module.exports = {
  devServer: {
    contentBase: [
      'public/'
    ],
    host: '0.0.0.0',
    inline: true,
    publicPath: '/dist/',
    watchContentBase: true
  },
  entry: {
    index: './src/index.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/
      },
      {
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'resolve-url',
          'postcss-loader?sourceMap',
          'sass?sourceMap'
        ],
        test: /\.scss$/
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  }
};
