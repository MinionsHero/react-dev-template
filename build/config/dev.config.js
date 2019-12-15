const path = require('path')
const getConfig = require('../utils/getConfig')
const publicPath = path.resolve(__dirname, '../../public')
const distPath = path.resolve(__dirname, '../../dist')
module.exports = {
  quiet: true,// 开启FriendlyErrorsPlugin必须设置这个为true
  contentBase: distPath, //服务基于文件夹
  host: '0.0.0.0',// 允许外部ip访问
  useLocalIp: true,// 允许本地ip访问
  hot: true,//开启热加载,必须同时使用webpack.HotModuleReplacementPlugin
  open: 'Google Chrome',//启动后打开Chrome
  overlay: false,//不在页面显示错误
  port: 9000,//端口号
  publicPath: publicPath, //可以通过地址根路径访问的静态文件夹
  proxy: getConfig('apiproxy', {}),//代理
  writeToDisk: (filePath) => {
    return true;
  },//是否写入硬盘
}