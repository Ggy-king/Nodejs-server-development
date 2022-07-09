const router = require('koa-router')()

router.prefix('/api')                       //前缀

// 定义路由 模拟获取留言板列表
router.get('/list', async(ctx) => {
    ctx.body = 'api list'
})


// 模拟创建留言
router.post('/create', async (ctx) => {
    ctx.body = 'api create'
})


module.exports = router                     //输出