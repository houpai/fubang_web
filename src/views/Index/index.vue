/**
*@desc: 首页
*@author: houpai
*@date 2021/07/04 22:28:46
*/
<template>
  <div class="index-container">

  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
  @import "./index.scss";
</style>
