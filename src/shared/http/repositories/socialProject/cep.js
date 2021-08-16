import SocialProjectManager from '../../clients/SocialProjectManager'

const resourceName = 'addresssuggestion'

const GetByZipCode = zipCode => SocialProjectManager.get(`${resourceName}/${zipCode}`)

const CidRepository = {
  GetByZipCode
}

export default CidRepository
