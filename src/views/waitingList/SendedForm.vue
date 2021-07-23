<template>
  <b-container>
    <PageTitle :title="title" />
  </b-container>
</template>

<script>
import PageTitle from '@/components/pageTitle/PageTitle.vue'

export default {
  name: 'SendedForm',

  components: {
    [PageTitle.name]: PageTitle
  },

  data: () => ({
    title: 'Formulário enviado'
  })
}
</script>

<style>

</style>
