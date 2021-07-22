<template>
  <el-tabs type="border-card"  v-model="activeName" @tab-click="handleClick">
    <el-tab-pane v-for="item in tabsAry" :key="item.path" :label="item.title" :name="item.name">
      {{item.name}}
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import {computed,watch} from 'vue'
import {useStore} from 'vuex'
import { useRoute } from "vue-router"
import TagsType from 'store/modules/tagsView'
const store = useStore()
const route = useRoute()
let activeName:string = '' // 当前激活项

const tabsAry = computed(()=>store.getters.tagsViewsAry)
const handleClick = <T,R>(tab:T, event:R) => {
  // console.log(tab, event);
}
const getTagsView = () => {
  const {path,name,meta} = route
  const tagsItem:TagsType = {
    path:path,
    name:name,
    title:meta.title
  } 
  store.dispatch('tagsView/createTags', tagsItem)
  store.dispatch('tagsView/createCacheView', name)
  activeName = name as string
}
watch(()=>route.path, getTagsView)
getTagsView()
</script>
