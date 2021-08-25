import AddressModel from '@/shared/models/address'
import CepRepository from '@/shared/http/repositories/socialProject/cep'

const state = {
  address: new AddressModel(),
}

const getters = {
  getAddress: state => state.address
}

const mutations = {
  clearAddress: state => state.address = new AddressModel(),

  SET_ADDRESS: (state, payload) => {
    state.address.zipCode = payload.zipCode
    state.address.cityId = payload.cityID
    state.address.city = payload.cityName
    state.address.district = payload.neighborhood
    state.address.street = payload.street
    return state.address
  }
}

const actions = {
  async fetchAddress({ commit, dispatch }, zipCode) {
    dispatch('commonModule/showLoading', true, { root: true })

    await CepRepository.GetByZipCode(zipCode)
      .then(res => {
        if (res.data.data === null || res.data.data.length === 0) {
          dispatch('commonModule/showLoading', false, { root: true })

          dispatch('commonModule/toast', {
            type: 'warning',
            msg: 'CEP inválido ou não possui registros.',
            title: 'Aviso'
          }, { root: true })
          return Promise.resolve()
        }

        commit('SET_ADDRESS', res.data.data)
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
