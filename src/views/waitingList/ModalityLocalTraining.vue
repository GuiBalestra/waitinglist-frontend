<template>
  <b-container>
    <PageTitle :title="title" />

    <b-jumbotron>
      <ValidationObserver ref="observer">
        <b-form @submit.stop.prevent>
          <ValidationProvider name="Data de Nascimento" rules="required" v-slot="validationContext">
            <b-form-group
              id="input-group-2"
              label="Data de nascimento"
              label-for="birthDate"
              class="mb-3"
            >
              <b-form-input
                id="birthDate"
                v-model="form.birthDate"
                type="date"
                :state="getValidationState(validationContext)"
                aria-describedby="input-2-live-feedback"
                @blur="setAge(form.birthDate)"
              ></b-form-input>
              <b-form-invalid-feedback id="input-2-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="Deficiência" vid="deficiency" rules="required" v-slot="validationContext">
            <b-form-group
              id="input-group-7"
              label="Possui alguma deficiência?"
              label-for="hasDeficiency"
              class="mb-3"
            >
              <b-form-select
                id="hasDeficiency"
                v-model="form.hasDeficiency"
                :options="yesNo"
                :state="getValidationState(validationContext)"
                aria-describedby="input-7-live-feedback"
              >
                <template v-slot:first>
                  <b-form-select-option :value="undefined" disabled>-- Selecione --</b-form-select-option>
                </template>
              </b-form-select>
              <b-form-invalid-feedback id="input-7-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="Tipo da deficiência" rules="required_if:deficiency,1" v-slot="validationContext">
            <b-form-group
              id="input-group-24"
              label="Tipo de deficiência"
              label-for="deficiencyType"
              class="mb-3"
              v-if="showDeficiency"
            >
              <b-form-select
                id="deficiencyType"
                v-model="form.deficiencyType"
                :options="deficiencyTypes"
                :state="getValidationState(validationContext)"
                aria-describedby="input-24-live-feedback"
              >
                <template v-slot:first>
                  <b-form-select-option :value="undefined" disabled>-- Selecione --</b-form-select-option>
                </template>
              </b-form-select>
              <b-form-invalid-feedback id="input-24-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="CID" rules="required_if:deficiency,1" v-slot="validationContext">
            <b-form-group
              id="input-group-8"
              label="Qual o CID?"
              label-for="cid"
              class="mb-3"
              v-if="showDeficiency"
            >
              <b-skeleton-wrapper :loading="loading">
                <template #loading>
                  <b-skeleton></b-skeleton>
                </template>
                <b-form-input
                  id="cid"
                  v-model="form.cid"
                  type="search"
                  placeholder="Pesquisar CID ex.: F840"
                  :state="getValidationState(validationContext)"
                  aria-describedby="input-8-live-feedback"
                  @keyup.enter="fetchCid(form.cid)"
                >
                </b-form-input>
                <b-form-invalid-feedback id="input-8-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
              </b-skeleton-wrapper>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="Descrição da deficiência" rules="required_if:deficiency,1" v-slot="validationContext">
            <b-form-group
              id="input-group-9"
              label="Qual deficiência?"
              label-for="cidDescription"
              class="mb-3"
              v-if="showDeficiency"
            >
              <b-skeleton-wrapper :loading="loading">
                <template #loading>
                  <b-skeleton></b-skeleton>
                  <b-skeleton></b-skeleton>
                  <b-skeleton></b-skeleton>
                </template>
                <b-form-textarea
                  id="cidDescription"
                  v-model="form.cidDescription"
                  placeholder="Descrição do CID"
                  rows="3"
                  max-rows="6"
                  class="mt-3"
                  :state="getValidationState(validationContext)"
                  aria-describedby="input-9-live-feedback"
                  disabled
                ></b-form-textarea>
                <b-form-invalid-feedback id="input-9-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
              </b-skeleton-wrapper>
            </b-form-group>
          </ValidationProvider>
        </b-form>
      </ValidationObserver>

      <ValidationObserver ref="observer2">
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
      modalitiesLocals: 'modalitiesLocals'
    }),

    ...mapState('personalDataModule', {
      form: 'personalData',
      yesNo: 'yesNo',
      deficiencyTypes: 'deficiencyTypes'
    }),

    ...mapState('commonModule', [
      'loading'
    ]),

    ...mapGetters({
      modalityLocalTraining: 'modalityLocalTrainingModule/modalityLocalTraining',
      age: 'personalDataModule/age'
    }),

    showDeficiency() {
      if (this.form.hasDeficiency === 1) {
        return true
      }

      return false
    }
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

    ...mapActions('personalDataModule', {
      setAge: (dispatch, birthDate) => {
        return dispatch('setAge', birthDate)
      },

      fetchCid: (dispatch, cidCode) => {
        if (!cidCode) return

        return dispatch('fetchCid', cidCode)
      }
    }),

    clearForm() {
      this.clearModalityLocalTraining()

      this.$nextTick(() => {
        this.$refs.observer2.reset()
      })
    },

    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
    },

    validateAddBtn() {
      this.$refs.observer2.validate()
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

      if (!this.form.birthDate || !this.form.hasDeficiency) {
        this.$refs.observer.validate()
          .then(valid => {
            if(!valid) {
              this.$bvToast.toast('Preencha a data de nascimento e o(s) campo(s) de deficiência.', {
                title: 'Erro',
                variant: 'danger',
                autoHideDelay: 2000
              })
            }
          })

        next(false)
      }

      if(!this.modalitiesLocals.length) {
        this.$refs.observer2.validate()
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
  },

  watch: {
    'form.hasDeficiency'(val) {
      if(val === 0) {
        this.form.cid = null
        this.form.cidDescription = null

        this.$nextTick(() => {
          this.$refs.observer.reset()
        })
      }
    }
  }
}
</script>

<style>

</style>
