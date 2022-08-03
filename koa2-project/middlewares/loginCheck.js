//登录验证中间件

async function loginCheck(ctx, next) {
    const userInfo = ctx.session.userInfo
    if (userInfo && userInfo.username) {
        //登录验证成功
        await next()
        return
    }
    //登录失败
    ctx.body = {
        errno: -1,
        message: '请登录'
    }
}

module.exports = {
    loginCheck
}