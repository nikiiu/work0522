import $http from './index.js'

export function getUsers(){
    return $http.get('/users')
}

export function getUser(params){
    return $http.get('/user',{
        params
    })
}