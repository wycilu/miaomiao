//反向代理解决跨域问题
module.exports = {
    // publicPath : '/miaomiao',    打包后的静态资源路径
    devServer : {
        proxy : {
            '/api' : {
                target : 'http://39.97.33.178',
                changeOrigin : true
            }
        }
    }
}