<template>
  <b-container>
    <b-row :class="classButton">
      <router-link :to="{ name: back }" v-if="showBackBtn">
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
  },

  computed: {
    classButton() {
      if(this.back === 'Dashboard') return 'one-btn'

      return 'two-inline-btn'
    },

    showBackBtn() {
      if(this.back === 'Dashboard') return false

      return true
    }
  }
}
</script>

<style>
  .one-btn {
    justify-content: flex-end;
  }

  .two-inline-btn {
    justify-content: space-between;
  }
</style>
