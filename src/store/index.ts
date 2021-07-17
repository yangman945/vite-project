import {InjectionKey} from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import global from './modules/global'
// 为 store state 声明类型
export interface State {
  count: number
}

export const key: InjectionKey<Store<State>> = Symbol()
// 创建一个新的 store 实例
export const store = createStore<State>({
  modules:{
    App:global
  }
})

export function useStore () {
  return baseUseStore(key)
}