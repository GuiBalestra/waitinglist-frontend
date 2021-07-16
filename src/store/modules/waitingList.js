import ModalityLocalTrainingModel from '@/shared/models/modalityLocalTraining'

const state = {
  modalityLocalTraining: new ModalityLocalTrainingModel(),
  localTrainings: ['Arena', 'Hípica'],
  modalities: ['Natação', 'Polo']
}

const getters = {

}

const mutations = {
  clearModalityLocalTraining: state => state.modalityLocalTraining = new ModalityLocalTrainingModel()
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
