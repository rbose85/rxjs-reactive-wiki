const path = require('path')
const webpack = require('webpack')
const config = require('./base').default

const PATHS = {
  dist: path.resolve(__dirname, '../', 'dist'),
  src: path.resolve(__dirname, '../', 'src')
}

Object.assign(config, {
  cache: true,
  devtool: 'source-map',
  devServer: {
    colors: true,
    contentBase: './dist',
    historyApiFallback: true
  }
})

config.module.loaders = config.module.loaders.concat([
  { test: /\.css/, include: PATHS.src, loaders: ['style', 'css'] }
])

exports.default = config
