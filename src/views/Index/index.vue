<template>
  <div class="index-container">
    <i class="iconfont icon-zuo"></i>
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
