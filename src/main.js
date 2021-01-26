import Vue from 'vue'
import App from './app.vue'
import router from './routes'
import Vuex from 'vuex'
import store from './store'

import './assets/scss/main.scss'

Vue.use(Vuex)
Vue.config.productionTip = false


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
