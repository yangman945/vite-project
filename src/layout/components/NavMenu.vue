<template>
  <el-menu 
  :default-active="activeMenu" 
  :router="true"
  class="el-menu-vertical-demo" 
  @open="handleOpen" @close="handleClose">
    <sidebar-item 
    v-for="route in routes[0].children"
    :key="route.name"
    :item="route"
    :base-path="route.path"
     />
  </el-menu>
</template>
<script lang="ts" setup>
import {computed} from 'vue'
import SidebarItem from "./SidebarItem.vue"
import { useRoute } from "vue-router"
import {routes} from '@/router'
// 配置默认激活菜单
const activeMenu = computed(() => {
  const route = useRoute();
  const { meta, path } = route;
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});
const handleOpen = (key: any, keyPath: any) => {
  console.log(key, keyPath)
}
const handleClose = (key: any, keyPath: any) => {
  console.log(key, keyPath)
}
</script>

