const path = require('path');
const webpack = require('webpack');
const pkg = require('./src/package.json');

module.exports = function(env, argv) {
    const isDevelopment = env.production;
    return {
        mode: env.production ? 'production' : 'development',

        entry: './src/index.ts',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.js',
            library: pkg.name,
            libraryTarget: "commonjs2"
        },

        target: 'electron-renderer',

        // Enable sourcemaps for debugging webpack's output.
        devtool: isDevelopment ? 'inline-source-map' : 'source-map',

        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: ['.ts', '.tsx', '.js', '.json', '.css'],

            modules: [
                path.join(__dirname, './src'),
                'node_modules'
            ]
        },

        module: {
            rules: [
                {
                    test: /\.less$/,
                    use: [{
                        loader: 'style-loader' // creates style nodes from JS strings
                    }, {
                        loader: 'css-loader' // translates CSS into CommonJS
                    }, {
                        loader: 'less-loader' // compiles Less to CSS
                    }]
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },

        plugins: [
            // NODE_ENV should be production so that modules do not perform certain development checks
            new webpack.DefinePlugin({
                DEBUG: isDevelopment,
                'process.env.NODE_ENV': JSON.stringify(isDevelopment ? 'development' : 'production')
            }),
        ]
    }
};
