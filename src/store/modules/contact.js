import ContactModel from '@/shared/models/contact'

const state = {
  contact: new ContactModel(),
  contactTypes: ['MÃE', 'PAI', 'TIA', 'TIO', 'AVÓ', 'AVÔ', 'OUTROS']
}

const getters = {

}

const mutations = {
  clearContact: state => state.contact = new ContactModel()
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
