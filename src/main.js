import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { firestorePlugin } from 'vuefire'

import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import '../node_modules/@fortawesome/fontawesome-free/js/all.js'

Vue.use(firestorePlugin)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
