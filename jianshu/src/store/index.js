//引入创建仓库的方法 并引用应用中间件的方法
import { createStore, applyMiddleware } from 'redux'
//引入type类型
import { CHANGE_ARTICLE,CHANGE_ARTICLE_Detail,CHANGE_ARTICLE_Detail_User} from './type'
//引入redux-thunk中间件
import thunk from 'redux-thunk'

//引入封装好的接口文件
import api from '../util/axios'

//初始化state
const initState = {
    article: [],//首页文章
    articleDetail:[],//文章详情
    user:[],//文章作者信息
}
//修改文章
// export const changArticleAction = (article) => {
//     return {
//         type: CHANGE_NAME,
//         article
//     }
// }

//修改文章列表的函数（同步 这段相当于mutation）
const changeArticle = (article) => {
    return {
        type: CHANGE_ARTICLE,
        article
    }
}
//修改文章详情列表的函数（同步 这段相当于mutation）
const changeArticleDetail = (articleDetail) => {
    return {
        type: CHANGE_ARTICLE_Detail,
        articleDetail
    }
}
//修改文章作者信息的函数（同步 这段相当于mutation）
const changeArticleDetailUser = (user) => {
    return {
        type: CHANGE_ARTICLE_Detail_User,
        user
    }
}

//导出一个获取article列表（创建一个异步函数）
export const reqArticleAction = () => {
    return (dispatch, getState) => {
        //数据缓存
        if (getState().article.length > 0) {
            return
        }
        //调取文章接口列表
        api.getArticle()
            .then(res => {
                if(res.status === 200){
                    return dispatch(changeArticle(res))
                }   
            })
            .catch(err => { })
    }
}
//导出一个获取文章详情列表（创建一个异步函数）
export const reqArticleDetailAction = (data) => {
    return (dispatch, getState) => {
        //数据缓存
        if (getState().articleDetail.length > 0) {
            return
        }
        //调取文章详情接口列表
        api.getArticleDetail(data)
            .then(res => {
                if(res.status === 200){
                    console.log(res, '仓库中取列表')  
                    return dispatch(changeArticleDetail(res.data))
                }
                
            })
            .catch(err => { })
    }
}






//创建一个reducer
function reducer(state = initState, action) {
    switch (action.type) {
        case CHANGE_ARTICLE://修改文章
            return {
                ...state,
                article: action.article
            }
        case CHANGE_ARTICLE_Detail://修改文章详情
            return {
                ...state,
                articleDetail: action.articleDetail
            }
        case changeArticleDetailUser://修改文章作者信息
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}

//导出仓库 并使用redux-thunk中间件
const store = createStore(reducer, applyMiddleware(thunk))
//暴文章列表
export const getArticle = () => store.getState().article
//暴露出详情列表
export const getArticleDetail = () => store.getState().articleDetail
//暴露出详情列表
export const getArticleDetailUser = () => store.getState().user

export default store