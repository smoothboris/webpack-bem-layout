const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Is the current build a development build
const IS_DEV = (process.env.NODE_ENV === 'dev');

const dirNode = 'node_modules';
const dirApp = path.join(__dirname, 'App');
const dirAssets = path.join(__dirname, 'assets');

module.exports = {
    entry: {
        //vendor: [
        //    'jquery'
        //],
        app: path.join(dirApp, 'App')
    },
    resolve: {
        modules: [
            dirNode,
            dirApp,
            dirAssets
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            IS_DEV: IS_DEV
        }),

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.ejs'),
            title: 'Webpack Starter Kit',
            // filename: 'index.html'
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            // chunkFilename: '[id].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                options: {
                    // compact: true
                }
            },
            {
                test: /\.(sc|c)ss$/,
                use: [
                    // 'css-hot-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: IS_DEV,
                            // if hmr does not work, this is a forceful method.
                            reloadAll: IS_DEV,
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: IS_DEV
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            data: '@import "./Layout/Variables.scss";',
                            sourceMap: IS_DEV,
                            includePaths: [dirAssets]
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|woff2|woff|eot|svg|css|ttf)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            }
        ]
    }
};
