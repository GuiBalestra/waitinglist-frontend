import ModalityLocalTrainingModel from '@/shared/models/modalityLocalTraining'

const state = {
  modalityLocalTraining: new ModalityLocalTrainingModel(),
  localTrainings: ['Arena', 'Hípica'],
  modalities: ['Natação', 'Polo'],
  modalitiesLocals: []
}

const getters = {
  getModalitiesLocals: state => state.modalitiesLocals
}

const mutations = {
  clearModalityLocalTraining: state => state.modalityLocalTraining = new ModalityLocalTrainingModel(),
  clearModalitiesLocals: state => state.modalitiesLocals = []
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
