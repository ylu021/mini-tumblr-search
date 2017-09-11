const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const Dotenv = require('dotenv-webpack');

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
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'postcss-loader?sourceMap',
          'sass-loader?sourceMap'
        ],
        test: /\.scss$/
      }
    ]
  },
  node: {
    fs: 'empty'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new StyleLintPlugin({
      files: ['**/*.s?(a|c)ss'],
      syntax: 'scss'
    }),
    new Dotenv({
      path: './.env',
      safe: false
    })
  ]
};
