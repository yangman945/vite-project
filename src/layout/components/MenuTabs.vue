<template>
  <el-tabs type="border-card"  v-model="activeName" @tab-click="handleClick">
    <el-tab-pane v-for="item in tabsAry" :key="item.path" :label="item.title"></el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import {useStore} from 'vuex'
import {computed} from 'vue'
import { useRoute } from "vue-router"
const store = useStore()
const route = useRoute()

const tabsAry = computed(()=>store.getters.tabBarAry)
const handleClick = <T,R>(tab:T, event:R) => {
  // console.log(tab, event);
}
const activeName:string = '/goods/spec/specs'
console.log(activeName,"activeName")
</script>
