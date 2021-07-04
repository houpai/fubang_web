/**
*@desc: 首页
*@author: houpai
*@date 2021/07/04 22:28:46
*/
<template>
  <div class="index-container">
    <commonTitle
      :title-text="'关于我们'"
      :title-text-en="'About Us'"
    />
    <aboutUs/>
    <business/>
    <trends/>

  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import commonTitle from '../../components/Title/Title'
import aboutUs from './component/about/about'
import business from "@/views/Index/component/business/business";
import trends from "@/views/Trends/trends";

export default {
  name: 'Dashboard',
  components:{
    commonTitle,
    aboutUs,
    business,
    trends
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },

}
</script>

<style lang="scss" scoped>
  @import "./index.scss";
</style>
