const { config } = require('dotenv')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

config()

const { NODE_ENV } = process.env

module.exports = {
  entry: {
    server: ['@babel/polyfill', './src/server.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'server.bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: path.resolve(__dirname, 'node_modules/'),
      loader: 'babel-loader',
      query: {
        presets: ['@babel/preset-env']
      }
    }]
  },
  mode: NODE_ENV,
  target: 'node',
  watch: NODE_ENV === 'development',
  externals: [nodeExternals()]
}
