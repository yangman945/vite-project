import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Layout from "lays/index.vue"
export type AppRouteRecordRaw = RouteRecordRaw & {
  hidden?: boolean
}
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "layout",
      redirect: "/home",
      component: Layout,
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("../views/home/Home.vue")
        }
      ]
    }
  ] as AppRouteRecordRaw[]
})

export default router
