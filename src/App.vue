<template>
  <AppLayout id="app" />
</template>

<script>
import AppLayout from './layouts/App/AppLayout.vue'

export default {
  name: 'App',

  components: {
    AppLayout
  }
}
</script>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
