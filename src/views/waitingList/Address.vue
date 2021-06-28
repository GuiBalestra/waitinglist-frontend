<template>
  <b-container>
    <b-form>
      <b-form-group
        id="input-group-1"
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
    </b-form>
    <BackNextButton 
      :back="back"
      :next="next"
    />
  </b-container>
</template>

<script>
import BackNextButton from '@/components/backNextButton/BackNextButton.vue'
import Address from '@/shared/models/address'
export default {
  components: {
    [BackNextButton.name]: BackNextButton
  },

  data: () => ({
    form: new Address(),
    back: 'PersonalData',
    next: 'Contact'
  })
}
</script>

<style>

</style>
