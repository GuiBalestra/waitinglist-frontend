<template>
  <b-container>
    <h1 class="page-title">{{ title }}</h1>
  </b-container>
</template>

<script>
export default {
  name: 'PageTitle',

  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
  .page-title {
    display: flex;
    justify-content: center;
    color: var(--dark);
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    margin-bottom: 50px;
  }
</style>
