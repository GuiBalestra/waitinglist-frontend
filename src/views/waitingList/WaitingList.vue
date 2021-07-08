<template>
  <b-container>
    <PageTitle :title="title" />

    <ValidationObserver ref="observer">
      <b-form>
        <ValidationProvider name="Local de Treinamento" rules="required" v-slot="validationContext">
          <b-form-group
            id="input-group-22"
            label="Local de treinamento"
            label-for="localTraining"
            class="mb-3"
          >
            <b-form-select
              id="localTraining"
              v-model="form.localTraining"
              :options="localTrainings"
              :state="getValidationState(validationContext)"
              aria-describedby="input-22-live-feedback"
            >
              <template v-slot:first>
                <b-form-select-option :value="undefined" disabled>Local de treinamento</b-form-select-option>
              </template>
            </b-form-select>
            <b-form-invalid-feedback id="input-22-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider name="Modalidade" rules="required" v-slot="validationContext">
          <b-form-group
            id="input-group-23"
            label="Modalidade"
            label-for="modalitity"
            class="mb-3"
          >
            <b-form-select
              id="modalitity"
              v-model="form.modalitity"
              :options="modalities"
              :state="getValidationState(validationContext)"
              aria-describedby="input-23-live-feedback"
            >
              <template v-slot:first>
                <b-form-select-option :value="undefined" disabled>Modalidades</b-form-select-option>
              </template>
            </b-form-select>
            <b-form-invalid-feedback id="input-23-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>
      </b-form>
    </ValidationObserver>

    <BackSaveButton
      :back="back"
      :sendedForm="sendedForm"
    />
  </b-container>
</template>

<script>
import PageTitle from '@/components/pageTitle/PageTitle.vue'
import ModalityLocalTraining from '@/shared/models/modalityLocalTraining'
import BackSaveButton from '@/components/backSaveButton/BackSaveButton.vue'

export default {
  components: {
    [PageTitle.name]: PageTitle,
    [BackSaveButton.name]: BackSaveButton
  },

  data: () => ({
    form: new ModalityLocalTraining(),
    back: 'Contact',
    sendedForm: 'SendedForm',
    title: 'Local e Modalidade',
    localTrainings: [],
    modalities: []
  }),

  methods: {
    clearForm() {
      this.form = new ModalityLocalTraining()

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
