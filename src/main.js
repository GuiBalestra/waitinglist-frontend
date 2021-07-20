import Vue from 'vue'
import App from './App.vue'
import VuePageTitle from 'vue-page-title'
import router from './router/router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './global.scss'
import  * as VeeValidate  from 'vee-validate/dist/vee-validate.full.esm'
import pt_BR from 'vee-validate/dist/locale/pt_BR.json'
import config from '../src/shared/utils/veeConfig'
import VueTheMask from 'vue-the-mask'
import VueFormWizard from 'vue-form-wizard'
import ThemifyIcon from 'vue-themify-icons'

Vue.config.productionTip = false

Vue.use(VuePageTitle, {
  prefix: 'ABDA | ',
  router
})
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueTheMask)
Vue.use(VueFormWizard)
Vue.use(ThemifyIcon)

Vue.component('ValidationProvider', VeeValidate.ValidationProvider)
Vue.component('ValidationObserver', VeeValidate.ValidationObserver)
VeeValidate.configure(config)
VeeValidate.localize('pt_Br', pt_BR)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
