const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config();

module.exports = {
  entry: './src/index.js',
  mode: process.env.NODE_ENV || "development",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    port: process.env.PORT || 3000,
    allowedHosts: ['.gitpod.io']
  }
};
