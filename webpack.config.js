const path = require('path');

module.exports = {
  entry: {
    app: './src/app.js',
    vendor: './src/vendors.js'
  },
  output: {
    filename: 'bundle.js'
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development'
};
