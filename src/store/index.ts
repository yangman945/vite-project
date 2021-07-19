import {InjectionKey} from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import cacheTabs, { CacheType } from './modules/cacheTabs' // 缓存标签
// 为 store state 声明类型
export interface State {
  cacheTabs: CacheType
}

export const key: InjectionKey<Store<State>> = Symbol()
// 创建一个新的 store 实例
export const store = createStore<State>({
  modules:{
    cacheTabs
  }
})

export function useStore () {
  return baseUseStore(key)
}