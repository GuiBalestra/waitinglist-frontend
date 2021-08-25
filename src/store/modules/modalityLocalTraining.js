import ModalityLocalTrainingModel from '@/shared/models/modalityLocalTraining'
import ModalityLocalTrainingRepository from '@/shared/http/repositories/socialProject/modalityLocalTraining'

const state = {
  modalityLocalTraining: new ModalityLocalTrainingModel(),
  modalitiesLocalTrainings: [],
  localTrainings: [],
  modalities: [],
  modalitiesLocals: []
}

const getters = {
  getModalitiesLocals: state => state.modalitiesLocals
}

const mutations = {
  clearModalityLocalTraining: state => state.modalityLocalTraining = new ModalityLocalTrainingModel(),

  clearModalitiesLocals: state => state.modalitiesLocals = [],

  removeModalityLocal: (state, payload) => state.modalitiesLocals.splice(payload, 1),

  setModality: (state, payload) => state.modalityLocalTraining.modalityId = payload,

  setLocalTraining: (state, payload) => state.modalityLocalTraining.localTrainingId = payload,

  SET_MODALITIES_LOCAL_TRAININGS: (state, payload) => state.modalitiesLocalTrainings = payload,

  CLEAR_MODALITIES: state => state.modalities = [],

  SET_MODALITIES: (state, payload) => state.modalities.push(payload),

  CLEAR_LOCAL_TRAININGS: state => state.localTrainings = [],

  SET_LOCAL_TRAININGS: (state, payload) => state.localTrainings.push(payload)
}

const actions = {
  async fetchModalitiesLocalTrainings({ state, commit, dispatch }, force) {
    if (!state.modalitiesLocalTrainings.length || force) {
      dispatch('commonModule/showLoading', true, { root: true })

      await ModalityLocalTrainingRepository.GetAll()
        .then(res => {

          commit('SET_MODALITIES_LOCAL_TRAININGS', res.data.data)
          dispatch('onSelectModality')
          dispatch('onSelectLocalTraining')
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
  },

  onSelectLocalTraining({ state, commit }) {
    let list = state.modalitiesLocalTrainings

    if (state.modalityLocalTraining.localTrainingId) {
      const type = state.localTrainings.filter(lt => lt.id === state.modalityLocalTraining.localTrainingId)

      if (type.length > 0) {
        state.modalityLocalTraining.localTrainingName = type[0].name
        list = state.modalitiesLocalTrainings.filter(lt => lt.localTrainingId === type[0].id)
      }
    }

    commit('CLEAR_MODALITIES')
    for (let i = 0; i < list.length; i++) {
      let modality = {
        modalityId: list[i].modalityId,
        modalityName: list[i].modalityName
      }

      if (state.modalities.filter(m => m.id === modality.id).length === 0) {
        commit('SET_MODALITIES', modality)
      }
    }
  },

  onSelectModality({ state, commit }) {
    let list = state.modalitiesLocalTrainings

    if (state.modalityLocalTraining.modalityId) {
      let type = state.modalities.filter(m => m.id === state.modalityLocalTraining.modalityId)

      if (type.length > 0) {
        state.modalityLocalTraining.modalityName = type[0].name
        list = state.modalitiesLocalTrainings.filter(m => m.modalityId === type[0].id)
      }
    }

    commit('CLEAR_LOCAL_TRAININGS')
    for (let i = 0; i < list.length; i++) {
      let local = {
        localTrainingId: list[i].localTrainingId,
        localTrainingName: list[i].localTrainingName
      }

      if (state.localTrainings.filter(lt => lt.id === local.id).length === 0) {
        commit('SET_LOCAL_TRAININGS', local)
      }
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
