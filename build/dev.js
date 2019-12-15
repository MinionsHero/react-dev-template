const webpack = require('webpack')
const devServer = require('webpack-dev-server')
const webpackConfig = require('./config/webpack.config')
const devConfig = require('./config/dev.config')

// devServer卸载webpack配置中只能在watch模式起作用,但不能自动启动devServer,
// 因此必须传给webpackDevServer
const server = new devServer(webpack(webpackConfig), devConfig)
server.listen(devConfig.port)