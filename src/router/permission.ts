import router from "./index";
import {store} from 'store';
// import { TagsType } from "../store/modules/tabsView";
router.beforeEach((to, from) => {
    // if(to.meta.keepAlive){
    //     const option:TagsType = {
    //         path:to.path,
    //         title:to.meta.title as string
    //     }
    //     store.dispatch('cacheTabs/createTabBar', option)
    // }
})

export default router