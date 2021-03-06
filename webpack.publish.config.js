/**
 * Created by AllenFeng on 2016/11/2.
 */
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: [
        'whatwg-fetch',
        './src/app/main.js',
        './src/styles/main.scss',
        './src/styles/main.css'
    ],
    output: {
        path: path.resolve(__dirname, "assets"),
        publicPath: "/public/",
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'eslint'
        }],
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.(css|scss)$/,
            loader: ExtractTextPlugin.extract("style", "css!sass?sourceMap")
        }]
    },
    resolve: {
        extension: ['', '.js', '.jsx'],
        /*        alias: {
         'react': path.join(__dirname, 'node_modules', 'react/dist/react.min.js'),
         'reactdom': path.join(__dirname, 'node_modules', 'react-dom/dist/react-dom.min.js')
         }*/
    },
    plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.ProvidePlugin({
        "React": "react",
        "ReactDOM": "react-dom",
        "_": "lodash",
        "classnames": "classnames"
    }), new ExtractTextPlugin("[name].css", {allChunks: true}), new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
    ]
};