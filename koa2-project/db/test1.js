const { User } = require('./model')

!(async () => {
    await User.create({
        username: 'lisi',
        Password: 123456,
        age: 23,
        city: '上海'
    })
    console.log('创建完成')
})()