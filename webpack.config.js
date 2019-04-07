const config = {
    mode: 'development',
    entry: {
        'main': './src/js/main.js',
        'native-exercise': './src/js/universal-components/exercise/App.js',
        'native-solution': './src/js/universal-components/solution/App.js',
    },
    output: {
        path: __dirname,
        filename: '[name].js',
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
                            '@babel/plugin-syntax-dynamic-import',
                        ],
                    },

                },
            },
            {
                test: /\.scss$|\.css$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader' // compiles Sass to CSS, using Node Sass by default
                ],
            },
        ],
    },
    resolve: {
        alias: {
            'react-native$': 'react-native-web',
        },
    },
    devServer: {
        port: 3031,
        historyApiFallback: true
    },
};

module.exports = config;

