const router = require('koa-router')()
const loginCheck = require('../middlewares/loginCheck')

router.prefix('/api')                       //前缀

// 定义路由 模拟获取留言板列表
router.get('/list',loginCheck, async (ctx) => {
    const query = ctx.query            //query即querystringify   req功能

    // ctx.body = 'api list'     //返回字符串格式
    ctx.body = {                   //返回JSON格式
        errno: 0,
        data: [
            { content: '留言一', user: '张三' },
            { content: '留言一', user: '张三' },
            { content: '留言一', user: '张三' }
        ]
    }

})


// 模拟创建留言
router.post('/create', async (ctx) => {
    const body = ctx.request.body    //request  body
    ctx.body = {
        errno: 0,
        message:'成功'
    }

})


module.exports = router                     //输出