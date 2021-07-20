<template>
  <b-container>
    <form-wizard
      @on-complete="onComplete"
      ref="wizard"
      color="#33ACFF"
      error-color="#FF6B33"
      :title="title"
      :subtitle="subtitle"
      :back-button-text="backButtonText"
      :next-button-text="nextButtonText"
      finish-button-text="Finalizar"
    >
      <tab-content title="Dados Pessoais" icon="ti-user">
        <PersonalData />
      </tab-content>

      <tab-content title="Endereço" icon="ti-home">
        <Address />
      </tab-content>

      <tab-content title="Contato" icon="ti-agenda">
        <Contact />
      </tab-content>

      <tab-content title="Local e Modalidade" icon="ti-check-box">
        <ModalityLocalTraining />
      </tab-content>
    </form-wizard>
  </b-container>
</template>

<script>
import PersonalData from '@/views/waitingList/PersonalData.vue'
import Address from '@/views/waitingList/Address.vue'
import Contact from '@/views/waitingList/Contact.vue'
import ModalityLocalTraining from '@/views/waitingList/ModalityLocalTraining.vue'

export default {
  props: {
    title: {
      type: String,
      default: 'LISTA DE ESPERA WEB'
    },
    subtitle: {
      type: String,
      default: null
    },
    backButtonText: {
      type: String,
      default: 'Voltar'
    },
    nextButtonText: {
      type: String,
      default: 'Próximo'
    },
    finishButtonText: {
      type: String,
      default: 'Finalizar'
    }
  },

  components: {
    PersonalData,
    Address,
    Contact,
    ModalityLocalTraining
  },

  methods: {
    onComplete() {
      alert('Requisição pra salvar')
    }
  }
}
</script>

<style>
  .wizard-title, .stepTitle {
    color: var(--light) !important;
  }

  .stepTitle.active {
    color: #33AACF !important;
  }
</style>
