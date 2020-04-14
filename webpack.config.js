const TerserPligin = require('terser-webpack-plugin');
module.exports = {
  entry: {
    "large-number": './src/index.js',
    "large-number.min": './src/index.js',
  },
  output: {
    filename: '[name].js',
    library: 'largeNumber',
    libraryTarget:'umd',
    libraryExport: 'default'
  },
  mode: "none",
  optimization:{
    minimize: true,
    minimizer: [
      new TerserPligin({
        include: /\.min\.js$/
      })
    ]
  }
}