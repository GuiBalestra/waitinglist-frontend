import GuidUtils from '@/shared/utils/guid'

export default class ModalityLocalTraining {
  constructor({
    id,
    localTrainingId,
    localTrainingName,
    modalityId,
    modalityName
  } = {}) {
    this.id = id || GuidUtils.emptyGuid,
    this.localTrainingId = localTrainingId,
    this.localTrainingName = localTrainingName,
    this.modalityId = modalityId,
    this.modalityName = modalityName
  }
}
