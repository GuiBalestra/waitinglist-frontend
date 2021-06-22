import GuidUtils from '@/shared/utils/guid'

export default class Address {
  constructor({
    id,
    district
  } = {}) {
    this.id = id || GuidUtils.emptyGuid,
    this.district = district
  }
}
