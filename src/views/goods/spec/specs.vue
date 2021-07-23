<template>
  <div id="app-wrapper">
    规格A鸭
    <el-input v-model="name"></el-input>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  data(){
    return {name:""}
  }
})
</script>
<style lang="scss" scoped>
#app-wrapper {
}
</style>
