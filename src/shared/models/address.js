import GuidUtils from '@/shared/utils/guid'

export default class Address {
  constructor({
    id,
    cep,
    city,
    district,
    road,
    number
  } = {}) {
    this.id = id || GuidUtils.emptyGuid,
    this.cep = cep,
    this.city = city,
    this.district = district
    this.road = road,
    this.number = number
  }
}
