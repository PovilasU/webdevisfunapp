const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // installed via npm
const common = require("./webpack.common");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].[hash].bundle.js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "[name].[hash].css" })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader, // 3. Extract css into files
          "css-loader", //2. Turns css into common js
          "sass-loader" //1. Turns sass into css
        ]
      }
    ]
  }
});
