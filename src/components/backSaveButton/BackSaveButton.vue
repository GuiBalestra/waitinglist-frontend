<template>
  <b-container>
    <b-row class="inline-btn">
      <router-link :to="{ name: back }">
        <b-button>Voltar</b-button>
      </router-link>

      <router-link :to="{ name: sendedForm }">
        <b-button>Enviar</b-button>
      </router-link>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'BackSaveButton',

  props: {
    back: {
      type: String,
      required: true
    },

    sendedForm: {
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
</style>