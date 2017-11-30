const path = require('path');


module.exports = {
    entry: './src/main/js/app.js',
    output: {
        path: path.resolve('src/main/resources/static/built'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
        ]
    }
}