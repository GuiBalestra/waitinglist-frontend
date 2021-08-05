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
import { mapActions } from 'vuex'
import { mixin } from '@/shared/mixins'

export default {
  name: 'SendedForm',

  components: {
    [PageTitle.name]: PageTitle
  },

  mixins: [mixin],

  data: () => ({
    title: 'Formulário enviado'
  }),

  methods: {
    ...mapActions('personalDataModule', {
      clearAge: 'clearAge'
    })
  },

  beforeRouteEnter(to, from, next) {
    if(from.name === 'ModalityLocalTraining') {
      return next(vm => {
        vm.clearState()
        vm.clearAge()
      })
    }

    return next(false)
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
