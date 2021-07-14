<template>
  <el-menu 
  default-active="2" 
  class="el-menu-vertical-demo" 
  @open="handleOpen" 
  @close="handleClose">
  <sidebar-item />
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import SidebarItem from './SidebarItem.vue'
export default defineComponent({
  name: "NavMenu",
  components:{SidebarItem},
  setup() {
    const handleOpen = (key: any, keyPath: any) => {
      console.log(key, keyPath)
    }
    const handleClose = (key: any, keyPath: any) => {
      console.log(key, keyPath)
    }
    return {
      handleOpen, handleClose
    }
  }
})
</script>
