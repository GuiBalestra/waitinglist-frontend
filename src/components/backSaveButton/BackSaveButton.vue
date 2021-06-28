<template>
  <div>
    <b-row class="inline-btn">
      <router-link :to="{ name: back}">
        <b-button class="back-button">Voltar</b-button>
      </router-link>

      <b-button class="save-button">Enviar</b-button>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'BackSaveButton',

  props: {
    back: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
  .inline-btn {
    justify-content: space-between;
  }

  .back-button, .save-button {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
</style>