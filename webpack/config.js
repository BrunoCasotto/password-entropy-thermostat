const rootPath = path.join(__dirname, '..')
const { isProd, isDev } = require('./utils/enviroment')
const mode = isProd ? 'production' : 'development'
const watch = isDev
const devtool = isDev ? 'source-map' : false

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
