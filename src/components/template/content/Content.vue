<template>
  <b-container fluid class="content">
    <router-view />
  </b-container>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style>
  .content {
    grid-area: content;
    margin: 30px 0;
  }
</style>
