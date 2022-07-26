/**
 * @description mongoose 连接数据库
 * @author 广源讲师
 */



const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017'    //本地默认的mongodb服务地址
const dbName = 'testdb'    //数据库名字

// 配置
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)

// 开始连接
mongoose.connect(`${url}/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// 连接对象
const db = mongoose.connection

db.on('error', err => {
    console.log('连接错误', err);
})

db.once('open', () => {
    console.log('mongoose连接成功');
})
// 导出
module.exports = mongoose