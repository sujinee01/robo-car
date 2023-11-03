// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/service/EvInfoServiceV2",
    createProxyMiddleware({
      target: "http://openapi.kepco.co.kr",
      changeOrigin: true,
      // ws: true,
    })
  );
};
