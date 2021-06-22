import GuidUtils from '@/shared/utils/guid'

export default class Contact {
  constructor({
    id,
    name,
    contactType,
    phone1,
    phone2,
    phone3,
    email
  } = {}) {
    this.id = id || GuidUtils.emptyGuid
    this.name = name,
    this.contactType = contactType,
    this.phone1 = phone1,
    this.phone2 = phone2,
    this.phone3 = phone3,
    this.email = email
  }
}
