export default class Contact {
  constructor({
    name,
    contactTypeId,
    phone1,
    phone2,
    phone3,
    email
  } = {}) {
    this.name = name,
    this.contactTypeId = contactTypeId,
    this.phone1 = phone1,
    this.phone2 = phone2,
    this.phone3 = phone3,
    this.email = email
  }
}
