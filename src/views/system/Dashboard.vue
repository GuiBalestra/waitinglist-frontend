<template>
  <b-container class="centralize" fluid>
    <router-link :to="{ name: 'PersonalData' }">
      <b-button>Iniciar</b-button>
    </router-link>
  </b-container>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style>
  .centralize {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>
