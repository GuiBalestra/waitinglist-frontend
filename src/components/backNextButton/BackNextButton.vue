<template>
  <b-container>
    <b-row :class="classButton">
      <router-link :to="{ name: back }" v-if="showBackBtn">
        <b-button variant="primary" pill class="back-button">
          <span><b-icon icon="arrow-left" variant="light" /></span>
          VOLTAR
        </b-button>
      </router-link>

      <router-link :to="{ name: next }">
        <b-button variant="primary" pill class="next-button">
          AVANÇAR
          <span><b-icon icon="arrow-right" variant="light" /></span>
        </b-button>
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
