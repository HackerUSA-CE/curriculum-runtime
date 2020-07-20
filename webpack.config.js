const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
            }
          ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css']
    }
};