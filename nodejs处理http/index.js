const http = require('http')  //commonjs  第一个层级获取http模块

const querystringify = require('querystringify')   //引入querystringify模块

const server = http.createServer((req, res) => {
    const url = req.url;
    const path = url.split('?')[0]

    const queryStr = url.split('?')[1]

    const method = req.method;

    const query = querystringify.parse(queryStr)


    if (path === '/api/list' && method === 'GET') {
        const result = {
            error: 0,
            data: [
                { user: '张三', content: '留言一' },
                { user: '李四', content: '留言二' }
            ]
        }

        res.writeHead(200, { 'Content-type': 'application/json' })
        res.end(JSON.stringify(result))

    }



    if (path === '/api/create' && method === 'POST') {
        const reqType = req.headers['content-type']    //获取前端发送数据的类型


        let bodyStr = ''
        req.on('data', chunk => {   //服务端怎么去识别“流”，别接收数据
            //chunk 即“流”的每一段数据
            bodyStr = bodyStr + chunk.toString()

        })
        req.on('end', () => {       //服务端怎么知道流完了   end事件

            if (reqType === 'application/json') {   //前端获取的数据是json
                const body = JSON.parse(bodyStr)   //转换成JSON形式
                console.log('bodyStr is', body)    
            }
            

            res.end('接收完成')
        })


        return    //防止继续执行下去  防止异步
        // const result = {
        //     error: 0,
        //     message: '创建成功'
        // }

        // res.writeHead(200, { 'Content-type': 'application/json' })
        // res.end(JSON.stringify(result))
    }




    res.writeHead(404, { 'Content-type': 'text/plain' })
    res.end('404 Not Found')

})

server.listen(3000)      //监听http 3000端口
console.log('http3000端口已被监听 请访问 http://localhost:3000')  //成功监听后执行
