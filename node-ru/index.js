
// --save安装
// 该安装法可以在代码中直接使用相关

// "dependencies": {
//     "lodash": "^4.17.21"
// }

// --save-dev安装
// 该安装法其安装的不会在代码中直接使用

// "devDependencies": {
//     "nodemon": "^2.0.18"
// }


// nodemon 功能是可以重启服务 优点每次保存都会重启
const http = require('http');

const a = undefined

const server = http.createServer((req, res) => {

    debugger    //打断点 程序运行到这停止

    const url = req.url   //'/index.html?a=100'
    const path = url.split('?')[0]  //'index.html'

    a()  //bug

    res.end(path)
    // 返回域名后的地址 ？之前的
})

server.listen(3000)
console.log('服务正在监听3000port')