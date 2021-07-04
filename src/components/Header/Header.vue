/**
*@desc: Header头部组件
*@author: houpai
*@date 2021/07/04 20:49:31
*/
<template>
  <div class="Header_container">
    <div class="Header_container_content">
      <img src="https://ntemimg.wezhan.cn/contents/sitefiles2002/10011693/images/-26830.png" alt="" class="logo">
      <ul class="menu_list">
        <li class="active_menu">首页</li>
        <li>关于我们</li>
        <li>业务领域</li>
        <li>行业动态</li>
        <li style="border:0">联系我们</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>
@import "./Header.scss";
</style>

