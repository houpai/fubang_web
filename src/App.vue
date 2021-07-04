<template>
  <div id="app">
    <commonHeader/>
    <commonBanner/>
    <router-view/>
  </div>
</template>

<script>

import commonHeader from './components/Header/Header'
import commonBanner from './components/Banner/Banner'

export default {
  name: 'App',
  components:{
    commonHeader,
    commonBanner
  }
}
</script>
