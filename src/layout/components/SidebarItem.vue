<template>
  <!-- el-submenu 分组  el-menu-item 根节点 -->
  <div>
    <div v-if="isChild">
      <el-menu-item :index="basePath">{{ item?.meta.title }}</el-menu-item>
    </div>
    <el-submenu v-else>
      <template #title>{{ item?.meta.title }}</template>
      <sidebar-item 
      v-for="child in item?.children" 
      :key="child.name" 
      :item="child"
      :base-path="basePath+'/'+child.path"
       />
    </el-submenu>
  </div>
</template>
<script lang="ts" setup="computed">
import { defineProps, computed } from "vue"
const { item,basePath } = defineProps({
  item: Object,
  basePath:String
})
console.log(basePath, "basePath????")
const isChild = computed(() => {
  if (item?.children) {return false}
    return true

})
</script>
