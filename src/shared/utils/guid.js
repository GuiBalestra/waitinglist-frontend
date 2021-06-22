import { v4 as uuid } from 'uuid'

const GuidUtils = {
  isEmpty(str) {
    if (!str) {
      return true
    }

    return str === '00000000-0000-0000-0000-000000000000'
  },

  emptyGuid: '00000000-0000-0000-0000-000000000000',

  newGuid() {
    return uuid()
  }
}

export default GuidUtils
