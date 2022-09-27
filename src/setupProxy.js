const proxy = require("http-proxy-middleware");

// src/setupProxy.js
module.exports = function (app) {
  app.use(
    proxy("/", {
      target: "https://ezoz-trip.com/",
      changeOrigin: true,
    })
  );
};
