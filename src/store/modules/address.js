import AddressModel from '@/shared/models/address'
import CepRepository from '@/shared/http/repositories/socialProject/cep'

const state = {
  address: new AddressModel(),
  loading: false
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
  },

  SHOW_LOADING: (state, payload) => state.loading = payload
}

const actions = {
  async fetchAddress({ commit }, zipCode) {
    commit('SHOW_LOADING', true)
    await CepRepository.GetByZipCode(zipCode)
      .then((res) => {
        commit('SET_ADDRESS', res.data.data)
        commit('SHOW_LOADING', false)
        return Promise.resolve()
      })
      .catch(() => {
        // toast error
        commit('SHOW_LOADING', false)
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
