// commonjs语法介绍  与模块化开发相似
// {
//     输出：module.exports
//     输入：require()
//     主要用于nodejs开发
// }

// require()三个层级
// {
//     系统自带模块：如require('http')
//     npm包：如require('lodash')
//     自定义模板：require('a')
// }


// 引用
const { sum, test } = require('./utils')

test()

const res = sum(10, 30)
console.log(res);



const http = require('http')   //系统自带模块
const _ = require('lodash')   //npm包 下划线习惯用来表示lodash
const { sum, test } = require('./utils')  //手写模块


// commonjs与Module区别
// {
//     两者语法不一样
//     commonjs执行时引入，动态的
//     ES6 Module是打包时引入，静态的 

//     静态可以理解为部分语句不可以使用判断等动态方法
// }