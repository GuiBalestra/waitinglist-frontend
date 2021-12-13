<template>
  <b-container>
    <b-card body-class="bg-card" class="card-border mt-5 mb-2">
      <b-row>
        <b-col>
          <b-card-header
            header="Dados Pessoais"
            header-class="c-header"
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
        </b-col>

        <b-col>
          <b-card-header
            header="Endereço"
            header-class="c-header"
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
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-card-header
            header="Contatos"
            header-class="c-header"
          >
          </b-card-header>
          <b-card-group class="mt-2" v-for="(contact, index) in contacts" :key="index">
            <b-card body-class="bg-card" class="mb-2">
              Nome do contato: {{ contact.name }}<br>
              Tipo do contato: {{ contact.contactTypeName }}<br>
              Telefone 1: {{ contact.phone1 }}<br>
              Telefone 2: {{ contact.phone2 }}<br>
              Telefone 3: {{ contact.phone3 }}<br>
              E-mail: {{ contact.email }}<br>
            </b-card>
          </b-card-group>
        </b-col>

        <b-col>
          <b-card-header
            header="Modalidade e Local"
            header-class="c-header"
          >
          </b-card-header>
          <b-card body-class="bg-card" class="mt-2">
            <ol>
              <li v-for="(modalityLocal, index) in modalitiesLocals" :key="index">
                {{ modalityLocal.localTrainingName }} / {{ modalityLocal.modalityName }}<br>
              </li>
            </ol>
          </b-card>
        </b-col>
      </b-row>
    </b-card>

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
import { mapActions, mapGetters } from 'vuex'
import { mixin } from '@/shared/mixins'

export default {
  name: 'Confirmation',

  components: {
    [BackSaveButton.name]: BackSaveButton,
  },

  mixins: [mixin],

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
    ...mapActions({
      clearAge: 'personalDataModule/clearAge'
    }),

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
  },

  beforeRouteLeave(to, from, next) {
    if(to.name === 'Dashboard' || to.name === 'Infos' || to.name === 'NotFound' || to.name === 'SendedForm') {
      this.clearState()
      this.clearAge()
      return next()
    }

    return next()
  }
}
</script>

<style>
  .c-header {
    font-weight: bold;
    text-align: center;
    border-bottom: none;
    font-family: 'Raleway', sans-serif;
  }
</style>
