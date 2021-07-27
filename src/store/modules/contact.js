import ContactModel from '@/shared/models/contact'

const state = {
  contact: new ContactModel(),
  contacts: [],
  contactTypes: ['MÃE', 'PAI', 'TIA', 'TIO', 'AVÓ', 'AVÔ', 'OUTROS']
}

const getters = {
  getContacts: state => state.contacts
}

const mutations = {
  clearContact: state => state.contact = new ContactModel(),
  clearContacts: state => state.contacts = []
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
