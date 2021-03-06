const path = require('path');
const miniCss = require('mini-css-extract-plugin');

const babel = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: 'babel-loader'
};

const cssLoader =  {
    loader: 'css-loader',
    options: {
        modules: {
            localIdentName: '[path][name][hash:base64:5]'
        },
    }
};

const sass = {
    test: /\.s[ac]ss$/i,
    use: [
        miniCss.loader,
        cssLoader,
        'postcss-loader',
        'sass-loader'
    ],
    exclude: /node_modules/,
};

const css = {
    test: /\.css$/,
    // exclude: /node_modules/,
    use: [
        miniCss.loader,
        cssLoader,
        'postcss-loader'
    ]
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
            css,
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
        new miniCss({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
        require('autoprefixer')
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