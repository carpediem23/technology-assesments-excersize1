const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

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
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
              url: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'autoprefixer',
                    {
                      // Options
                    }
                  ]
                ]
              }
            }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: './fonts/[name].[hash][ext]'
        }
      }
    ]
  },
  plugins: [
    new Dotenv(),
    require('autoprefixer'),
    new CopyPlugin({
      patterns: [
        { from: './public/manifest.webmanifest', to: '.' },
        { from: './public/icon.png', to: 'assets/' }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash].css'
    }),
    new HTMLWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: 'index.html',
      favicon: './public/favicon.ico',
      publicPath: '.',
      manifest: './public/manifest.json'
    })
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    allowedHosts: ['.gitpod.io'],
    historyApiFallback: true,
    open: false
  }
};
