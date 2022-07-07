// 启动web服务

const http = require('http')  //commonjs  第一个层级获取http模块

// querystring已被废弃 使用querystringify代替
const querystringify = require('querystringify')   //引入querystringify模块

const server = http.createServer((req, res) => {   //创建一个http服务
    const url = req.url;
    const path = url.split('?')[0]    //获取?前的内容   /api/list

    const queryStr = url.split('?')[1]   //获取？后的内容  'a=100&b=50'  非结构化

    const method = req.method;

    const query = querystringify.parse(queryStr)   //该写法直接代替上方if语句判断


    if (path === '/api/list' && method === 'GET') {
        // res.end('this is list router')

        const result = {
            error: 0,
            data: [
                { user: '张三', content: '留言一' },
                { user: '李四', content: '留言二' }
            ]
        }

        // 返回json格式的语句
        res.writeHead(200, { 'Content-type': 'application/json' })
        // end返回的只能是字符串 想要保存为json用JSON方法
        res.end(JSON.stringify(result))

    }

    if (path === '/api/create' && method === 'POST') {
        // res.end('this is create router')

        const result = {
            error: 0,
            message: '创建成功'
        }

        res.writeHead(200, { 'Content-type': 'application/json' })
        res.end(JSON.stringify(result))
    }

    // 没有命中路由 默认404
    // res.end('404')

    // res.writeHead(404, { 'Content-type': 'text/plain' })
    // res.end('404 Not Found')

    // html格式
    res.writeHead(404, { 'Content-type': 'text/html' })
    res.end(
        `
        <!DOCTYPE html>
        <html>
            <head>
                <title>404</title>
            </head>
            <body>
                <h1>404 Not Found</h1>
            </body>
        </html>
        `
    )
})

server.listen(3000)      //监听http 3000端口
console.log('http3000端口已被监听 请访问 http://localhost:3000')  //成功监听后执行
