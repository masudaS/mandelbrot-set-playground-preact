const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

const src = path.resolve(__dirname, "src");
const dist = path.resolve(__dirname, "dist");

module.exports = {
  mode: "development",
  entry: path.join(src, "app.tsx"),
  output: {
    path: dist,
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      }
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(src, "index.html")
    })
  ]
}