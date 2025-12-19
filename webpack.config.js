const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  devtool: isDev ? "source-map" : false,

  entry: "./src/scripts/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "",
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
    open: true,
    port: 3000,
    watchFiles: ["src/**/*.html"],
    liveReload: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[name].[ext]",
        },
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          "resolve-url-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: "body",
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
};
