import GuidUtils from '@/shared/utils/guid'

export default class Address {
  constructor({
    id,
    city,
    cityId,
    zipCode,
    district,
    street,
    number,
    complement
  } = {}) {
    this.id = id || GuidUtils.emptyGuid,
    this.zipCode = zipCode,
    this.city = city,
    this.cityId = cityId,
    this.district = district
    this.street = street,
    this.number = number,
    this.complement = complement
  }
}
