const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const uglifyJS = require('./webpack/js.uglify');
const devtool = require('./webpack/devtool');

const paths = {
    build: path.join(__dirname, './build'),
    sass: path.join(__dirname, './sass')
};

module.exports = env => {

    // Получаем окуржение
    let testEnv = (function (env) {
        if (env === 'prod') {
            console.log('-------- Production');
            return true;
        } else {
            console.log('-------- Development');
            return false;
        }
    })(env);

    // Основные настройки
    let common = merge(
        [{
            entry: {
                // bundle.js, style.css попадают в placeholder name
                // пути указанные в свойстве актуальны для компиляции,
                // т.е. собранный [name].{js,css} будет доступен по
                // paths.build + path/to/entry + [name].{js,css,etc.}
                'bundle/bundle.js': './bundle/bundle.js',
                'css/style.css': './sass/style.scss'
            },
            output: {
                path: paths.build,
                filename: "[name]"
            },
            // опции лоадеров на генерацию source-map не влияют
            plugins: [
                new webpack.ProvidePlugin({
                    $: 'jquery',
                    jQuery: 'jquery'
                }),
                // можно задать путь и расширение, но будет путаница
                new ExtractTextPlugin('[name]')
            ],
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env']
                            }
                        }
                    },
                    {
                        test: /\.(jpg|png|svg)$/,
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        },
                    },
                    // loader для компиляции scss в отдельный сss
                    {
                        test: /\.scss$/,
                        include: [
                            paths.sass,
                        ],
                        use: ExtractTextPlugin.extract({
                            fallback: 'style-loader',
                            use:
                                [{
                                    loader: 'css-loader',
                                    options: {
                                        //url: false потому что иначе не заработало...
                                        url: false,
                                        minimize: testEnv,
                                    }
                                },
                                    {
                                        loader: 'sass-loader',
                                }],
                        })
                    },
                    {
                        test: /\.css$/,
                        include: [
                            // paths.css возможно понадобиться указать папку где лежат css
                        ],
                        use: ExtractTextPlugin.extract({
                            fallback: 'style-loader',
                            use: 'css-loader',
                        })
                    }
                ]
            }
        }
    ]);

    // возвращаем настройки
    if (!testEnv) {
        return merge([
            common,
            devtool()
        ]);
    } else {
        return merge([
            common,
            uglifyJS()
        ]);
    }
};
