import { app } from '@/main'

const state = {
  loading: false,
}

const getters = {
  loading: state => state.loading,
}

const mutations = {
  SHOW_LOADING: (state, payload) => state.loading = payload
}

const actions = {
  showLoading({ commit }, payload) {
    commit('SHOW_LOADING', payload)
  },

  // eslint-disable-next-line
  toast({}, { type, msg, title }) {
    switch (type) {
      case 'success': {
        app.$bvToast.toast(msg, {
          title: title,
          variant: type,
          autoHideDelay: 3000
        })
        break
      }
      case 'error': {
        app.$bvToast.toast(msg, {
          title: title,
          variant: type,
          autoHideDelay: 3000
        })
        break
      }
      case 'warning': {
        app.$bvToast.toast(msg, {
          title: title,
          variant: type,
          autoHideDelay: 3000
        })
        break
      }
      case 'info': {
        app.$bvToast.toast(msg, {
          title: title,
          variant: type,
          autoHideDelay: 3000
        })
        break
      }
      default:
        break
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
