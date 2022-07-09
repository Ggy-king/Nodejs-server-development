const Koa = require('koa')   //commonjs规范
const app = new Koa()

// ctx content 上下文
app.use(async (ctx) => {
    ctx.body = 'hello world'
})

app.listen(3000)