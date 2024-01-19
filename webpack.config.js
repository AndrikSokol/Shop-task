const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const isDev = env.mode == "development";
  return {
    mode: env.mode ?? "development",
    entry: "./src/js/index.js",
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
      assetModuleFilename: "images/[hash][ext][query]",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: ["style-loader", "css-loader", "sass-loader"],
          exclude: /node_modules/,
        },

        {
          test: /\.(png|jpg|gif)$/i,
          type: "asset/resource",
        },

        {
          test: /\.svg/,
          use: {
            loader: "svg-url-loader",
            options: {
              // make all svg images to work in IE
              iesafe: true,
            },
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html"),
      }),
    ],

    devtool: isDev ? "inline-source-map" : false,
    devServer: {
      port: 3000,
      open: true,
      hot: true,
    },
  };
};
