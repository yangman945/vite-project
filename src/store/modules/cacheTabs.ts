import {Module} from "vuex"
import { State } from ".."

export type CacheType = {
    cacheViewsAry:string[] // 缓存页面数组
    tabBarAry:TabbarType[], // 选项标签数组
}

export type TabbarType = {
    path:string,
    title:string
}
const state:CacheType = {
    cacheViewsAry:[],
    tabBarAry:[]
}
const mutations = {
    ADD_CACHEVIEW_ITEM(state:CacheType,data:string[]){
        
        state.cacheViewsAry = data
    },
    ADD_TABBAR_ITEM(state:CacheType,data:TabbarType[]){
        state.tabBarAry = data
    },
}
const actions = {
    createCacheView({commit,state}:any,data:string){
        commit('ADD_CACHEVIEW_ITEM',data)
    },
    createTabBar({commit,state}:any,data:TabbarType){
        const result = state.cacheViewsAry.includes(data.path)
        if(!result){
            let cacheView = state.cacheViewsAry
            let tabbar = state.tabBarAry
            cacheView.push(data.path)
            tabbar.push(data)
            commit('ADD_CACHEVIEW_ITEM',cacheView)
            commit('ADD_TABBAR_ITEM',tabbar)
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