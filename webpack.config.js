const path = require('path');
const cssExtract = require('mini-css-extract-plugin');

const babel = {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
};
const sass = {
    test: /\.s[ac]ss$/i,
    use: [
        cssExtract.loader,
        // 'style-loader',
        'css-loader',
        'sass-loader',
    ],
    exclude: /node_modules/,
};

const css = {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader']
};



module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            babel,
            sass
        ]
    },
    plugins: [
        new (require('html-webpack-plugin'))({
            hash: true,
            title: "Remo",
            filename: 'index.html',
            template: './src/index.html'
        }),
        new cssExtract({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        })
    ],
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    devServer: {
        host: "0.0.0.0",
        port: "3004",
        open: true,
        hot: true
    }
};