import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import Vuex from 'vuex'
import store from './store'

import './assets/scss/main.scss'

Vue.use(Vuex)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
  el: '#app'
})
