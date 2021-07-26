
import { reactive } from "vue"
export const tagsData = reactive({
    tagMenuShow: false,
    openTagMenu: <T, R>(item: T, e: R) => {
        tagsData.tagMenuShow = true
        console.log(tagsData.tagMenuShow, "鼠标右击item")
        console.log(e, "鼠标右击e")
    },
    closeTagMenu:()=>{
        tagsData.tagMenuShow = false
    }
})