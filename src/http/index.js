import axios from 'axios'

const $http = axios.create({
    timeout: 5000,
    baseURL: '/mock'
})

export default $http