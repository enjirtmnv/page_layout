const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "main.js"
    },
    mode: 'development',
    devtool: "source-map",
    devServer: {
        port: 8000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.pug$/,
                loader: "pug-loader",
                options: {
                    "pretty":true
                }
            }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: "./src/client/index.html",
        //     filename: "./index.html"
        // }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: './src/client/index.pug'
        }),
        new CleanWebpackPlugin(),
    ]
};


