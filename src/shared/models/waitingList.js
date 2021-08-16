import GuidUtils from '@/shared/utils/guid'

export default class WaitingList {
  constructor({
    id,
    name,
    gender,
    rg,
    cpf,
    birthDate,
    schoolTerm,
    hasDeficiency,
    cid,
    cidDescription,
    observations,
    zipCode,
    city,
    cityId,
    district,
    street,
    number,
    complement,
    contacts,
    modalitiesLocals

  } = {}) {
    this.id = id || GuidUtils.emptyGuid,
    this.name = name,
    this.gender = gender,
    this.rg = rg,
    this.cpf = cpf,
    this.birthDate = birthDate,
    this.schoolTerm = schoolTerm,
    this.hasDeficiency = hasDeficiency,
    this.cid = cid,
    this.cidDescription = cidDescription,
    this.observations = observations,
    this.zipCode = zipCode,
    this.city = city,
    this.cityId = cityId,
    this.district = district,
    this.street = street,
    this.number = number,
    this.complement = complement,
    this.contacts = contacts,
    this.modalitiesLocals = modalitiesLocals
  }
}
