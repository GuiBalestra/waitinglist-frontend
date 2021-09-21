<template>
  <b-container>
    <b-row class="inline-btn">
      <router-link :to="{ name: back }">
        <b-button>Voltar</b-button>
      </router-link>

      <b-button @click="onSave">Salvar</b-button>
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
    }
  },

  methods: {
    onSave() {
      this.$emit('onSave')
    }
  }
}
</script>

<style>
  .inline-btn {
    justify-content: space-between;
  }
</style>
