const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/dist/',
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
                "sass-loader"
              ]
            },
            {
              test: /\.(png|jpg|gif|svg)$/i,
              use: {
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                  context: 'src/images',
                  outputPath: '/css/images'
                }
              }
            }
        ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '/css/[name].css'
      }),
    ]
};
