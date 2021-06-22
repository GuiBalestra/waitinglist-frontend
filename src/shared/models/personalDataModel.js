import GuidUtils from '@/shared/utils/guid'

export default class Form {
  constructor({
    id,
    date,
    name,
    gender,
    rg,
    cpf,
    birthDate,
    schoolTerm,
    hasDisability,
    deficiency,
    observations
  } = {}) {
    this.id = id || GuidUtils.emptyGuid,
    this.date = date,
    this.name = name,
    this.gender = gender,
    this.rg = rg,
    this.cpf = cpf,
    this.birthDate = birthDate,
    this.schoolTerm = schoolTerm,
    this.hasDisability = hasDisability,
    this.deficiency = deficiency,
    this.observations = observations
  }
}
