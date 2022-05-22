import Mock from 'mockjs'

function params(url) { //从网址中获取地址栏参数
    let obj = {}
    let reg = /([^?=&]+)=([^?=&]+)/g
    url.replace(reg, (...arg) => {
        obj[arg[1]] = arg[2]
    })
    return obj
}

Mock.setup({
    timeout: '200-600'
})

const users = [
    {id:1,username:'张三',sex:'男'},
    {id:2,username:'李四',sex:'女'},
]

Mock.mock('/mock/users','get',()=>{
    return users
})

Mock.mock(RegExp('/mock/user.*'),'get',(options)=>{
    console.log(options)
    let query = params(options.url)
    if(query.id==1){
        return users[0]
    }else if(query.id==2){
        return users[1]
    }else{
        return null
    }
})