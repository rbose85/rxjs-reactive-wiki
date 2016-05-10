const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  dist: path.resolve(__dirname, '../', 'dist'),
  src: path.resolve(__dirname, '../', 'src')
}

exports.default = {
  entry: './index.js',
  context: PATHS.src,
  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, include: PATHS.src, loaders: ['babel'] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
