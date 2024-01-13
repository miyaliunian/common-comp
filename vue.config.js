const { defineConfig } = require('@vue/cli-service')
const path = require('path');
module.exports = defineConfig({
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  // 扩展webpack 配置，使packages加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages'))
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改他的选项
        return options;
      });
  },
})
