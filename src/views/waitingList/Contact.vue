<template>
  <b-container>
    <PageTitle :title="title" />

    <b-form>
      <b-form-group
        id="input-group-1"
        label="Tipo de contato"
        label-for="contactType"
        class="mb-3"
      >
        <b-form-select
          id="contactType"
          v-model="form.contactType"
          :options="contactTypes"
          required
        >
          <template v-slot:first>
            <b-form-select-option :value="undefined" disabled>Tipo de contato</b-form-select-option>
          </template>
        </b-form-select>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Contato"
        label-for="name"
        class="mb-3"
      >
        <b-form-input
          id="name"
          v-model="form.name"
          type="text"
          placeholder="Nome do contato"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Telefone 1"
        label-for="phone1"
        class="mb-3"
      >
        <b-form-input
          id="phone1"
          v-model="form.phone1"
          type="text"
          placeholder="Telefone 1"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="Telefone 2"
        label-for="phone2"
        class="mb-3"
      >
        <b-form-input
          id="phone2"
          v-model="form.phone2"
          type="text"
          placeholder="Telefone 2"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-5"
        label="Telefone 3"
        label-for="phone3"
        class="mb-3"
      >
        <b-form-input
          id="phone3"
          v-model="form.phone3"
          type="text"
          placeholder="Telefone 3"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-5"
        label="E-mail"
        label-for="email"
        class="mb-3"
      >
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="E-mail"
          required
        ></b-form-input>
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
  })
}
</script>

<style>

</style>
