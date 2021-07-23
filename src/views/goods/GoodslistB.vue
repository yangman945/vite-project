<template>
  <div id="app-wrapper">商品页B</div>
  <el-input v-model="name"></el-input>
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
    width: 100%;
}
</style>
