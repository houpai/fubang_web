/**
*@desc: 轮播图组件
*@author: houpai
*@date 2021/07/04 22:08:35
*/
<template>
  <div class="Banner_container">
    <el-carousel trigger="click" height="600">
      <el-carousel-item v-for="item in 4" :key="item">
        <div class="img_bg"></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Banner"
}
</script>

<style scoped lang="scss">
@import "Banner";
</style>
