import { reactive } from "vue"
import { useStore } from "vuex"
import store from 'store/index'
const store = useStore()
export const tagsData = reactive({
  tagMenuShow: false,
  tagMenuAry: [
    { name: "关闭此页面", value: "self" },
    { name: "关闭左侧页面", value: "left" },
    { name: "关闭右侧页面", value: "right" },
    { name: "关闭全部", value: "all" }
  ],
  openTagMenu: <T, R>(item: T, e: R) => {
    tagsData.tagMenuShow = true
  },
  closeTagMenu: () => {
    tagsData.tagMenuShow = false
  },
  clearTagsItem: (type: string) => {
    console.log(type, "关闭类型")
    if (type === "all") {
        console.log(store,"store")
      store.dispatch("tagsView/closeAllItem").then((resp) => {
        console.log(this, "this")
        console.log(resp, "resp")
      })
    }
  }
})
