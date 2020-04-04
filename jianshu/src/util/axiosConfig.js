import axios from 'axios'

let http = axios.create();

//请求拦截
http.interceptors.request.use(config=>{
    return config
})
// 响应拦截
http.interceptors.response.use(res=>{
    return res
})

export default http