<template>
  <b-container>
    <PageTitle :title="title" />

    <b-jumbotron>
      <ValidationObserver ref="observer">
        <b-form>
          <ValidationProvider name="Local de Treinamento" rules="required" v-slot="validationContext">
            <b-form-group
              id="input-group-22"
              label="Local de treinamento"
              label-for="localTraining"
              class="mb-3"
            >
              <b-form-select
                id="localTraining"
                v-model="form.localTrainingName"
                :options="localTrainings"
                :state="getValidationState(validationContext)"
                aria-describedby="input-22-live-feedback"
              >
                <template v-slot:first>
                  <b-form-select-option :value="undefined" disabled>-- Selecione --</b-form-select-option>
                </template>
              </b-form-select>
              <b-form-invalid-feedback id="input-22-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="Modalidade" rules="required" v-slot="validationContext">
            <b-form-group
              id="input-group-23"
              label="Modalidade"
              label-for="modalitity"
              class="mb-3"
            >
              <b-form-select
                id="modalitity"
                v-model="form.modalityName"
                :options="modalities"
                :state="getValidationState(validationContext)"
                aria-describedby="input-23-live-feedback"
              >
                <template v-slot:first>
                  <b-form-select-option :value="undefined" disabled>-- Selecione --</b-form-select-option>
                </template>
              </b-form-select>
              <b-form-invalid-feedback id="input-23-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
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
        :items="modalitiesLocals"
        :fields="fields"
        :emptyText="emptyText"
      />
    </b-jumbotron>

    <BackSaveButton
      :back="back"
      :sendedForm="sendedForm"
    />
  </b-container>
</template>

<script>
import PageTitle from '@/components/pageTitle/PageTitle.vue'
import BackSaveButton from '@/components/backSaveButton/BackSaveButton.vue'
import TableList from '@/components/tableList/TableList.vue'
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'ModalityLocalTraining',

  components: {
    [PageTitle.name]: PageTitle,
    [BackSaveButton.name]: BackSaveButton,
    [TableList.name]: TableList
  },

  data: () => ({
    back: 'Contact',
    sendedForm: 'SendedForm',
    title: 'Local e Modalidade',
    emptyText: 'Nenhuma modalidade por local de treinamento foi adicionada.',
    fields: [
      {
        key: 'modalityName',
        label: 'Modalidade'
      },
      {
        key: 'localTrainingName',
        label: 'Local de treinamento'
      },
      {
        key: 'actions',
        label: 'Ações'
      }
    ]
  }),

  computed: {
    ...mapState('modalityLocalTrainingModule', {
      form: 'modalityLocalTraining',
      localTrainings: 'localTrainings',
      modalities: 'modalities',
      modalitiesLocals: 'modalitiesLocals'
    }),

    ...mapGetters('modalityLocalTrainingModule', [
      'getModalitiesLocals'
    ])
  },

  created() {

  },

  methods: {
    ...mapMutations('modalityLocalTrainingModule', [
      'clearModalityLocalTraining'
    ]),

    clearForm() {
      this.clearModalityLocalTraining(this.form)

      this.$nextTick(() => {
        this.$refs.observer.reset()
      })
    },

    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
    },

    validateAddBtn() {
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

          this.addModalityByLocal()
        })
    },

    addModalityByLocal() {
      const modalityLocal = this.form
      let hasModalityLocal = this.modalitiesLocals.some(x =>
        x.modalityName === modalityLocal.modalityName &&
        x.localTrainingName === modalityLocal.localTrainingName
      )

      if(hasModalityLocal) {
        this.clearForm()
        return this.$bvToast.toast('Você já escolheu este local e modalidade.', {
                  title: 'Aviso',
                  variant: 'warning',
                  autoHideDelay: 2000
                })
      }

      this.modalitiesLocals.push(modalityLocal)
      this.clearForm()
    }
  },

  beforeRouteEnter(to, from, next) {
    if(from.name === 'Contact') {
      return next(vm => {
        vm.clearForm()
        vm.getModalitiesLocals
      })
    }

    return next(false)
  },

  beforeRouteLeave(to, from, next) {
    if(to.name === 'SendedForm') {
      if(!this.modalitiesLocals.length) {
        this.$refs.observer.validate()
          .then(() => {
            this.$bvToast.toast('Adicione uma modalidade por um local de treinamento.', {
              title: 'Erro',
              variant: 'danger',
              autoHideDelay: 2000
            })
          })

        return next(false)
      }

      return next()
    }

    return next()
  }
}
</script>

<style>

</style>
