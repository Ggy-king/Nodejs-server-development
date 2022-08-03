
const server = http.createServer((req, res) => {

    const url = req.url   //'/index.html?a=100'
    const path = url.split('?')[0]  //'index.html'


    res.end(path)
    // 返回域名后的地址 ？之前的
})

server.listen(3000)
console.log('服务正在监听3000port')