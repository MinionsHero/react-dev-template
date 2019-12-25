const webpack = require('webpack');
const DevServer = require('webpack-dev-server');
const webpackConfig = require('./config/webpack.config');
const devConfig = require('./config/dev.config');

const portfinder = require('portfinder');
const open = require('open');

portfinder.getPort({
  port: devConfig.port,
}, function (err, port) {
  if (err) {
    return console.error(err);
  }
  // devServer卸载webpack配置中只能在watch模式起作用,但不能自动启动devServer,
  // 因此必须调用webpackDevServer.listens
  const server = new DevServer(webpack(webpackConfig), devConfig);
  server.listen(port, 'localhost', function () {
    open('http://localhost:' + port);
  });
});