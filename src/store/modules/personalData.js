import PersonalDataModel from '@/shared/models/personalDataModel'
import GENDERS from '@/shared/enums/genders'
import SCHOOL_TERMS from '@/shared/enums/schoolTerms'
import YES_NO from '@/shared/enums/yesNo'
import CidRepository from '@/shared/http/repositories/socialProject/cid'

const state = {
  personalData: new PersonalDataModel(),
  genders: Object.values(GENDERS),
  schoolTerms: Object.values(SCHOOL_TERMS),
  yesNo: Object.values(YES_NO),
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

  SET_AGE: (state, payload) => state.age = payload,

  CLEAR_AGE: state => state.age = null,

  SET_CID: (state, payload) => {
    state.personalData.cid = payload.cidCode
    state.personalData.cidDescription = payload.name
    return state.personalData
  }
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
  },

  async fetchCid({ commit, dispatch }, cidCode) {
    dispatch('commonModule/showLoading', true, { root: true })

    await CidRepository.GetByCode(cidCode)
      .then(res => {
        if (res.data.data === null || res.data.data.length === 0) {
          dispatch('commonModule/showLoading', false, { root: true })

          dispatch('commonModule/toast', {
            type: 'warning',
            msg: 'CID inválido ou não possui registros.',
            title: 'Aviso'
          }, { root: true })
          return Promise.resolve()
        }

        commit('SET_CID', res.data.data)
        dispatch('commonModule/showLoading', false, { root: true })
        return Promise.resolve()
      })
      .catch(err => {
        dispatch('commonModule/toast', {
          type: 'error',
          msg: err,
          title: 'Erro'
        }, { root: true })

        dispatch('commonModule/showLoading', false, { root: true })
        return Promise.reject()
      })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
