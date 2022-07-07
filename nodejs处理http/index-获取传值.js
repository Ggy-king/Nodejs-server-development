// 启动web服务

const http = require('http')  //commonjs  第一个层级获取http模块
// require三个层级 1 系统自带 2 npm安装 3 自定义

const querystring = require('querystring')   //引入querystring模块

const server = http.createServer((req, res) => {   //创建一个http服务
    const url = req.url;
    const path = url.split('?')[0]    //获取?前的内容   /api/list

    const queryStr = url.split('?')[1]   //获取？后的内容  'a=100&b=50'  非结构化

    const method = req.method;

    // 解析querystring
    // const query = {}
    // queryStr && queryStr.split('&').forEach(item => {
    //     // item 即  a=100 的形式
    //     const key = item.split('=')[0]   //a
    //     const val = item.split('=')[1]    //100
    //     query[key] = val              // {a:'100',b:'50'}       结构化
    // })

    const query = querystring.parse(queryStr)   //该写法直接代替上方if语句判断
    console.log(query);



    // 定义路由 模拟获取留言表列表  GET
    if (path === '/api/list' && method === 'GET') {
        if (query.filterType === '1') {
            res.end('this is list router,all')   //res 返回
        }
        if (query.filterType === '2') {
            res.end('this is list router,only mine')   //res 返回
        }
    }

    // 定义路由 模拟创造列表  POST
    if (path === '/api/create' && method === 'POST') {
        res.end('this is create router')
    }
    res.end('404')
})

server.listen(3000)      //监听http 3000端口
console.log('http3000端口已被监听 请访问 http://localhost:3000')  //成功监听后执行
