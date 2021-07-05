/**
*@desc: 行业动态
*@author: houpai
*@date 2021/07/05 02:00:17
*/
<template>
  <div class="index-container">
    <commonTitle
      :title-text="'行业动态'"
      :title-text-en="'Industry trends'"
    />
    <div class="main">
      <div class="content">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import commonTitle from '../../components/Title/Title'
import {$uuid,$isInViewPortOfOne} from '../../utils/index'

export default {
  components:{
    commonTitle
  },
  computed: {
    ...mapGetters(["name"]),
  },
  data() {
    return {
      show: false
    };
  },
  methods:{
  },
  mounted () {
  },
  beforeDestroy() {
  },
  created() {
  }
};
</script>

<style lang="scss" scoped>
@import "./Contact.scss";
</style>
