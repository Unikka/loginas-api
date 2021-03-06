const webpack = require('webpack')
const path = require('path')

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
}

module.exports = config
