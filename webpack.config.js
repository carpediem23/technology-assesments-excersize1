const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const HTMLWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config();

module.exports = {
  entry: './src/index.js',
  mode: process.env.NODE_ENV || 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash].js'
  },
  resolve: { modules: [path.resolve(__dirname, 'src'), 'node_modules'] },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./public/manifest.webmanifest", to: "." },
        { from: "./public/icon.png", to: "assets/" },
      ],
    }),
    new HTMLWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: "index.html",
      favicon: './public/favicon.ico',
      publicPath: '.',
      manifest: './public/manifest.json',
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    port: process.env.PORT || 3000,
    allowedHosts: ['.gitpod.io'],
    historyApiFallback: true,
    open: true
  }
};
