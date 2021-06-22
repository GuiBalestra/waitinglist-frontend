import Vue from 'vue'
import App from './App.vue'
import VuePageTitle from 'vue-page-title'
import router from './router/router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './global.scss'

Vue.config.productionTip = false

Vue.use(VuePageTitle, {
  prefix: 'ABDA | ',
  router
})
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
