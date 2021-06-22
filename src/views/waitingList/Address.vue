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
  </b-container>
</template>

<script>
import Address from '@/shared/models/address'
export default {
  data: () => ({
    form: new Address()
  })
}
</script>

<style>

</style>
