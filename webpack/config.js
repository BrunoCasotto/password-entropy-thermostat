const path = require('path')
const { isProd, isDev } = require('./utils/enviroment')

// environment configs
const mode = isProd ? 'production' : 'development'
const watch = isDev
const devtool = isDev ? 'source-map' : false

const rootPath = path.join(__dirname, '..')
module.exports = {
  entry: path.join(rootPath , 'src', 'index.js'),
  output: {
    filename: 'PassEntropyThermostat.js',
    library: 'PassEntropyThermostat',
    path: path.join(rootPath, 'dist'),
    publicPath: 'dist',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }
    ],
  },
  mode,
  watch,
  devtool,
}
