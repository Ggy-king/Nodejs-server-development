# 数据模型设计

列举各个数据模型的实例

## 用户

```js
{
    username:'1234567896',   //唯一
    password:'sdf12s'
}
```


## 地址

```js
{
    username:'1234567896',    //和用户建立关联
    city:'北京'，
    department:'xxx小区',
    houserNumber:'门牌号',
    name:'张三',
    phone:'1245788956'
}
```

## 商店

```js
{
    name: '摩尔玛',
    imgUrl: 'xxx.png',
    sales: 10000,
    expressLimit:0,
    expressPrice:5,
    slogan: '红色的宣传语'
}
```

## 商品

```js
{
    _id:'xxx',
    shodId:'xxxx',    //对应商店的id 
    name:'番茄',
    imgUrl:'xxx.png',
    sales:10,
    price:33.6,
    oldPrice:40.6
}
```

## 订单

待定