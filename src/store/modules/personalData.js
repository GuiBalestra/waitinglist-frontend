import PersonalDataModel from '@/shared/models/personalDataModel'
import GENDERS from '@/shared/enums/genders'
import SCHOOL_TERMS from '@/shared/enums/schoolTerms'
import YES_NO from '@/shared/enums/yesNo'

const state = {
  personalData: new PersonalDataModel(),
  genders: Object.values(GENDERS),
  schoolTerms: Object.values(SCHOOL_TERMS),
  yesNo: Object.values(YES_NO),
  cids: ['1 - DEFICIÊNCIA FÍSICA', '2 - DEFICIÊNCIA MENTAL'],
}

const getters = {
  getPersonalData: state => state.personalData
}

const mutations = {
  setPersonalData: (state, payload) => state.personalData.name = payload.name,

  clearPersonalData: state => {
    state.personalData = new PersonalDataModel()
    return state.personalData
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
