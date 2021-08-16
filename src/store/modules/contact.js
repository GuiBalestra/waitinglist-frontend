import ContactModel from '@/shared/models/contact'
import ContactTypeRepository from '@/shared/http/repositories/socialProject/contact-type'

const state = {
  contact: new ContactModel(),
  contacts: [],
  contactTypes: []
}

const getters = {
  getContacts: state => state.contacts
}

const mutations = {
  clearContact: state => state.contact = new ContactModel(),
  clearContacts: state => state.contacts = [],
  removeContact: (state, payload) => state.contacts.splice(payload, 1),
  SET_CONTACT_TYPE: (state, payload) => state.contactTypes = payload
}

const actions = {
  async fetchContactTypes({ state, commit }, force) {
    if (!state.contactTypes.length || force) {
      //loading push
      await ContactTypeRepository.GetAll()
        .then((res) => {
          commit('SET_CONTACT_TYPE', res.data.data)
          //loading pop
          return Promise.resolve()
        })
        .catch(() => {
          // toast error
          //loading pop
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
