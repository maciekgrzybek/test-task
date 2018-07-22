const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      }
      // {
      //   test: /\.html$/,
      //   use: {
      //     loader: "html-loader",
      //     options: { minimize: true }
      //   }
      // }
    ]
  },
  plugins: [new ExtractTextPlugin({ filename: "style.css" })]
  // plugins: [
  //   new HtmlWebPackPlugin({
  //     template: "./src/index.html",
  //     filename: "../index.html"
  //   })
  // ]
};
