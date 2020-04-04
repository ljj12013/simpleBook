import http from './axiosConfig'

let getData = {} 

//封装一个获取首页文章的接口
getData.getArticle = ()=>{
    return http.get('/asimov/trending/now')
}
//封装一个文章详情接口
getData.getArticleDetail = (data)=>{
    return http.get(`/asimov/p/${data}`)
}

export default getData