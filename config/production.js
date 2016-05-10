const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('./base').default

Object.assign(config, {
  cache: false
})

config.plugins = config.plugins.concat([
  new ExtractTextPlugin('styles.css'),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.NoErrorsPlugin()
])

config.module.loaders = config.module.loaders.concat([
  { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') }
])

exports.default = config
