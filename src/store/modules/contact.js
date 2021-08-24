import ContactModel from '@/shared/models/contact'
import ContactTypeRepository from '@/shared/http/repositories/socialProject/contact-type'

const state = {
  contact: new ContactModel(),
  contacts: [],
  contactTypes: [],
  loading: false
}

const getters = {
  getContacts: state => state.contacts
}

const mutations = {
  clearContact: state => state.contact = new ContactModel(),

  clearContacts: state => state.contacts = [],

  removeContact: (state, payload) => state.contacts.splice(payload, 1),

  SET_CONTACT_TYPE: (state, payload) => state.contactTypes = payload,

  SHOW_LOADING: (state, payload) => state.loading = payload
}

const actions = {
  async fetchContactTypes({ state, commit }, force) {
    if (!state.contactTypes.length || force) {
      commit('SHOW_LOADING', true)
      await ContactTypeRepository.GetAll()
        .then((res) => {
          commit('SET_CONTACT_TYPE', res.data.data)
          commit('SHOW_LOADING', false)
          return Promise.resolve()
        })
        .catch(() => {
          // toast error
          commit('SHOW_LOADING', false)
          return Promise.reject()
        })
    }
    return Promise.resolve()
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
