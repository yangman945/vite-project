import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router'
export type AppRouteRecordRaw = RouteRecordRaw & {
    hidden?:boolean
}
const router =  createRouter({
    history:createWebHashHistory(),
    routes:[{
        path:"/",
        name:'home',
        component: () => import('../views/home/Home.vue')
    }] as AppRouteRecordRaw[]
})

export default router