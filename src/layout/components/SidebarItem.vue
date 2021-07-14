<template>
    <!-- el-submenu 分组  el-menu-item 根节点 -->
        <el-submenu index="1">
            <template #title>
                <i class="el-icon-location"></i>
                <span>导航一</span>
            </template>
            <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
                <template #title>选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
        </el-submenu>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: "SidebarItem"
})
</script>