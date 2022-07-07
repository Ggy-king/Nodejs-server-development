// 启动web服务

const http = require('http')  //commonjs  第一个层级获取http模块
// require三个层级 1 系统自带 2 npm安装 3 自定义

const server = http.createServer((req,res) => {   //创建一个http服务
    // 在请求时执行
    console.log('已经收到http请求')

    const url = req.url     //当前网址路径 以及前图标路径

    res.end('hello world')    //res 返回信息给前端（页面级的操作）
})

server.listen(3000)      //监听http 3000端口
console.log('http3000端口已被监听 请访问 http://localhost:3000')  //成功监听后执行
