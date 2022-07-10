// koa2 洋葱圈模型

const koa = require('koa');
const KoaLogger = require('koa-logger');
const app = new koa()

// logger   ctx = res + req
app.use(async (ctx, next) => {
    await next()    //执行下一个中间件
    const rt = ctx.response.get('X-Response-Time')  //res  获取时间差
    console.log(`${ctx.method} ${ctx.url} -- ${rt}`);
})

// x-response-time
app.use(async (ctx, next) => {
    const start = Date.now()
    await next()
    const ms = Date.now() - start  //计算时间差
    ctx.set('X-Response-Time',`${ms}ms`)   //记录 设置时间差
})


//response
app.use(async (ctx, next) => {
    ctx.body = 'Hello World'
})


app.listen(3000)
console.log('koa2已经开始监听 3000 端口了');