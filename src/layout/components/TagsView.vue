<template>
  <div class="tags-components">
    <router-link 
    v-for="(item,index) in tagsAry" 
    :key="item.name" 
    :to="{ path: item.path }" 
    :class="[isActive(item) ? 'active' : '','tags-view-item']">
      <span>{{ item.title }}</span>
      <i 
      v-if="!item.isFixdeKeepAlive" 
      class="el-icon-circle-close"
      @click.prevent.stop="closeTagItem(item,index)"
      ></i>
    </router-link>
  </div>
</template>
<script lang="ts" setup>
import { computed, watch } from "vue"
import { useStore } from "vuex"
import { useRoute,useRouter } from "vue-router"
import TagsType from "store/modules/tagsView"
const store = useStore()
const route = useRoute()
const router = useRouter()
const tagsAry = computed(() => store.getters.tagsViewsAry)

const isActive = (item: TagsType): boolean => {
  return item.path === route.path
}
const closeTagItem = <T,R>(item: T,index:R): void => {
  if(isActive(item)){
    // 关闭自身
    store.dispatch('tagsView/closeSelfTagsItem', index).then(resp => {
      router.push({
        path:resp.path
      })
    })
  }else{
    // 关闭其他
    store.dispatch('tagsView/closeElseTagsItem', item)
  }
}
const getTagsView = () => {
  const { path, name, meta } = route
  const tagsItem: TagsType = {
    path: path,
    name: name,
    title: meta.title,
    isFixdeKeepAlive: meta.isFixdeKeepAlive ? true : false
  }
  store.dispatch("tagsView/createTags", tagsItem)
  store.dispatch("tagsView/createCacheView", name)
}
watch(() => route.path, getTagsView)
getTagsView()
</script>
<style lang="scss" scoped>
.tags-components {
  .tags-view-item {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 25px;
    border: 1px solid rgba(124, 141, 181, 0.3);
    border-radius: 4px;
    color: #495060;
    background: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;
    box-sizing: border-box;
    &.active {
        background-color: #5DDAB4;
        color: #fff;
      }
    i{
      font-size: 20px;
    }
  }
}
</style>
