const htmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const path = require('path');

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

module.exports = {
  entry: [
    path.resolve(__dirname, 'client/index.js')
  ],
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.(sass|scss|css)$/,
      loader: ['style-loader', 'css-loader', 'sass-loader']
    }]
  },
  resolve: { extensions: ['.js', '.jsx', '.css'] },
  output: {
    path: path.join(__dirname, 'client-dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'cheap-eval-source-map',
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new Dotenv({
      systemvars: true
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, './client/index.html')
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'client-dist'),
    historyApiFallback: true
  }
};

