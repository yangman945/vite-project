<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item 
    v-for="item in levelList" 
    :key="item.path" 
    :to="{ path: item.path }">
        {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script lang="ts" setup>
import { compile } from "path-to-regexp"
import { ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"

    const levelList = ref(null)
    const router = useRouter()
    const route = useRoute()
    const getBreadcrumb = () => {
        let matched:any = route.matched.filter((item) => item.meta && item.meta.title)
        const first = matched[0]
        // 判断面包屑首位是否为 '/', 不是的话手动添加根路由
        if (first.path !== "/") {
          matched = [{ path: "/home", meta: { title: "首页" } }].concat(matched)
        }
        // 自定义面包屑
        if(route.meta && route.meta.breadcrumb) {
            matched = route.meta.breadcrumb;
        }
        levelList.value = matched.filter((item:any) => item.meta && item.meta.title && item.meta.breadcrumb !== false)
    }
    const pathCompile = (path:any) => {
      var toPath = compile(path)
      return toPath(route.params)
    }
    const handleLink = (item:any) => {
      const { redirect, path } = item
      if (redirect) {
        router.push(redirect)
        return
      }
      router.push(pathCompile(path))
    }
    getBreadcrumb()
    watch(()=>route.path, getBreadcrumb)
</script>
