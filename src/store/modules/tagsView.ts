import {Module} from "vuex"
import { State } from ".."

export type CacheType = {
    cacheViewsAry:string[] // 缓存页面数组
    tagsViewsAry:TagsType[], // 选项标签数组
}
export type TagsType = {
    path:string,
    title:string,
    name:string
}
const state:CacheType = {
    cacheViewsAry:[],
    tagsViewsAry:[]
}
const mutations = {
    ADD_CACHEVIEW_ITEM(state:CacheType,name:string){
        state.cacheViewsAry.push(name)
    },
    ADD_TAGS_ITEM(state:CacheType,data:TagsType){
        state.tagsViewsAry.push(data)
    },
}
const actions = {
    // 校验当前访问的路由是否已经存在
    verifyRouteName({state}:any,name:string){
        console.log(state.cacheViewsAry.includes(name),"Boolean")
        return state.cacheViewsAry.includes(name)
    },
    // 创建缓存路由名称
    createCacheView({state,commit,dispatch}:any,name:string){
        if(!state.cacheViewsAry.includes(name)){
            commit('ADD_CACHEVIEW_ITEM',name)
        }
    },
    // 创建缓存标签
    createTags({state,commit,dispatch}:any,data:TagsType){
        if(!state.cacheViewsAry.includes(data.name)){
            commit('ADD_TAGS_ITEM',data)
        }  
    },
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
} as Module<CacheType,State>
// Module 接收子模块state类型 和根模块state类型