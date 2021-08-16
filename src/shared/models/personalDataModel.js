import GuidUtils from '@/shared/utils/guid'

export default class Form {
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
    observations
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
    this.observations = observations
  }
}
