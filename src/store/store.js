import Vue from 'vue'
import Vuex from 'vuex'
import PersonalDataModel from '@/shared/models/personalDataModel'
import ModalityLocalTraining from '@/shared/models/modalityLocalTraining'
import Address from '@/shared/models/address'
import Contact from '@/shared/models/contact'
import GENDERS from '@/shared/enums/genders'
import SCHOOL_TERMS from '@/shared/enums/schoolTerms'
import YES_NO from '@/shared/enums/yesNo'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personalData: new PersonalDataModel(),
    address: new Address(),
    contact: new Contact(),
    modalityLocalTraining: new ModalityLocalTraining(),
    genders: Object.values(GENDERS),
    schoolTerms: Object.values(SCHOOL_TERMS),
    yesNo: Object.values(YES_NO),
    cids: ['1 - DEFICIÊNCIA FÍSICA', '2 - DEFICIÊNCIA MENTAL'],
    contactTypes: ['MÃE', 'PAI', 'TIA', 'TIO', 'AVÓ', 'AVÔ', 'OUTROS'],
    cep: null,
    localTrainings: ['Arena', 'Hípica'],
    modalities: ['Natação', 'Polo']
  },

  getters: {

  },

  actions: {

  },

  mutations: {

  }
})
