const config = {
    mode: 'development',
    entry: {
        'main': './src/js/main.js',
    },
    output: {
        path: __dirname,
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-transform-spread',
                        ],
                    },

                },
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader' // compiles Sass to CSS, using Node Sass by default
                ],
            },
        ],
    },
    devServer: {
        port: 3031,
        historyApiFallback: true,
    },
};

module.exports = config;

