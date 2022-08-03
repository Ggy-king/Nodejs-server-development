const Koa = require('koa')
// 实例化一个app
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const static = require('koa-static')
const session = require('koa-generic-session')

// 引入路由组件
const index = require('./routes/index')
const users = require('./routes/users')
const comments = require('./routes/comments')

const loginCheck = require('./middlewares/loginCheck')

// error handler  错误处理器
onerror(app)

// middlewares  中间件(app.use())
app.use(bodyparser({   //这里是request body格式的转换
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())   //请求数据格式
app.use(logger())  //日志格式

//静态文件服务  如可以使代码本地中的图片 通过网址路径的形式访问  在public中存放
app.use(static(__dirname + '/public'))  //__dirname 表示当前目录

app.use(views(__dirname + '/views', {       //服务端模板引擎
  extension: 'pug'    //pug是一种语法 简写html
}))


// 下面自动配置cookie session
app.keys = ['password']    //秘钥越难识别越好
app.use(session({
  //配置cookie
  cookie: {
    path: '/',    //cookie生效的目录 此为根目录下的目录
    httpOnly: true,      //cookie 只允许服务端来操作 不允许前端操作
    maxAge: 24 * 60 * 60 * 1000 //cookie生效的时间
  }
}))


// logger  这里是自己编写的代码  打印当前请求所花费的时间
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 模拟登录 为了使用中间件
// app.use(async (ctx, next) => {
//   const query = ctx.query
//   if (query.user === 'zhangsan') {
//     // 模拟登陆成功
//     await next()  //执行下一步
//   } else {
//     // 模拟登陆失败
//     ctx.body = '请登录'

//   }
// })


// app.use(loginCheck)   //全部的路由 都需要校验

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
