module.exports = {
    outputDir: 'dist',
    lintOnSave: true,
    productionSourceMap: false,
    devServer: {
        port: 8081,
        open: true,
        proxy: {
            '/api': {
                target: '<url>',
                ws: true,
                changeOrigin: true
            },
        }
    }
}