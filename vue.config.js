module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://t.list.wuchaoit.com",
        ws: true,
        changeOrigin: true,
        pathRewrite: { "^/api": "" }
      }
    }
  }
};
