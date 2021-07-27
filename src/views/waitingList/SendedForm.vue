<template>
  <b-container>
    <PageTitle :title="title" />
  </b-container>
</template>

<script>
import PageTitle from '@/components/pageTitle/PageTitle.vue'
import { mapMutations } from 'vuex'

export default {
  name: 'SendedForm',

  components: {
    [PageTitle.name]: PageTitle
  },

  data: () => ({
    title: 'Formulário enviado'
  }),

  methods: {
    ...mapMutations({
      clearContacts: 'contactModule/clearContacts',
      clearModalitiesLocals: 'modalityLocalTrainingModule/clearModalitiesLocals'
    })
  },

  beforeRouteEnter(to, from, next) {
    if(from.name === 'ModalityLocalTraining') {
      next(vm => {
        vm.clearContacts()
        vm.clearModalitiesLocals()
        return
      })
    }

    next(false)
  }
}
</script>

<style>

</style>
