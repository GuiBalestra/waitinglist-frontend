<template>
  <b-container>
    <PageTitle :title="title" />

    <b-jumbotron>
      <ValidationObserver ref="observer">
        <b-form>
          <ValidationProvider name="Tipo do Contato" rules="required" v-slot="validationContext">
            <b-form-group
              id="input-group-16"
              label="Tipo do contato"
              label-for="contactType"
              class="mb-3"
            >
              <b-form-select
                id="contactType"
                v-model="form.contactType"
                :options="contactTypes"
                :state="getValidationState(validationContext)"
                aria-describedby="input-16-live-feedback"
              >
                <template v-slot:first>
                  <b-form-select-option :value="undefined" disabled>-- Selecione --</b-form-select-option>
                </template>
              </b-form-select>
              <b-form-invalid-feedback id="input-16-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="Nome" rules="required|alpha_spaces" v-slot="validationContext">
            <b-form-group
              id="input-group-17"
              label="Contato"
              label-for="name"
              class="mb-3"
            >
              <b-form-input
                id="name"
                v-model="form.name"
                type="text"
                placeholder="Nome do contato"
                :state="getValidationState(validationContext)"
                aria-describedby="input-17-live-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="input-17-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="Telefone 1" rules="required|min:14|max:15" v-slot="validationContext">
            <b-form-group
              id="input-group-18"
              label="Fone/Cel 1"
              label-for="phone1"
              class="mb-3"
            >
              <b-form-input
                id="phone1"
                v-model="form.phone1"
                type="text"
                v-mask="['(##) ####-####', '(##) #####-####']"
                placeholder="(14) 3202-9259"
                :state="getValidationState(validationContext)"
                aria-describedby="input-18-live-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="input-18-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="Telefone 2" rules="required|min:14|max:15" v-slot="validationContext">
            <b-form-group
              id="input-group-19"
              label="Fone/Cel 2"
              label-for="phone2"
              class="mb-3"
            >
              <b-form-input
                id="phone2"
                v-model="form.phone2"
                type="text"
                v-mask="['(##) ####-####', '(##) #####-####']"
                placeholder="(14) 3202-9259"
                :state="getValidationState(validationContext)"
                aria-describedby="input-19-live-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="input-19-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="Telefone 3" rules="required|min:14|max:15" v-slot="validationContext">
            <b-form-group
              id="input-group-20"
              label="Fone/Cel 3"
              label-for="phone3"
              class="mb-3"
            >
              <b-form-input
                id="phone3"
                v-model="form.phone3"
                type="text"
                v-mask="['(##) ####-####', '(##) #####-####']"
                placeholder="(14) 3202-9259"
                :state="getValidationState(validationContext)"
                aria-describedby="input-20-live-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="input-20-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="E-mail" rules="required|email" v-slot="validationContext">
            <b-form-group
              id="input-group-21"
              label="E-mail"
              label-for="email"
              class="mb-3"
            >
              <b-form-input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="meuemail@email.com"
                :state="getValidationState(validationContext)"
                aria-describedby="input-21-live-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="input-21-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
        </b-form>
      </ValidationObserver>
      <div class="d-flex justify-content-end">
        <b-button
          variant="success"
          class="mt-3"
          @click="validateAddBtn"
        >
          Adicionar
        </b-button>
      </div>

      <TableList
        :items="contacts"
        :fields="fields"
        :emptyText="emptyText"
        @remove="removeContactByIndex"
      />
    </b-jumbotron>

    <BackNextButton
      :back="back"
      :next="next"
    />
  </b-container>
</template>

<script>
import PageTitle from '@/components/pageTitle/PageTitle.vue'
import BackNextButton from '@/components/backNextButton/BackNextButton.vue'
import TableList from '@/components/tableList/TableList.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Contact',

  components: {
    [PageTitle.name]: PageTitle,
    [BackNextButton.name]: BackNextButton,
    [TableList.name]: TableList
  },

  data: () => ({
    back: 'Address',
    next: 'ModalityLocalTraining',
    title: 'Contato',
    emptyText: 'Nenhum contato foi adicionado.',
    fields: [
      {
        key: 'name',
        label: 'Nome'
      },
      {
        key: 'contactType',
        label: 'Tipo do Contato'
      },
      {
        key: 'phone1',
        label: 'Fone1'
      },
      {
        key: 'phone2',
        label: 'Fone2'
      },
      {
        key: 'phone3',
        label: 'Fone3'
      },
      {
        key: 'email',
        label: 'E-mail'
      },
      {
        key: 'actions',
        label: 'Ações'
      }
    ]
  }),

  computed: {
    ...mapState('contactModule', {
      form: 'contact',
      contactTypes: 'contactTypes',
      contacts: 'contacts'
    })
  },

  created() {

  },

  methods: {
    ...mapMutations({
      clearContact: 'contactModule/clearContact',
      removeContact: 'contactModule/removeContact',
      clearContacts: 'contactModule/clearContacts',
      clearModalitiesLocals: 'modalityLocalTrainingModule/clearModalitiesLocals'
    }),

    clearForm() {
      this.clearContact(this.form)

      this.$nextTick(() => {
        this.$refs.observer.reset()
      })
    },

    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
    },

    validateAddBtn() {
      if(this.contacts.length >= 2) {
        this.$bvToast.toast('Cadastro limitado a dois contatos.', {
          title: 'Aviso',
          variant: 'warning',
          autoHideDelay: 2000
        })

        this.clearForm()
        return
      }

      this.$refs.observer.validate()
        .then(valid => {
          if(!valid) {
            this.$bvToast.toast('Preencha todos os campos para adicionar um contato.', {
              title: 'Erro',
              variant: 'danger',
              autoHideDelay: 2000
            })

            return
          }

          this.addContact()
        })
    },

    addContact() {
      const contact = this.form
      this.contacts.push(contact)
      this.clearForm()
    },

    removeContactByIndex(index) {
      this.removeContact(index)
    }
  },

  beforeRouteEnter(to, from, next) {
    if(from.name === 'Address') {
      return next(vm => vm.clearForm())
    }

    if(from.name === 'ModalityLocalTraining') {
      return next(vm => vm.contacts)
    }

    return next(false)
  },

  beforeRouteLeave(to, from, next) {
    if(to.name === 'ModalityLocalTraining') {

      if(!this.contacts.length) {
        this.$refs.observer.validate()
          .then(() => {
            this.$bvToast.toast('Adicione um contato.', {
              title: 'Aviso',
              variant: 'warning',
              autoHideDelay: 2000
            })
          })

        return next(false)
      }
    }

    if(to.name === 'Dashboard' || to.name === 'Infos' || to.name === 'NotFound') {
      this.clearContacts()
      this.clearModalitiesLocals()
      return next()
    }

    return next()
  }
}
</script>

<style>

</style>
