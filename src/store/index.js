import Vue from 'vue'
import Vuex from 'vuex'
import personalDataModule from './modules/personalData'
import addressModule from './modules/address'
import contactModule from './modules/contact'
import waitingListModule from './modules/waitingList'

const modules = {
  personalDataModule,
  addressModule,
  contactModule,
  waitingListModule
}

Vue.use(Vuex)

export default new Vuex.Store({
  modules
})
