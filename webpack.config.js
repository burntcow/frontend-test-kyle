const path = require('path');

var webpack = require('webpack'),
    port = 8080,
    config = {
        entry: [
            'webpack-dev-server/client?http://localhost:' + port,
            'webpack/hot/only-dev-server',
            './index.js'
        ],
        output: {
            path: __dirname,
            filename: 'app.js'
        },
        module: {
            rules: [{
                test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'
            }, {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader",
                    options: {
                        includePaths: [""]
                    }
                },
                {
                    loader: "postcss-loader"
                }]
            }]
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            alias: {
                components: path.resolve(__dirname, 'src/components'),
                containers: path.resolve(__dirname, 'src/containers'),
            }
        },
        devtool: 'source-map',
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ],
        devServer: {
            port: port,
            historyApiFallback: true,
            hot: true,
            contentBase: '.',
            host: '0.0.0.0'
        },
        bail: true
    };

module.exports = config;
