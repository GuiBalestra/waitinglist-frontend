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
              <b-skeleton-wrapper :loading="loading">
                <template #loading>
                  <b-skeleton></b-skeleton>
                </template>
                <b-form-select
                  id="localTraining"
                  v-model="modalityLocalTraining.localTrainingId"
                  :options="localTrainings"
                  text-field="localTrainingName"
                  value-field="localTrainingId"
                  :state="getValidationState(validationContext)"
                  aria-describedby="input-22-live-feedback"
                  @input="onSelectLocalTraining(modalityLocalTraining.localTrainingName)"
                >
                  <template v-slot:first>
                    <b-form-select-option :value="undefined" disabled>-- Selecione --</b-form-select-option>
                  </template>
                </b-form-select>
                <b-form-invalid-feedback id="input-22-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
              </b-skeleton-wrapper>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="Modalidade" rules="required" v-slot="validationContext">
            <b-form-group
              id="input-group-23"
              label="Modalidade"
              label-for="modalitity"
              class="mb-3"
            >
              <b-skeleton-wrapper :loading="loading">
                <template #loading>
                  <b-skeleton></b-skeleton>
                </template>
                <b-form-select
                  id="modalitity"
                  v-model="modalityLocalTraining.modalityId"
                  :options="modalities"
                  text-field="modalityName"
                  value-field="modalityId"
                  :state="getValidationState(validationContext)"
                  aria-describedby="input-23-live-feedback"
                  @input="onSelectModality(modalityLocalTraining.modalityName)"
                >
                  <template v-slot:first>
                    <b-form-select-option :value="undefined" disabled>-- Selecione --</b-form-select-option>
                  </template>
                </b-form-select>
                <b-form-invalid-feedback id="input-23-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
              </b-skeleton-wrapper>
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
        :items="modalitiesLocals"
        :fields="fields"
        :emptyText="emptyText"
        @remove="removeModalityLocalTraining"
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
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
import { mixin } from '@/shared/mixins'

export default {
  name: 'ModalityLocalTraining',

  components: {
    [PageTitle.name]: PageTitle,
    [TableList.name]: TableList,
    [BackNextButton.name]: BackNextButton
  },

  mixins: [mixin],

  data: () => ({
    back: 'Dashboard',
    next: 'PersonalData',
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
    modalityId: {
      get() {
        return this.$store.state.modalityLocalTraining.modalityId
      },
      set(value) {
        return this.$store.commit('setModality', value)
      }
    },
    localTrainingId: {
      get() {
        return this.$store.state.modalityLocalTraining.localTrainingId
      },
      set(value) {
        return this.$store.commit('setLocalTraining', value)
      }
    },

    ...mapState('modalityLocalTrainingModule', {
      modalityLocalTraining: 'modalityLocalTraining',
      modalitiesLocalTrainings: 'modalitiesLocalTrainings',
      localTrainings: 'localTrainings',
      modalities: 'modalities',
      modalitiesLocals: 'modalitiesLocals',
    }),

    ...mapState('commonModule', [
      'loading'
    ]),

    ...mapGetters({
      modalityLocalTraining: 'modalityLocalTrainingModule/modalityLocalTraining',

    })
  },

  created() {
    this.fetchModalitiesLocalTrainings()
  },

  methods: {
    ...mapMutations({
      clearModalityLocalTraining: 'modalityLocalTrainingModule/clearModalityLocalTraining',
      removeModalityLocal: 'modalityLocalTrainingModule/removeModalityLocal',
      clearModalitiesLocals: 'modalityLocalTrainingModule/clearModalitiesLocals',
      clearContacts: 'contactModule/clearContacts',
      pushModalityLocal: 'modalityLocalTrainingModule/PUSH_MODALITY_LOCAL',
      showLoading: 'commonModule/SHOW_LOADING'
    }),

    ...mapActions({
      clearAge: 'personalDataModule/clearAge',
      fetchModalitiesLocalTrainings: 'modalityLocalTrainingModule/fetchModalitiesLocalTrainings',
      onSelectLocalTraining: 'modalityLocalTrainingModule/onSelectLocalTraining',
      onSelectModality: 'modalityLocalTrainingModule/onSelectModality'
    }),

    clearForm() {
      this.clearModalityLocalTraining()

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
      const modalityLocal = this.modalityLocalTraining
      let hasModalityLocal = this.modalitiesLocals.some(x =>
        x.modalityId === modalityLocal.modalityId &&
        x.localTrainingId === modalityLocal.localTrainingId
      )

      if(hasModalityLocal) {
        this.clearForm()
        return this.$bvToast.toast('Você já escolheu este local e modalidade.', {
                  title: 'Aviso',
                  variant: 'warning',
                  autoHideDelay: 2000
                })
      }
      const { modalityId, localTrainingId } = modalityLocal
      this.pushModalityLocal({ modalityId, localTrainingId })
      this.clearForm()
    },

    removeModalityLocalTraining(index) {
      this.removeModalityLocal(index)
    }
  },

  beforeRouteEnter(to, from, next) {
    if(from.name === 'Dashboard') {
      return next(vm => {
        vm.clearForm()
        vm.getModalitiesLocals
      })
    }

    if(from.name === 'PersonalData') {
      return next(vm => vm.modalitiesLocals)
    }

    return next(false)
  },

  beforeRouteLeave(to, from, next) {
    if(to.name === 'PersonalData') {
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
