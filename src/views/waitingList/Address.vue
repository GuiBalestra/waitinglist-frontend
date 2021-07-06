<template>
  <b-container>
    <PageTitle :title="title" />

    <b-form>
      <b-form-group
        id="input-group-1"
        label="CEP"
        label-for="cep"
        class="mb-3"
      >
        <b-form-input
          id="cep"
          v-model="form.cep"
          type="text"
          placeholder="CEP"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Cidade"
        label-for="city"
        class="mb-3"
      >
        <b-form-input
          id="city"
          v-model="form.city"
          type="text"
          placeholder="Cidade"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Bairro"
        label-for="district"
        class="mb-3"
      >
        <b-form-input
          id="district"
          v-model="form.district"
          type="text"
          placeholder="Bairro"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="Rua"
        label-for="road"
        class="mb-3"
      >
        <b-form-input
          id="road"
          v-model="form.road"
          type="text"
          placeholder="Rua"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-5"
        label="Número"
        label-for="number"
        class="mb-3"
      >
        <b-form-input
          id="number"
          v-model="form.number"
          type="text"
          placeholder="Número"
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
import BackNextButton from '@/components/backNextButton/BackNextButton.vue'
import PageTitle from '@/components/pageTitle/PageTitle.vue'
import Address from '@/shared/models/address'

export default {
  components: {
    [BackNextButton.name]: BackNextButton,
    [PageTitle.name]: PageTitle
  },

  data: () => ({
    form: new Address(),
    back: 'PersonalData',
    next: 'Contact',
    title: 'Endereço'
  })
}
</script>

<style>

</style>
