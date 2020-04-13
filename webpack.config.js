const path = require('path');
const webpack = require('webpack');
/* const { CleanWebpackPlugin } = require("clean-webpack-plugin"); */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    watch:true,
    watchOptions: {
      ignored: /node_modules/
    },
    resolve: { extensions: [".js", ".ts", 'json', '.scss'] },
    devServer: {
        contentBase: 'dist',
        port: 8080,
        open: true
      },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    "presets": [
                        "@babel/preset-env"
                    ]
                  }
                }
            },
            {
              test: /\.(sa|sc|c)ss$/,
              use: [
                "style-loader",
                MiniCssExtractPlugin.loader,
                "css-loader",
                {
                  loader: 'postcss-loader',
                  options: {
                    plugins: () => [autoprefixer()]
                  }
                },
                "sass-loader"
              ]
            },
            {
              test: /\.(png|jpg|jfif|gif|svg)$/i,
              use: {
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                  context: 'src/images',
                  outputPath: '/images'
                }
              }
            }
        ]
    },
    plugins: [

      /* new CleanWebpackPlugin(), */

      new HtmlWebpackPlugin({
        title: 'Leonie Holmes Counselling',
        template: 'index.html'
      }), 

      new MiniCssExtractPlugin({
        filename: "bundle.css"
      })
    
    ]
};
