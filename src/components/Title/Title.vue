/**
*@desc: 公共头部组件
*@author: houpai
*@date 2021/07/04 23:27:05
*/
<template>
  <div :id="animateId">
    <transition name="fade" enter-active-class="animate__animated animate__bounceInLeft">
      <div class="Title_container animated" v-if="show">
        <p class="title_text" :style="{'color':titleTextColor}">{{titleText}}</p>
        <p class="title_text_en" :style="{'color':titleTextEnColor}">{{titleTextEn}}</p>
      </div>
    </transition>
  </div>
</template>

<script>

import {$uuid,$isInViewPortOfOne} from '../../utils/index'

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
    isAnimate:{
      type:Boolean,
      default() {
        return true
      }
    }
  },
  data() {
    return {
      show: false,
      animateId:''
    }
  },
  methods:{
    showDiv() {
      let showId = document.getElementById(`${this.animateId}`);
      // console.log('showId==', showId)
      // console.log('this.animateId==', this.animateId)
      if(this.show || !showId) return false
      let isView = $isInViewPortOfOne(showId)
      // console.log('isView ===', isView)
      if(isView) this.show = true
      let clients = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      // console.log('showId ===', showId)
      // console.log('clients ===', clients)
      // console.log('divTop ===', divTop)
      let divTop = showId.getBoundingClientRect().top;
      if(divTop<=clients){
        this.show = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.showDiv)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.showDiv)
  },
  created() {
    this.animateId = $uuid();
    this.$nextTick(()=> {
      this.showDiv()
    })
  }
}
</script>

<style scoped lang="scss">
@import "Title";
</style>
