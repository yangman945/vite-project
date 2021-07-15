import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Layout from "lays/index.vue"
export type AppRouteRecordRaw = RouteRecordRaw & {
  hidden?: boolean
}
export const routes = [
  {
    path: "/",
    name: "layout",
    redirect: "/home",
    component: Layout,
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/home/Home.vue"),
        meta: {
          title: "首页"
        }
      },
      {
        path: "/goods",
        name: "goods",
        redirect: "/goods/goodslistA",
        meta: {
          title: "商品"
        },
        children: [
          {
            path: "goodslistA",
            name: "goodslistA",
            component: () => import("../views/goods/GoodslistA.vue"),
            meta: {
              title: "商品A"
            }
          },
          {
            path: "goodslistB",
            name: "goodslistB",
            component: () => import("../views/goods/GoodslistB.vue"),
            meta: {
              title: "商品B"
            }
          }
        ]
      }
    ]
  }
] as AppRouteRecordRaw[]
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
