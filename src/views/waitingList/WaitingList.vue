<template>
  <b-container>
    <b-form>

    </b-form>
    <BackSaveButton 
      :back="back"
    />
  </b-container>
</template>

<script>
import BackSaveButton from '@/components/backSaveButton/BackSaveButton.vue'

export default {
  components: {
    [BackSaveButton.name]: BackSaveButton
  },

  data: () => ({
    back: 'Contact'
  })
}
</script>

<style>

</style>
