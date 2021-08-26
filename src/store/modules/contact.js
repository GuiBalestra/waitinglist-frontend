import ContactModel from '@/shared/models/contact'
import ContactTypeRepository from '@/shared/http/repositories/socialProject/contact-type'

const state = {
  contact: new ContactModel(),
  contacts: [],
  contactTypes: []
}

const getters = {
  contacts: state => state.contacts
}

const mutations = {
  clearContact: state => state.contact = new ContactModel(),

  clearContacts: state => state.contacts = [],

  removeContact: (state, payload) => state.contacts.splice(payload, 1),

  SET_CONTACT_TYPES: (state, payload) => state.contactTypes = payload
}

const actions = {
  async fetchContactTypes({ state, commit, dispatch }, force) {
    if (!state.contactTypes.length || force) {
      dispatch('commonModule/showLoading', true, { root: true })

      await ContactTypeRepository.GetAll()
        .then(res => {
          if (!res.data.data) return Promise.reject()

          commit('SET_CONTACT_TYPES', res.data.data)
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
