const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // installed via npm
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.[hash].js"
  },
  plugins: [new CleanWebpackPlugin()]
});
