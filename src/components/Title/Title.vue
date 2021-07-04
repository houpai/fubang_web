/**
*@desc: 公共头部组件
*@author: houpai
*@date 2021/07/04 23:27:05
*/
<template>
  <div class="Title_container">
    <p class="title_text" :style="{'color':titleTextColor}">{{titleText}}</p>
    <p class="title_text_en" :style="{'color':titleTextEnColor}">{{titleTextEn}}</p>
  </div>
</template>

<script>
export default {
  name: "Title",
  props:{
    titleText:{
      type:String,
      default() {
        return ''
      }
    },
    titleTextEn:{
      type:String,
      default() {
        return ''
      }
    },
    titleTextColor :{
      type:String,
      default() {
        return '#3498db'
      }
    },
    titleTextEnColor :{
      type:String,
      default() {
        return '#7f8c8d'
      }
    },
  }
}
</script>

<style scoped lang="scss">
@import "Title";
</style>
