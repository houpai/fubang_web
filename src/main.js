import Vue from "vue"

import "normalize.css/normalize.css" // A modern alternative to CSS resets

import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

import VueBus from "vue-bus"

import "@/styles/index.scss" // global css
import "@/assets/icon/iconfont.css"

import App from "./App"
import store from "./store"
import router from "./router"
import "@/permission" // permission control


import * as filters from './filters' // global filters

import $ from "jquery"
import "./utils/startUp"



Vue.use(ElementUI)

Vue.use(VueBus)

Vue.config.productionTip = false

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
})
