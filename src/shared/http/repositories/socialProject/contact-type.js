import SocialProjectManager from '../../clients/SocialProjectManager'

const resourceName = 'contacttype'

const GetAll = () => SocialProjectManager.get(resourceName)

const ContactTypeRepository = {
  GetAll
}

export default ContactTypeRepository
