<template>
  <router-view v-slot="{ Component }">
      <keep-alive :include="cacheViewsAry">
        <component :is="Component" />
      </keep-alive>
  </router-view>
</template>
<script lang="ts" setup>
import { computed, watch } from "vue"
import { useStore } from "vuex"
import { useRoute } from "vue-router"
const store = useStore()
// const cacheViewsAry = computed(() => store.getters.cacheViewsAry)
const cacheViewsAry:string[] = ['goodslistB',"specs"]
const route = useRoute()
// watch(
//   () => route.path,
//   () => {
//     console.log(cacheViewsAry, "cacheViewsAry")
//   }
// )
</script>
