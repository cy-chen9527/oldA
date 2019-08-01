module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://t.list.wuchaoit.com/api",
        ws: true,
        changeOrigin: true,
        pathRewrite: { "^/api": "" }
      }
    }
  }
};
