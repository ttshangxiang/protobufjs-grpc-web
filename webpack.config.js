const path = require('path');
const config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.proto$/, use: path.resolve(__dirname, 'utils/proto-loader.js') }
    ]
  }
}

module.exports = config;