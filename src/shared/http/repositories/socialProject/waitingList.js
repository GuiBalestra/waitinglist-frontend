import SocialProjectManager from '../../clients/SocialProjectManager'

const resourceName = 'waitinglist'

const Create = waitinglist => SocialProjectManager.post(resourceName, waitinglist)


const WaitingListRepository = {
  Create
}

export default WaitingListRepository
