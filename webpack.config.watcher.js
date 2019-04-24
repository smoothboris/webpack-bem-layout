const path = require('path');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = merge(webpackConfig, {

    devtool: 'source-map',

    output: {
        path: path.join(__dirname, '../public_html/templates/shaper_helix3/app'),
        // path: path.join(__dirname, 'dist'),
        // filename: '[name].js'
        filename: '[name].js'
    },

    plugins: [
       // new HardSourceWebpackPlugin,
    ],

    watch: true
});
