<template>
  <b-container>
    <PageTitle :title="title" />

    <div class="centralize-items mt-5">
      <div class="paragraph">
        <div>Cadastro na lista de espera efetuado com sucesso!</div>
        <div>Quando surgir a vaga desejada, notificaremos pelo telefone de contato.</div>
      </div>

      <router-link :to="{ name: 'Dashboard' }">
        <b-button variant="secondary">Voltar para o início</b-button>
      </router-link>
    </div>
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

<style lang="scss">
  .centralize-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 300px;

    .paragraph {
      color: var(--light-low);
    }
  }
</style>
