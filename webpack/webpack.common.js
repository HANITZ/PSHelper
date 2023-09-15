const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const srcDir = path.join(__dirname, "..", "src");
const Dotenv = require("dotenv-webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    popup: path.join(srcDir, "popup.ts"),
    home: path.join(srcDir, "Home.ts"),
    background: path.join(srcDir, "background.ts"),
    Github: path.join(srcDir, "Github.ts"),
    Programmers: path.join(srcDir, "Programmers.ts"),
  },

  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv(),
    new CopyPlugin({
      patterns: [{ from: ".", to: "../", context: "public" }],
      options: {},
    }),
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    path: path.join(__dirname, "../dist/js"),
    filename: "[name].js",
  },

  // optimization: {
  //   splitChunks: {
  //     name: (module, chunks, cacheGroupKey) => {
  //       const allChunksNames = chunks.map((chunk) => chunk.name).join("-");
  //       return allChunksNames;
  //     },
  //     chunks(chunk) {
  //       return chunk.name !== "background";
  //     },

  //   },
  // },
};
