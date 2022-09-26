import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app) {
  app.use(
    "/",
    createProxyMiddleware({
      target: "https://ezoz-trip.com:8080",
      changeOrigin: true,
    })
  );
};
