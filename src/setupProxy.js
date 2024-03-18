const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        ':8080', 
        createProxyMiddleware({
            target: "http://10.0.0.206",
            changeOrigin: true,
            pathRewrite: {
                '^:8080': ''
            }
        })
    );
};
