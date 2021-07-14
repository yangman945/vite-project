import {InjectionKey} from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

// 为 store state 声明类型
export interface State {
  count: number
}

export const key: InjectionKey<Store<State>> = Symbol()
// 创建一个新的 store 实例
export const store = createStore<State>({
  state: {
    count: 999
  },
  mutations:{
    add(state){
      state.count ++
    }
  }
})

export function useStore () {
  return baseUseStore(key)
}