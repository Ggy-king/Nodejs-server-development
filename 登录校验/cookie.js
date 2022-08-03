// cookie是什么
// 1 存储在浏览器中的一段字符串 最大5kb
// 2 每一个域可有一个cookie 跨域不共享
// 3 格式如k1 = vi; k2 = v2;(可结构化)

// cookie会随http请求传递给服务端
// 服务端可以修改cookie在返回给前端
// 默认跨域不可以传递cookie

// 服务端操作cookie
// 设置cookie
// 获取cookie
// 结构化cookie


//前端传入cookie的时候是追加而不是覆盖 (除了建相同的情况下)


//cookie 如何应用于登录校验
// 1 请求登录接口 成功则设置cookie 如user=zhangsan
// 2 前端再请求其他接口 就会带着上述的cookie
// 3 服务端判断cookie有无user=zhangsan 即可验证


// cookie不能暴露用户名
// cookie中不能存放明文
// 解决方案 cookie存一个用户标识 如userId=123


// session是什么
// 1 cookie存储用户标识
// 2 用户信息则存储到session中
// session即用户信息的存储 和cookie有对应关联