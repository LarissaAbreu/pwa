const webpack = require('webpack')
const path = require('path')

const SOURCE_DIR = path.resolve(__dirname, './src')
const LIB_DIR = path.resolve(__dirname, './lib')

module.exports = {
  entry: `${SOURCE_DIR}/index.ts`,

  output: {
    path: LIB_DIR,
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: SOURCE_DIR,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  }
}
