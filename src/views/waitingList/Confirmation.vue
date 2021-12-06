<template>
  <b-container>
    <b-card-group>
      <b-card>
        <b-card-header
          header="Dados Pessoais"
          header-class="bold-header"
        >
        </b-card-header>
        <b-card-body>
          Nome: {{ personalData.name }}<br>
          Idade: {{ age }}<br>
          Gênero: {{ personalData.gender }}<br>
          RG: {{ personalData.rg }}<br>
          CPF: {{ personalData.cpf }}<br>
          Período Escolar: {{ personalData.schoolTerm }}<br>
          Observações: {{ personalData.observations }}<br>
        </b-card-body>
      </b-card>

      <b-card>
        <b-card-header
          header="Endereço"
          header-class="bold-header"
        >
        </b-card-header>
        <b-card-body>
          CEP: {{ address.zipCode }}<br>
          Cidade: {{ address.city }}<br>
          Bairro: {{ address.district }}<br>
          Rua: {{ address.street }}<br>
          Número: {{ address.number }}<br>
          Complemento: {{ address.complement }}<br>
        </b-card-body>
      </b-card>
    </b-card-group>

    <b-card-group>
      <b-card>
        <b-card-header
          header="Contatos"
          header-class="bold-header"
        >
        </b-card-header>
        <b-card-group class="mt-2" v-for="(contact, index) in contacts" :key="index">
          <b-card class="mb-2">
            Nome do contato: {{ contact.name }}<br>
            Tipo do contato: {{ contact.contactTypeName }}<br>
            Telefone 1: {{ contact.phone1 }}<br>
            Telefone 2: {{ contact.phone2 }}<br>
            Telefone 3: {{ contact.phone3 }}<br>
            E-mail: {{ contact.email }}<br>
          </b-card>
        </b-card-group>
      </b-card>

      <b-card>
        <b-card-header
          header="Modalidade e Local"
          header-class="bold-header"
        >
        </b-card-header>
        <b-card-body v-for="(modalityLocal, index) in modalitiesLocals" :key="index">
          {{ `${index + 1} -` }} {{ modalityLocal.localTrainingName }} / {{ modalityLocal.modalityName }}<br>
        </b-card-body>
      </b-card>
    </b-card-group>

    <BackSaveButton
      :back="back"
      @onSave="handleSave"
      class="mt-3"
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
      //this.showLoading(true)
      const waitingList = new WaitingList()

      WaitingListRepository.Create(waitingList)
        .then(res => {
          if (!res) return Promise.reject()

          //this.showLoading(false)
          this.$bvToast.toast('Cadastro salvo com sucesso.', {
            title: 'Erro',
            variant: 'danger',
            autoHideDelay: 2000
          })
          Promise.resolve()
          return this.$router.replace({ name: 'SendedForm' })
        })
        .catch(() => {
          //this.showLoading(false)
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
  .bold-header {
    font-weight: bold;
    text-align: center;
  }
</style>
