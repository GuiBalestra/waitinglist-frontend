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
              <b-skeleton-wrapper :loading="loading">
                <template #loading>
                  <b-skeleton></b-skeleton>
                </template>
                <b-form-select
                  id="contactType"
                  v-model="contact.contactTypeId"
                  :options="contactTypes"
                  text-field="name"
                  value-field="id"
                  :state="getValidationState(validationContext)"
                  aria-describedby="input-16-live-feedback"
                >
                  <template v-slot:first>
                    <b-form-select-option :value="undefined" disabled>-- Selecione --</b-form-select-option>
                  </template>
                </b-form-select>
                <b-form-invalid-feedback id="input-16-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
              </b-skeleton-wrapper>
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
                v-model="contact.name"
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
                v-model="contact.phone1"
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
                v-model="contact.phone2"
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
                v-model="contact.phone3"
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
                v-model="contact.email"
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
          variant="primary"
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
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { mixin } from '@/shared/mixins'

export default {
  name: 'Contact',

  components: {
    [PageTitle.name]: PageTitle,
    [BackNextButton.name]: BackNextButton,
    [TableList.name]: TableList
  },

  mixins: [mixin],

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
        key: 'contactTypeName',
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
      name: {
        get() {
          return this.$store.state.contact.name
        },
        set(value) {
          this.$store.commit('contactModule/setName', value)
        }
      },
      contactTypeId: {
        get() {
          return this.$store.state.contact.contactTypeId
        },
        set(value) {
          this.$store.commit('contactModule/setContactTypeId', value)
        }
      },
      phone1: {
        get() {
          return this.$store.state.contact.phone1
        },
        set(value) {
          this.$store.commit('contactModule/setPhone1', value)
        }
      },
      phone2: {
        get() {
          return this.$store.state.contact.phone2
        },
        set(value) {
          this.$store.commit('contactModule/setPhone2', value)
        }
      },
      phone3: {
        get() {
          return this.$store.state.contact.phone3
        },
        set(value) {
          this.$store.commit('contactModule/setPhone3', value)
        }
      },
      email: {
        get() {
          return this.$store.state.contact.email
        },
        set(value) {
          this.$store.commit('contactModule/setEmail', value)
        }
      },

    ...mapState('contactModule', {
      contactTypes: 'contactTypes',
      contacts: 'contacts',
      contact: 'contact'
    }),

    ...mapState('commonModule', [
      'loading'
    ]),

    ...mapGetters('contactModule', {
      contacts: 'contacts',
      contact: 'contact'
    })
  },

  created() {
    this.fetchContactTypes()
  },

  methods: {
    ...mapMutations({
      clearContact: 'contactModule/clearContact',
      removeContact: 'contactModule/removeContact',
      clearContacts: 'contactModule/clearContacts',
      pushContact: 'contactModule/PUSH_CONTACT',
      clearModalitiesLocals: 'modalityLocalTrainingModule/clearModalitiesLocals'
    }),

    ...mapActions('personalDataModule', [
      'clearAge'
    ]),

    ...mapActions('contactModule', {
      fetchContactTypes: 'fetchContactTypes',
    }),

    addContact() {
      this.pushContact(this.contact)
      this.clearForm()
    },

    clearForm() {
      this.clearContact()

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
      this.clearState()
      this.clearAge()
      return next()
    }

    return next()
  }
}
</script>

<style>

</style>
