export default class Form {
  constructor({
    name,
    gender,
    rg,
    cpf,
    birthDate,
    schoolTerm,
    hasDeficiency,
    deficiencyType,
    cid,
    cidDescription,
    observations
  } = {}) {
    this.name = name,
    this.gender = gender,
    this.rg = rg,
    this.cpf = cpf,
    this.birthDate = birthDate,
    this.schoolTerm = schoolTerm,
    this.hasDeficiency = hasDeficiency,
    this.deficiencyType = deficiencyType,
    this.cid = cid,
    this.cidDescription = cidDescription,
    this.observations = observations
  }
}
