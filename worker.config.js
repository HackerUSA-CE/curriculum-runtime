const path = require('path');

module.exports = {
    entry: './src/test.worker.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'test.worker.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css']
    }
};