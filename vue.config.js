const path = require('path') // 导入 node.js 中操作路径的模块
module.exports = {
  publicPath: './',

  devServer: {
    port: 8082,
    proxy: {
      '/api': {
        target: `http://124.70.71.210:8081/yz`,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    disableHostCheck: true
  }
}
