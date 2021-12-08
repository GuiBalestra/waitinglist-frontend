<template>
  <b-container>
    <b-row class="inline-btn">
      <router-link :to="{ name: back }">
        <b-button variant="primary" pill>
          <span><b-icon icon="arrow-left" variant="light" /></span>
          VOLTAR
        </b-button>
      </router-link>

      <b-button variant="success" pill @click="onSave">SALVAR</b-button>
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
