const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const PLATFORM_ENV = process.env.PLATFORM;
const MODE_ENV = process.env.MODE;

module.exports = {
  mode: 'none',

  name: 'webpack_config',

  context: path.resolve(__dirname, 'src'),

  entry: {
    app: './index.js',
  },

  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true,
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack_config',
      template: '../assets/template-app.ejs',
      filename: 'index.html',
      hash: true,
    }),

    new MiniCssExtractPlugin({
      filename: '[name]-styles.css',
    }),

    new webpack.DefinePlugin({
      PLATFORM: JSON.stringify(PLATFORM_ENV),
      MODE: JSON.stringify(MODE_ENV),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};

