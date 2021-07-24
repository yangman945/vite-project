<template>
<div id="app-wrapper">
    商品页A
  <el-input v-model="name"></el-input>
    <router-link to="/goods/goodslistA_detail">详情</router-link>
</div>
</template>
<script lang="ts">
import { defineComponent} from "vue"
export default defineComponent({
    name:"goodslistA",
    data(){
        return {name:""}
    },
})
</script>
<style lang="scss" scoped>
#app-wrapper{}
</style>