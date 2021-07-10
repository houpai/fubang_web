/**
*@desc: 详情bar组件
*@author: houpai
*@date 2021/07/10 08:27:35
*/
<template>
  <div class="articleBar_component">
    <span class="router_btn" @click.stop="routerLink('/index')">首页</span>
    <i class="iconfont icon-you split_line"></i>
    <span class="router_btn" @click.stop="routerLink('/trends')">行业动态</span>
    <i class="iconfont icon-you split_line"></i>
    <span class="article_name">国际贸易中电子合同诈骗的骗术与防范</span>
  </div>
</template>

<script>
export default {
  name: "articleBar",
  props:{
    articleName:{
      type:String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {

    }
  },
  methods:{
    routerLink(path) {
      this.$router.push({
        path:path
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "./articleBar.scss";
</style>
