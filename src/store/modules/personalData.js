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
  age: null
}

const getters = {
  getPersonalData: state => state.personalData,
  getAge: state => state.age
}

const mutations = {
  clearPersonalData: state => {
    state.personalData = new PersonalDataModel()
    return state.personalData
  },

  SET_AGE: (state, payload) => {
    state.age = payload
  },

  CLEAR_AGE: state => state.age = null
}

const actions = {
  setAge({ commit }, birthDate) {
    if(!birthDate) return

    const bdSplit = birthDate.split('-')
    const dob = new Date(bdSplit[0], bdSplit[1], bdSplit[2])
    const diff_ms = Date.now() - dob.getTime()
    const age_dt = new Date(diff_ms)
    commit('SET_AGE', Math.abs(age_dt.getUTCFullYear() - 1970))
  },

  clearAge({ commit }) {
    commit('CLEAR_AGE')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
