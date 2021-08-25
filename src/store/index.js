import Vue from 'vue'
import Vuex from 'vuex'
import personalDataModule from './modules/personalData'
import addressModule from './modules/address'
import contactModule from './modules/contact'
import modalityLocalTrainingModule from './modules/modalityLocalTraining'
import commonModule from './modules/common'

const modules = {
  personalDataModule,
  addressModule,
  contactModule,
  modalityLocalTrainingModule,
  commonModule
}

Vue.use(Vuex)

export default new Vuex.Store({
  modules
})
