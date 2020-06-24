import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    username: ''
  },
  mutations: {
    login(state, username) {
      state.isLoggedIn = true;
      state.username = username;
      console.log(username)
    }
  },
  actions: {
  },
  modules: {
  }
})
