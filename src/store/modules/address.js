import AddressModel from '@/shared/models/address'

const state = {
  address: new AddressModel()
}

const getters = {
  getAddress: state => state.address
}

const mutations = {
  clearAddress: state => state.address = new AddressModel()
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
