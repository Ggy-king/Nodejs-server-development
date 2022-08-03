// // 服务端操作cookie

// const http = require('http')

// const server = http.createServer((req, res) => {

//     //设置cookie
//     res.setHeader('Set-Cookie', 'b=200')

//     //获取cookie
//     const cookieStr = req.headers.cookie
//     console.log('cookie is', cookieStr);

//     //结构化cookie (概念很重要)  就是把cookie字符串变成对象的形式
//     //querystring
//     //cookieStr: 'a=100;b=200' --> {a:'100',b:'200'}
//     const cookieObj = {}
//     cookieStr.split(';').forEach(cookieItemStr => {
//         const arr = cookieItemStr.trim().split('=')
//         const key = arr[0]  //'a'
//         const val = arr[1]  //'100'
//         cookieObj[key] = val
//     })
//     // querystring url 参数
//     console.log('cookie obj is',cookieObj);

//     res.end('cookie test')
// })

// server.listen(3000)
// console.log('server listening on 3000 port');



// koa2操作cookie

const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {

    // 设置cookie
    ctx.cookies.set('c', '250')
    

    // 获取cookie
    ctx.cookies.get('c')

    // 结构化 koa2已经做好了不用管


    ctx.body = 'cookie test by Koa2'

})

app.listen(3000)