
const mongoose = require('mongoose')

const url = 'mongodb://comment:666comment@localhost:27017'
const dbName = 'comment'

mongoose.connect(`${url}/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// 连接对象
const db = mongoose.connection

db.on('error', err => {
    console.log('连接失败见如下原因');
    console.log('连接错误', err);
})

db.once('open', () => {
    console.log('mongoose连接成功');
    console.log('---------------------------------');
    console.log('开始执行');

})
module.exports = mongoose


















