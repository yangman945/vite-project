import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Layout from "lays/index.vue"
import AppMain from "lays/components/AppMain.vue"
export type AppRouteRecordRaw = RouteRecordRaw & {
  hidden?: boolean
}
type BreadcrumbItem = {
  path:string,
  meta:unknown
}
type BreadcrumbAry = BreadcrumbItem[] | Boolean
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
        redirect:"/goods/goodslistA",
        component:AppMain,
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
            path: "goodslistA_detail",
            name: "goodslistADetail",
            component: () => import("../views/goods/GoodslistADetail.vue"),
            meta: {
              title: "商品A详情",
              activeMenu:'/goods/goodslistA'
            },
            hidden:true
          },
          {
            path: "goodslistB",
            name: "goodslistB",
            component: () => import("../views/goods/GoodslistB.vue"),
            meta: {
              title: "商品B",
              breadcrumb:false, //不显示面包屑
            }
          },
          {
            path: "spec",
            name: "spec",
            redirect:"/goods/spec/specs",
            component: AppMain,
            meta: {
              title: "规格"
            },
            children:[
              {
                path: "specs",
                name: "specs",
                component: () => import("../views/goods/spec/specs.vue"),
                meta: {
                  title: "规格A",
                  breadcrumb:[
                    {path:'/home',meta:{
                      title:'你好'
                    }},
                    {path:'/goods',meta:{
                      title:'我好'
                    }},
                    {path:'/goods/spec/specs',meta:{
                      title:'大家好'
                    }}
                  ] as BreadcrumbAry
                }
              }
            ]
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
