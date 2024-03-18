const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: "http://10.0.0.206:8080",
            changeOrigin: true,
            pathRewrite: (path, req) => {
                return path.replace(/^\/api(?:\/|$)/, '/');
            },
        })
    );
};
