<template>
  <b-container>
    <PageTitle :title="title" />

    <b-form>
      <b-form-group
        id="input-group-1"
        label="Local de treinamento"
        label-for="localTraining"
        class="mb-3"
      >
        <b-form-select
          id="localTraining"
          v-model="form.localTraining"
          :options="localTrainings"
          required
        >
          <template v-slot:first>
            <b-form-select-option :value="undefined" disabled>Local de treinamento</b-form-select-option>
          </template>
        </b-form-select>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Modalidade"
        label-for="modalitity"
        class="mb-3"
      >
        <b-form-select
          id="modalitity"
          v-model="form.modalitity"
          :options="modalities"
          required
        >
          <template v-slot:first>
            <b-form-select-option :value="undefined" disabled>Modalidades</b-form-select-option>
          </template>
        </b-form-select>
      </b-form-group>
    </b-form>
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
  })
}
</script>

<style>

</style>
