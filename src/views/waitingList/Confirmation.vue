<template>
  <b-container>
    <div>
      <div>Idade: {{age}}</div>
      <div>Dados Pessoais: {{personalData}}</div>
      <div>Endereço: {{address}}</div>
      <div>Contatos: {{contacts}}</div>
      <div>Modalidade e Local: {{modalitiesLocals}}</div>
    </div>

    <BackSaveButton
      :back="back"
      @onSave="handleSave"
    />
  </b-container>
</template>

<script>
import WaitingListRepository from '@/shared/http/repositories/socialProject/waitingList'
import WaitingList from '@/shared/models/waitingList'
import BackSaveButton from '@/components/backSaveButton/BackSaveButton.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Confirmation',

  components: {
    [BackSaveButton.name]: BackSaveButton,
  },

  data: () => ({
    back: 'Contact'
  }),

  computed: {
    ...mapGetters({
      personalData: 'personalDataModule/personalData',
      age: 'personalDataModule/age',
      address: 'addressModule/address',
      contacts: 'contactModule/contacts',
      modalitiesLocals: 'modalityLocalTrainingModule/modalitiesLocals'
    })
  },

  methods: {
     handleSave() {
      this.showLoading(true)
      const waitingList = new WaitingList()

      WaitingListRepository.Create(waitingList)
        .then(res => {
          if (!res) return Promise.reject()

          this.showLoading(false)
          this.$bvToast.toast('Cadastro salvo com sucesso.', {
            title: 'Erro',
            variant: 'danger',
            autoHideDelay: 2000
          })
          Promise.resolve()
          return this.$router.replace({ name: 'SendedForm' })
        })
        .catch(() => {
          this.showLoading(false)
          this.$bvToast.toast('Erro ao salvar na lista de espera.', {
            title: 'Erro',
            variant: 'danger',
            autoHideDelay: 2000
          })
        })
    }
  }
}
</script>

<style>

</style>
