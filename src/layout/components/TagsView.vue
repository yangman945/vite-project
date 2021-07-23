<template>
  <el-tabs type="border-card"  v-model="activeName" @tab-click="handleClick">
    <el-tab-pane v-for="item in tagsAry" :key="item.path" :label="item.title" :name="item.name">
      {{item.name}}
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import {computed,watch} from 'vue'
import {useStore} from 'vuex'
import { useRoute,useRouter } from "vue-router"
import TagsType from 'store/modules/tagsView'
const store = useStore()
const route = useRoute()
const router = useRouter()
let activeName:string = '' // 当前激活项

const tagsAry = computed(()=>store.getters.tagsViewsAry)
console.log(tagsAry.value)
const handleClick = <T,R>(tab:T, event:R) => {
  router.push({
    name:tab.props.name
  })
}
const getTagsView = () => {
  const {path,name,meta} = route
  activeName = name as string
  const tagsItem:TagsType = {
    path:path,
    name:name,
    title:meta.title
  } 
  store.dispatch('tagsView/createTags', tagsItem)
  store.dispatch('tagsView/createCacheView', name)
  console.log(activeName,"activeName")
}
watch(()=>route.path, getTagsView)
getTagsView()
</script>
