const Koa = require('koa')
// 实例化一个app
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const static = require('koa-static')

// 引入路由组件
const index = require('./routes/index')
const users = require('./routes/users')
const comments = require('./routes/comments')

// error handler  错误处理器
onerror(app)

// middlewares  中间件(app.use())
app.use(bodyparser({   //这里是request body格式的转换
  enableTypes:['json', 'form', 'text']
}))
app.use(json())   //请求数据格式
app.use(logger())  //日志格式

//静态文件服务  如可以使代码本地中的图片 通过网址路径的形式访问  在public中存放
app.use(static(__dirname + '/public'))  //__dirname 表示当前目录

app.use(views(__dirname + '/views', {       //服务端模板引擎
  extension: 'pug'    //pug是一种语法 简写html
}))

// logger  这里是自己编写的代码  打印当前请求所花费的时间
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes  注册路由
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(comments.routes(), comments.allowedMethods())
// allowedMethods() 它是对路由返回404或空页面的一种补充


// error-handling  错误处理
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
