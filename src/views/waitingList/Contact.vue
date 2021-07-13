<template>
  <b-container>
    <PageTitle :title="title" />

    <b-jumbotron>
      <ValidationObserver ref="observer">
        <b-form>
          <ValidationProvider name="Tipo de Contato" rules="required" v-slot="validationContext">
            <b-form-group
              id="input-group-16"
              label="Tipo de contato"
              label-for="contactType"
              class="mb-3"
            >
              <b-form-select
                id="contactType"
                v-model="form.contactType"
                :options="contactTypes"
                :state="getValidationState(validationContext)"
                aria-describedby="input-16-live-feedback"
              >
                <template v-slot:first>
                  <b-form-select-option :value="undefined" disabled>Tipo de contato</b-form-select-option>
                </template>
              </b-form-select>
              <b-form-invalid-feedback id="input-16-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="Nome" rules="required|alpha_spaces" v-slot="validationContext">
            <b-form-group
              id="input-group-17"
              label="Contato"
              label-for="name"
              class="mb-3"
            >
              <b-form-input
                id="name"
                v-model="form.name"
                type="text"
                placeholder="Nome do contato"
                :state="getValidationState(validationContext)"
                aria-describedby="input-17-live-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="input-17-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="Telefone 1" rules="required|min:14|max:15" v-slot="validationContext">
            <b-form-group
              id="input-group-18"
              label="Fone/Cel 1"
              label-for="phone1"
              class="mb-3"
            >
              <b-form-input
                id="phone1"
                v-model="form.phone1"
                type="text"
                v-mask="['(##) ####-####', '(##) #####-####']"
                placeholder="(14) 3202-9259"
                :state="getValidationState(validationContext)"
                aria-describedby="input-18-live-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="input-18-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="Telefone 2" rules="required|min:14|max:15" v-slot="validationContext">
            <b-form-group
              id="input-group-19"
              label="Fone/Cel 2"
              label-for="phone2"
              class="mb-3"
            >
              <b-form-input
                id="phone2"
                v-model="form.phone2"
                type="text"
                v-mask="['(##) ####-####', '(##) #####-####']"
                placeholder="(14) 3202-9259"
                :state="getValidationState(validationContext)"
                aria-describedby="input-19-live-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="input-19-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="Telefone 3" rules="required|min:14|max:15" v-slot="validationContext">
            <b-form-group
              id="input-group-20"
              label="Fone/Cel 3"
              label-for="phone3"
              class="mb-3"
            >
              <b-form-input
                id="phone3"
                v-model="form.phone3"
                type="text"
                v-mask="['(##) ####-####', '(##) #####-####']"
                placeholder="(14) 3202-9259"
                :state="getValidationState(validationContext)"
                aria-describedby="input-20-live-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="input-20-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="E-mail" rules="required|email" v-slot="validationContext">
            <b-form-group
              id="input-group-21"
              label="E-mail"
              label-for="email"
              class="mb-3"
            >
              <b-form-input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="meuemail@email.com"
                :state="getValidationState(validationContext)"
                aria-describedby="input-21-live-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="input-21-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
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
import Contact from '@/shared/models/contact'

export default {
  components: {
    [PageTitle.name]: PageTitle,
    [BackNextButton.name]: BackNextButton
  },

  data: () => ({
    form: new Contact(),
    back: 'Address',
    next: 'WaitingList',
    title: 'Contato',
    contactTypes: ['MÃE', 'PAI', 'TIA', 'TIO', 'AVÓ', 'AVÔ', 'OUTROS']
  }),

  methods: {
    clearForm() {
      this.form = new Contact()

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

</style>
