const webpack = require('webpack')
const path = require('path')

const SOURCE_DIR = path.resolve(__dirname, './src')
const BUILD_DIR = path.resolve(__dirname, './build')

module.exports = {
  entry: `${SOURCE_DIR}/index.tsx`,

  devServer: {
    contentBase: BUILD_DIR,
    compress: true,
    port: 3000,
    hot: false
  },

  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js'
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },

  optimization: {
    minimize: false
  },

  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true
            }
          }
        ]
      },
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
