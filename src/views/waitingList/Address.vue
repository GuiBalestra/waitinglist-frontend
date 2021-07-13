<template>
  <b-container>
    <PageTitle :title="title" />

    <b-jumbotron>
      <ValidationObserver ref="observer">
        <b-form>
          <ValidationProvider name="CEP" vid="cep" rules="required|min:9|max:9" v-slot="validationContext">
            <b-form-group
              id="input-group-11"
              label="CEP"
              label-for="cep"
              class="mb-3"
            >
              <b-form-input
                id="cep"
                v-model="form.cep"
                type="text"
                v-mask="['#####-###']"
                placeholder="17054-686"
                :state="getValidationState(validationContext)"
                aria-describedby="input-11-live-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="input-11-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="Cidade" rules="required|alpha_spaces" v-slot="validationContext">
            <b-form-group
              id="input-group-12"
              label="Cidade"
              label-for="city"
              class="mb-3"
            >
              <b-form-input
                id="city"
                v-model="form.city"
                type="text"
                placeholder="Bauru"
                :state="getValidationState(validationContext)"
                aria-describedby="input-12-live-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="input-12-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="Bairro" rules="required|alpha_spaces" v-slot="validationContext">
            <b-form-group
              id="input-group-13"
              label="Bairro"
              label-for="district"
              class="mb-3"
            >
              <b-form-input
                id="district"
                v-model="form.district"
                type="text"
                placeholder="Jardim Solange"
                :state="getValidationState(validationContext)"
                aria-describedby="input-13-live-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="input-13-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="Rua" rules="required|alpha_spaces" v-slot=" validationContext">
            <b-form-group
              id="input-group-14"
              label="Rua"
              label-for="road"
              class="mb-3"
            >
              <b-form-input
                id="road"
                v-model="form.road"
                type="text"
                placeholder="Fábio Geraldo"
                :state="getValidationState(validationContext)"
                aria-describedby="input-14-live-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="input-14-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="Número" rules="required" v-slot="validationContext">
            <b-form-group
              id="input-group-15"
              label="Número"
              label-for="number"
              class="mb-3"
            >
              <b-form-input
                id="number"
                v-model="form.number"
                type="text"
                placeholder="2-12"
                :state="getValidationState(validationContext)"
                aria-describedby="input-15-live-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="input-15-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
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
import BackNextButton from '@/components/backNextButton/BackNextButton.vue'
import PageTitle from '@/components/pageTitle/PageTitle.vue'
import { mapState } from 'vuex'

export default {
  components: {
    [BackNextButton.name]: BackNextButton,
    [PageTitle.name]: PageTitle
  },

  data: () => ({
    back: 'PersonalData',
    next: 'Contact',
    title: 'Endereço'
  }),

  computed: {
    ...mapState({
      form: 'address',
      cep: 'cep'
    })
  },

  methods: {
    clearForm() {
      // this.form = new Address()

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
