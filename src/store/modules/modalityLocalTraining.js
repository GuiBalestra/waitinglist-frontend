import ModalityLocalTrainingModel from '@/shared/models/modalityLocalTraining'
import ModalityRepository from '@/shared/http/repositories/socialProject/modality'
import LocalTrainingRepository from '@/shared/http/repositories/socialProject/localTraining'

const state = {
  modalityLocalTraining: new ModalityLocalTrainingModel(),
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
  SET_MODALITIES: (state, payload) => state.modalities = payload,
  SET_LOCAL_TRAININGS: (state, payload) => state.localTrainings = payload
}

const actions = {
  async fetchModalities({ state, commit }, force) {
    if (!state.modalities.length || force) {
      // loading push
      await ModalityRepository.GetAll()
        .then((res) => {
          commit('SET_MODALITIES', res.data.data)
          // loading pop
          return Promise.resolve()
        })
        .catch(() => {
          // toast error
          // loading pop
          return Promise.reject()
        })
    }
    return Promise.resolve()
  },

  async fetchLocalTrainings({ state, commit }, force) {
    if (!state.localTrainings.length || force) {
      //loading push
      await LocalTrainingRepository.GetAll()
        .then((res) => {
          commit('SET_LOCAL_TRAININGS', res.data.data)
          // loading pop
          return Promise.resolve()
        })
        .catch(() => {
          // toast error
          // loading pop
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
