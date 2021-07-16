<template>
  <b-container>
    <PageTitle :title="title" />

    <b-jumbotron>
      <ValidationObserver ref="observer">
        <b-form>
          <ValidationProvider name="Nome" rules="required|alpha_spaces" v-slot="validationContext">
            <b-form-group
              id="input-group-1"
              label="Nome da criança"
              label-for="name"
              class="mb-3"
            >
              <b-form-input
                id="name"
                v-model="form.name"
                type="text"
                placeholder="Ex.: José da Silva"
                :state="getValidationState(validationContext)"
                aria-describedby="input-1-live-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="input-1-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="Data de Nascimento" rules="required" v-slot="validationContext">
            <b-form-group
              id="input-group-2"
              label="Data de nascimento"
              label-for="birthDate"
              class="mb-3"
            >
              <b-form-input
                id="birthDate"
                v-model="form.birthDate"
                type="date"
                placeholder="dd/mm/aaaa"
                :state="getValidationState(validationContext)"
                aria-describedby="input-2-live-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="input-2-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="Gênero" rules="required" v-slot="validationContext">
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
                :state="getValidationState(validationContext)"
                aria-describedby="input-3-live-feedback"
              >
                <template v-slot:first>
                  <b-form-select-option :value="undefined" disabled>Gênero</b-form-select-option>
                </template>
              </b-form-select>
              <b-form-invalid-feedback id="input-3-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="RG" rules="required|alpha_num|max:9" v-slot="validationContext">
            <b-form-group
              id="input-group-4"
              label="RG da criança"
              label-for="rg"
              class="mb-3"
            >
              <b-form-input
                id="rg"
                v-model="form.rg"
                type="text"
                placeholder="RG da criança"
                :state="getValidationState(validationContext)"
                aria-describedby="input-4-live-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="input-4-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="CPF" rules="required|min:13|max:14" v-slot="validationContext">
            <b-form-group
              id="input-group-5"
              label="CPF da criança"
              label-for="cpf"
              class="mb-3"
            >
              <b-form-input
                id="cpf"
                v-model="form.cpf"
                type="text"
                v-mask="['###.###.###-##']"
                placeholder="###.###.###-##"
                :state="getValidationState(validationContext)"
                aria-describedby="input-5-live-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="input-5-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="Período Escolar" rules="required" v-slot="validationContext">
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
                :state="getValidationState(validationContext)"
                aria-describedby="input-6-live-feedback"
              >
                <template v-slot:first>
                  <b-form-select-option :value="undefined" disabled>Período escolar</b-form-select-option>
                </template>
              </b-form-select>
              <b-form-invalid-feedback id="input-6-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="Deficiência" vid="disability" rules="required" v-slot="validationContext">
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
                :state="getValidationState(validationContext)"
                aria-describedby="input-7-live-feedback"
              >
                <template v-slot:first>
                  <b-form-select-option :value="undefined" disabled>Alguma deficiência?</b-form-select-option>
                </template>
              </b-form-select>
              <b-form-invalid-feedback id="input-7-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="CID" rules="required_if:disability,SIM" v-slot="validationContext">
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
                :state="getValidationState(validationContext)"
                aria-describedby="input-8-live-feedback"
              >
                <template v-slot:first>
                  <b-form-select-option :value="undefined" disabled>CID</b-form-select-option>
                </template>
              </b-form-select>
              <b-form-invalid-feedback id="input-8-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="Descrição da deficiência" rules="required_if:disability,SIM" v-slot="validationContext">
            <b-form-group
              id="input-group-9"
              label="Qual deficiência?"
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
                :state="getValidationState(validationContext)"
                aria-describedby="input-9-live-feedback"
              ></b-form-textarea>
              <b-form-invalid-feedback id="input-9-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="Observações" rules="required" v-slot="validationContext">
            <b-form-group
              id="input-group-10"
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
                :state="getValidationState(validationContext)"
                aria-describedby="input-10-live-feedback"
              ></b-form-textarea>
              <b-form-invalid-feedback id="input-10-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
        </b-form>
      </ValidationObserver>
    </b-jumbotron>

    <BackNextButton
      :back="back"
      :next="next"
    />
  </b-container>
</template>

<script>
import PageTitle from '@/components/pageTitle/PageTitle.vue'
import BackNextButton from '@/components/backNextButton/BackNextButton.vue'
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  components: {
    [PageTitle.name]: PageTitle,
    [BackNextButton.name]: BackNextButton
  },

  data: () => ({
    back: 'Dashboard',
    next: 'Address',
    title: 'Dados Pessoais'
  }),

  computed: {
    ...mapState('personalDataModule', {
      form: 'personalData',
      genders: 'genders',
      schoolTerms: 'schoolTerms',
      yesNo: 'yesNo',
      cids: 'cids'
    }),

    ...mapGetters('personalDataModule', ['getPersonalData']),

    showDeficiency() {
      if (this.form.hasDisability === 1) {
        return true
      }

      return false
    }
  },

  created() {
    this.clearForm()
  },

  methods: {
    ...mapMutations('personalDataModule', [
      'clearPersonalData'
    ]),

    clearForm() {
      this.clearPersonalData(this.form)

      this.$nextTick(() => {
        this.$refs.observer.reset()
      })
    },

    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
    }
  }
}
</script>

<style>
  label::after {
    content: ' *';
    color: red;
  }
</style>
