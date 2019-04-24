const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const webpack = require('webpack');

module.exports = merge(webpackConfig, {

    devtool: 'eval',

    output: {
        pathinfo: true,
        publicPath: '/',
        filename: '[name].[hash].js',
    },

    devServer: {
        host: '0.0.0.0',
        hot: true,
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]

});
