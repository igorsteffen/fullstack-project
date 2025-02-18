const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
      clean: true,
    },

    module: {
        
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
      ],
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 9000,
        hot: true,
    },
    mode: 'development'
  };