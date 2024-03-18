const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        createProxyMiddleware('/api', {
            target: "http://10.0.0.206:8080",
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        })
    );
};
