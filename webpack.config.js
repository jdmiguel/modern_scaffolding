const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const MODE_ENV = process.env.MODE;

module.exports = {
  mode: 'development',

  name: 'webpack_config',

  context: path.resolve(__dirname, 'src'),

  entry: {
    app: './index.js'
  },

  devServer: {
    compress: true,
    port: 9090,
    hot: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack_config',
      template: '../assets/template-app.ejs',
      filename: 'index.html',
      hash: true
    }),

    new MiniCssExtractPlugin({
      filename: '[name]-styles.css'
    }),

    new webpack.DefinePlugin({
      MODE: JSON.stringify(MODE_ENV)
    })
  ]
};
