import SocialProjectManager from '../../clients/SocialProjectManager'

const resourceName = 'modalitylocaltraining'

const GetAll = () => SocialProjectManager.get(resourceName)

const ModalityLocalTrainingRepository = {
  GetAll
}

export default ModalityLocalTrainingRepository
