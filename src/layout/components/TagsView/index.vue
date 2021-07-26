<template>
  <div class="tags-components">
    <router-link
      v-for="(item, index) in tagsAry"
      :key="item.name"
      :to="{ path: item.path }"
      :class="[isActive(item) ? 'active' : '', 'tags-view-item']"
      @contextmenu.prevent="tagsData.openTagMenu(item, $event)"
    >
      <span>{{ item.title }}</span>
      <i
        v-if="!item.isAffix"
        class="el-icon-circle-close"
        @click.prevent.stop="closeTagsItem(item, index)"
      ></i>
    </router-link>
    <!-- <transition name="el-zoom-in-top"> -->
    <ul v-show="tagsData.tagMenuShow">
      <li>关闭当前页面</li>
      <li>关闭左侧页面</li>
      <li>关闭右侧页面</li>
      <li>关闭全部</li>
    </ul>
    <!-- </transition>  -->
  </div>
</template>
<script lang="ts" setup>
import { computed, watch, ref, reactive } from "vue"
import { useStore } from "vuex"
import { useRoute, useRouter } from "vue-router"
import { routes } from "@/router"
import TagsType from "store/modules/tagsView"
import { tagsData } from './index'
const store = useStore()
const route = useRoute()
const router = useRouter()
let affixAry: TagsType = []
const tagsAry = computed(() => store.getters.tagsViewsAry)
const isActive = (item: TagsType): boolean => {
  return item.path === route.path
}
const closeTagsItem = <T, R>(item: T, index: R): void => {
  if (isActive(item)) {
    // 关闭自身
    store.dispatch("tagsView/closeSelfTagsItem", index).then((resp) => {
      router.push({
        path: resp.path
      })
    })
  } else {
    // 关闭其他
    store.dispatch("tagsView/closeElseTagsItem", item)
  }
}
const getTagsView = () => {
  const { path, name, meta } = route
  const tagsItem: TagsType = {
    path: path,
    name: name,
    title: meta.title,
    isAffix: meta.isAffix ? true : false
  }
  store.dispatch("tagsView/createTags", tagsItem)
  store.dispatch("tagsView/createCacheView", name)
}
const getAffixTags = (routers: any[]) => {
  let affixTags: TagsType[] = []
  routers.forEach((routeItem) => {

    if (routeItem.meta.isAffix) {
      affixTags.push({
        path: routeItem.path,
        name: routeItem.name,
        title: routeItem.meta.title,
        isAffix: routeItem.meta.isAffix ? true : false
      })
    }
  })
  return affixTags
}
const initTags = () => {
  affixAry = getAffixTags(routes[0].children)
  console.log(affixAry, "affixAry")
  affixAry.forEach((item: TagsType) => {
    store.dispatch("tagsView/createTags", item)
    store.dispatch("tagsView/createCacheView", item.name)
  })
}
watch(() => route.path, getTagsView)
watch(
  () => tagsData.tagMenuShow,
  (value) => {
    if (value) {
      document.body.addEventListener("click", () => {
        tagsData.tagMenuShow = false
      })
    } else {
      document.body.removeEventListener("click", () => {
        tagsData.tagMenuShow = false
      })
    }
  }
)
initTags()
getTagsView()
</script>
<style lang="scss" scoped>
.tags-components {
  position: relative;
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
      background-color: #5ddab4;
      color: #fff;
    }
    i {
      font-size: 20px;
    }
  }
  ul {
    z-index: 9;
    position: absolute;
    top: 0;
    left: 0;
    width: 120px;
    padding: 20px;
    margin: 0;
    background-color: #e4e4e4;
    li {
    }
  }
}
</style>
