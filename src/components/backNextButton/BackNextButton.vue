<template>
  <b-container>
    <b-row class="inline-btn">
      <router-link :to="{ name: back }">
        <b-button class="back-button">Voltar</b-button>
      </router-link>

      <router-link :to="{ name: next }">
        <b-button class="next-button">Próximo</b-button>
      </router-link>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'BackNextButton',

  props: {
    back: {
      type: String,
      required: true
    },
    next: {
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

  .back-button, .next-button {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
</style>