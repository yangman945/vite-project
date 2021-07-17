<template>
  <div id="app-wrapper">
      <!-- 侧边导航栏 -->
    <div class="sidebar-container">
        <nav-menu />
    </div>
    <div class="main-container">
      <div class="layout-right-top">
        <Breadcrumb />
        <MenuTabs />
      </div>
      <div class="layout-right-content">
        <app-main />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import AppMain from "./components/AppMain.vue"
import NavMenu from "./components/NavMenu.vue"
import Breadcrumb from "./components/Breadcrumb.vue"
import MenuTabs from "./components/MenuTabs.vue"
</script>
<style lang="scss" scoped>
#app-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  .sidebar-container{
      width: 200px;
      height: 100%;
      background-color: #e3e3e3;
  }
  .main-container{
    width: 100%;
    min-height: 100%;
    background-color: #f3f3f3;
    .layout-right-top{
      width: 100%;
      height: 88px;
      background-color: #fff;
    }
    .layout-right-content{
      width: 100%;
      min-height: calc(100vh - 88px);
    }
  }
}
</style>
