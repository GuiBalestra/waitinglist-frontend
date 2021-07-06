<template>
  <b-container>
    <PageTitle :title="title" />

    <b-form>
      <b-form-group
        id="input-group-1"
        label="Nome do aluno"
        label-for="name"
        class="mb-3"
      >
        <b-form-input
          id="name"
          v-model="form.name"
          type="text"
          placeholder="Nome completo do(a) aluno(a)"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Data de nascimento"
        label-for="birthDate"
        class="mb-3"
      >
        <b-form-input
          id="birthDate"
          v-model="form.birthDate"
          type="text"
          placeholder="dd/mm/aaaa"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Gênero"
        label-for="gender"
        class="mb-3"
      >
        <b-form-select
          id="gender"
          v-model="form.gender"
          :options="genders"
          required
        >
          <template v-slot:first>
            <b-form-select-option :value="undefined" disabled>Gênero</b-form-select-option>
          </template>
        </b-form-select>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="RG do aluno"
        label-for="rg"
        class="mb-3"
      >
        <b-form-input
          id="rg"
          v-model="form.rg"
          type="text"
          placeholder="RG do(a) aluno(a)"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-5"
        label="CPF do aluno"
        label-for="cpf"
        class="mb-3"
      >
        <b-form-input
          id="cpf"
          v-model="form.cpf"
          type="text"
          placeholder="CPF do(a) aluno(a)"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-6"
        label="Período escolar"
        label-for="schoolTerm"
        class="mb-3"
      >
        <b-form-select
          id="schoolTerm"
          v-model="form.schoolTerm"
          :options="schoolTerms"
          required
        >
          <template v-slot:first>
            <b-form-select-option :value="undefined" disabled>Período escolar</b-form-select-option>
          </template>
        </b-form-select>
      </b-form-group>

      <b-form-group
        id="input-group-7"
        label="Possui alguma deficiência?"
        label-for="hasDisability"
        class="mb-3"
      >
        <b-form-select
          id="hasDisability"
          v-model="form.hasDisability"
          :options="yesNo"
          required
        >
          <template v-slot:first>
            <b-form-select-option :value="undefined" disabled>Alguma deficiência?</b-form-select-option>
          </template>
        </b-form-select>
      </b-form-group>

      <b-form-group
        id="input-group-8"
        label="Qual o CID?"
        label-for="cid"
        class="mb-3"
        v-if="showDeficiency"
      >
        <b-form-select
          id="cid"
          v-model="form.cid"
          :options="cids"
          required
        >
          <template v-slot:first>
            <b-form-select-option :value="undefined" disabled>CID</b-form-select-option>
          </template>
        </b-form-select>
      </b-form-group>

      <b-form-group
        id="input-group-9"
        label="Qual deficiência"
        label-for="disease"
        class="mb-3"
        v-if="showDeficiency"
      >
        <b-form-textarea
          id="disease"
          v-model="form.disabilityDescription"
          placeholder="Se sim, qual deficiência?"
          rows="3"
          max-rows="6"
          class="mt-3"
        ></b-form-textarea>
      </b-form-group>

      <b-form-group
        id="input-group-8"
        label="Observações"
        label-for="observations"
        class="mb-3"
      >
        <b-form-textarea
          id="observations"
          v-model="form.observations"
          placeholder="Escreva alguma observação..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
    </b-form>

    <BackNextButton
      :back="back"
      :next="next"
    />
  </b-container>
</template>

<script>
import PageTitle from '@/components/pageTitle/PageTitle.vue'
import BackNextButton from '@/components/backNextButton/BackNextButton.vue'
import PersonalDataModel from '@/shared/models/personalDataModel'

export default {
  components: {
    [PageTitle.name]: PageTitle,
    [BackNextButton.name]: BackNextButton
  },

  data: () => ({
    form: new PersonalDataModel(),
    back: 'Dashboard',
    next: 'Address',
    title: 'Dados Pessoais',
    genders: ['MASCULINO', 'FEMININO'],
    schoolTerms: ['MANHÃ', 'TARDE', 'INTEGRAL', 'SEM PERÍODO'],
    yesNo: ['SIM', 'NÃO'],
    cids: ['1 - DEFICIÊNCIA FÍSICA', '2 - DEFICIÊNCIA MENTAL']
  }),

  computed: {
    showDeficiency() {
      if (this.form.hasDisability === 'SIM') {
        return true
      }

      return false
    }
  },

  created() {
    this.clearForm()
  },

  methods: {
    clearForm() {
      this.form = new PersonalDataModel()
    }
  }
}
</script>

<style>

</style>
