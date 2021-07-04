<template>
  <div id="app">
    <commonHeader/>
    <commonBanner/>
    <router-view/>
    <commonFoot/>
  </div>
</template>

<script>

import commonHeader from './components/Header/Header'
import commonBanner from './components/Banner/Banner'
import commonFoot from './components/Foot/Foot'

export default {
  name: 'App',
  components:{
    commonHeader,
    commonBanner,
    commonFoot
  }
}
</script>
