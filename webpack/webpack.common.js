const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const srcDir = path.join(__dirname, "..", "src");
const Dotenv = require("dotenv-webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const tsConfigPath = path.resolve(__dirname, "../tsconfig.json");

module.exports = {
  entry: {
    popup: path.join(srcDir, "view/Home/index.ts"),
    background: path.join(srcDir, "background/background.ts"),
    Github: path.join(srcDir, "Github.ts"),
    Programmers: path.join(srcDir, "view/AlgorithmSite/Programmers/index.ts"),
    Leetcode: path.join(srcDir, "Leetcode/Leetcode.ts"),
    Baekjun: path.join(srcDir, "view/AlgorithmSite/Baekjun/index.ts"),
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
    new HtmlPlugin({
      template: "./popup.html",
      filename: "popup.html",
      scriptLoading: "defer",
      inject: "body",
      chunks: ["popup"],
    }),
    new Dotenv(),
    new CopyPlugin({
      patterns: [{ from: ".", to: "./", context: "public" }],
      options: {},
    }),
  ],
  resolve: {
    extensions: [".ts", ".js"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: tsConfigPath,
      }),
    ],
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "js/[name].js",
    clean: true,
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
