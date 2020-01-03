const env = process.env.NODE_ENV
const isProd = env !== 'development'
const isDev = !isProd

module.exports = {
  isProd,
  isDev,
}
