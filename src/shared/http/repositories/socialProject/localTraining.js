import SocialProjectManager from '../../clients/SocialProjectManager'

const resourceName = 'localtraining'

const GetAll = () => SocialProjectManager.get(resourceName)

const LocalTrainingRepository = {
  GetAll
}

export default LocalTrainingRepository
