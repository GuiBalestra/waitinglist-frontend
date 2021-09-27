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
                  <b-form-select-option :value="undefined" disabled>-- Selecione --</b-form-select-option>
                </template>
              </b-form-select>
              <b-form-invalid-feedback id="input-3-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="RG" rules="required|max:12" v-slot="validationContext">
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

          <ValidationProvider name="CPF" rules="required|min:14|max:14" v-slot="validationContext">
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
                placeholder="123.456.789-00"
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
                  <b-form-select-option :value="undefined" disabled>-- Selecione --</b-form-select-option>
                </template>
              </b-form-select>
              <b-form-invalid-feedback id="input-6-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="Deficiência" vid="deficiency" rules="required" v-slot="validationContext">
            <b-form-group
              id="input-group-7"
              label="Possui alguma deficiência?"
              label-for="hasDeficiency"
              class="mb-3"
            >
              <b-form-select
                id="hasDeficiency"
                v-model="form.hasDeficiency"
                :options="yesNo"
                :state="getValidationState(validationContext)"
                aria-describedby="input-7-live-feedback"
              >
                <template v-slot:first>
                  <b-form-select-option :value="undefined" disabled>-- Selecione --</b-form-select-option>
                </template>
              </b-form-select>
              <b-form-invalid-feedback id="input-7-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="Tipo da deficiência" rules="required_if:deficiency,1" v-slot="validationContext">
            <b-form-group
              id="input-group-24"
              label="Tipo de deficiência"
              label-for="deficiencyType"
              class="mb-3"
            >
              <b-form-select
                id="deficiencyType"
                v-model="form.deficiencyType"
                :options="deficiencyTypes"
                :state="getValidationState(validationContext)"
                aria-describedby="input-24-live-feedback"
              >
                <template v-slot:first>
                  <b-form-select-option :value="undefined" disabled>-- Selecione --</b-form-select-option>
                </template>
              </b-form-select>
              <b-form-invalid-feedback id="input-24-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="CID" rules="required_if:deficiency,1" v-slot="validationContext">
            <b-form-group
              id="input-group-8"
              label="Qual o CID?"
              label-for="cid"
              class="mb-3"
              v-if="showDeficiency"
            >
              <b-skeleton-wrapper :loading="loading">
                <template #loading>
                  <b-skeleton></b-skeleton>
                </template>
                <b-form-input
                  id="cid"
                  v-model="form.cid"
                  type="search"
                  placeholder="Pesquisar CID ex.: F840"
                  :state="getValidationState(validationContext)"
                  aria-describedby="input-8-live-feedback"
                  @keyup.enter="fetchCid(form.cid)"
                >
                </b-form-input>
                <b-form-invalid-feedback id="input-8-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
              </b-skeleton-wrapper>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="Descrição da deficiência" rules="required_if:deficiency,1" v-slot="validationContext">
            <b-form-group
              id="input-group-9"
              label="Qual deficiência?"
              label-for="cidDescription"
              class="mb-3"
              v-if="showDeficiency"
            >
              <b-skeleton-wrapper :loading="loading">
                <template #loading>
                  <b-skeleton></b-skeleton>
                  <b-skeleton></b-skeleton>
                  <b-skeleton></b-skeleton>
                </template>
                <b-form-textarea
                  id="cidDescription"
                  v-model="form.cidDescription"
                  placeholder="Descrição do CID"
                  rows="3"
                  max-rows="6"
                  class="mt-3"
                  :state="getValidationState(validationContext)"
                  aria-describedby="input-9-live-feedback"
                  disabled
                ></b-form-textarea>
                <b-form-invalid-feedback id="input-9-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
              </b-skeleton-wrapper>
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
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
import { mixin } from '@/shared/mixins'

export default {
  name: 'PersonalTraining',

  components: {
    [PageTitle.name]: PageTitle,
    [BackNextButton.name]: BackNextButton
  },

  mixins: [mixin],

  data: () => ({
    back: 'ModalityLocalTraining',
    next: 'Address',
    title: 'Dados Pessoais'
  }),

  computed: {
    ...mapState('personalDataModule', {
      form: 'personalData',
      genders: 'genders',
      schoolTerms: 'schoolTerms',
      yesNo: 'yesNo',
      deficiencyTypes: 'deficiencyTypes'
    }),

    ...mapState('commonModule', [
      'loading'
    ]),

    ...mapGetters('personalDataModule', [
      'personalData'
    ]),

    showDeficiency() {
      if (this.form.hasDeficiency === 1) {
        return true
      }

      return false
    }
  },

  methods: {
    ...mapMutations('personalDataModule', [
      'clearPersonalData'
    ]),

    ...mapActions('personalDataModule', {
      clearAge: 'clearAge',

      fetchCid: (dispatch, cidCode) => {
        if (!cidCode) return

        return dispatch('fetchCid', cidCode)
      }
    }),

    clearForm() {
      this.clearPersonalData()

      this.$nextTick(() => {
        this.$refs.observer.reset()
      })
    },

    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
    }
  },

  beforeRouteEnter(to, from, next) {
    if(from.name === 'ModalityLocalTraining') {
      return next(vm => {
        vm.clearForm()
      })
    }

    if(from.name === 'Address') {
      return next(vm => vm.getPersonalData)
    }

    return next(false)
  },

  beforeRouteLeave(to, from, next) {
    if(to.name === 'Address') {
      this.$refs.observer.validate()
        .then(valid => {
          if(valid) return next()

          this.$bvToast.toast('Preencha todos os campos para avançar.', {
            title: 'Erro',
            variant: 'danger',
            autoHideDelay: 2000
          })
        })

      return next(false)
    }

    if(to.name === 'Dashboard' || to.name === 'Infos' || to.name === 'NotFound') {
      this.clearState()
      this.clearAge()
      return next()
    }

    return next()
  },

  watch: {
    'form.hasDeficiency'(val) {
      if(val === 0) {
        this.form.cid = null
        this.form.cidDescription = null

        this.$nextTick(() => {
          this.$refs.observer.reset()
        })
      }
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
