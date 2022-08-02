const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource'
      },
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
        publicPath: ''
  },
  devServer: {
    static: path.resolve(__dirname, './dist'), 
    compress: true, 
    port: 3000,
    hot: false,
    open: true 
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), 
    new HtmlWebpackPlugin({
    template: './src/index.html'
  }), 
    new CleanWebpackPlugin()]
};
