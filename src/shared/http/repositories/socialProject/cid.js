import SocialProjectManager from '../../clients/SocialProjectManager'

const resourceName = 'cid'

const GetByCode = cidCode => SocialProjectManager.get(`${resourceName}/${cidCode}`)

const CidRepository = {
  GetByCode
}

export default CidRepository
