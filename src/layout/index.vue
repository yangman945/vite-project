<template>
  <div id="app-wrapper">
      <!-- 侧边导航栏 -->
    <div class="sidebar-container">
        <nav-menu />
    </div>
    <div class="main-container">
      <app-main />
    </div>
  </div>
</template>
<script lang="ts" setup>
import AppMain from "./components/AppMain.vue"
import NavMenu from "./components/NavMenu.vue"
</script>
<style lang="scss" scoped>
#app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  .sidebar-container{
      width: 200px;
      height: 100vh;
  }
}
</style>
