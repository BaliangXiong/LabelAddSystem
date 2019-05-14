module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',

  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,

  devServer: {
    open: true,

    host: '0.0.0.0',

    port: 8080,

    https: false,

    hotOnly: false,
    proxy: {
      '': {
       target: 'http://localhost:9090/pq',
        changeOrigin: true,
        ws: true,
        pathRewrite: {}
      }
    },

    before: app => {
    }
  },
  // 构建时开启多进程处理 babel 编译
  parallel: require('os').cpus().length > 1,
};
