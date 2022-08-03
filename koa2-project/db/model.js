//数据模式(规范数据格式)

const mongoose = require('./db')

//定义 User Schema (数据规范)
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true   //不重复
    },
    password: String,
    age: Number,
    city: String,
    //性别
    gender: {
        type: Number,
        default: 0  //0-保密  1男 2女
    }
}, { timestamp: true })

//定义 User Model 
const User = mongoose.model('user', UserSchema)

// //定义Comment Schema
// const CommentSchema = mongoose.Schema({
//     content:{
//         type:String,
//         require:true
//     },
//     username:String
// },{timestamp:true})

// //定义 Comment Model
// const Comment = mongoose.model('comment',CommentSchema)

module.exports = {
    User
    // Comment
}

