import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import getters from './getters'
import app from './modules/app'
import user from './modules/user'


Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    app,
    user,
  },
  getters
})

export default store
