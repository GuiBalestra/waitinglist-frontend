export default class Address {
  constructor({
    city,
    cityId,
    zipCode,
    district,
    street,
    number,
    complement
  } = {}) {
    this.zipCode = zipCode,
    this.city = city,
    this.cityId = cityId,
    this.district = district
    this.street = street,
    this.number = number,
    this.complement = complement
  }
}
