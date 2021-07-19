import router from "./index";
import {store} from 'store';
import { TabbarType } from "../store/modules/cacheTabs";
router.beforeEach((to, from) => {
    console.log(to,"to?????")
    if(to.meta.keepAlive){
        const option:TabbarType = {
            path:to.path,
            title:to.meta.title as string
        }
        store.dispatch('cacheTabs/createTabBar', option)
    }
})

export default router