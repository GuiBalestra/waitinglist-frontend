import SocialProjectManager from '../../clients/SocialProjectManager'

const resourceName = 'modality'

const GetAll = () => SocialProjectManager.get(resourceName)

const ModalityRepository = {
  GetAll
}

export default ModalityRepository
