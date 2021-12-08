<template>
  <b-container class="mt-5">
    <b-jumbotron class="card-border jbt">
      <PageTitle :title="title" />
      <ValidationObserver ref="observer">
        <b-form>
          <ValidationProvider name="CEP" rules="required|min:10|max:10" v-slot="validationContext">
            <b-form-group
              id="input-group-11"
              label="CEP"
              label-for="zipCode"
              class="mb-3"
            >
              <b-skeleton-wrapper :loading="loading">
                <template #loading>
                  <b-skeleton></b-skeleton>
                </template>
                <b-form-input
                  id="zipCode"
                  v-model="form.zipCode"
                  type="search"
                  v-mask="['##.###-###']"
                  placeholder="Digite ou pesquise um CEP ex.: 17054-686 e pressione Enter"
                  :state="getValidationState(validationContext)"
                  aria-describedby="input-11-live-feedback"
                  @keyup.enter="fetchAddress(form.zipCode)"
                ></b-form-input>
                <b-form-invalid-feedback id="input-11-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
              </b-skeleton-wrapper>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="Cidade" rules="required|alpha_spaces" v-slot="validationContext">
            <b-form-group
              id="input-group-12"
              label="Cidade"
              label-for="city"
              class="mb-3"
            >
              <b-skeleton-wrapper :loading="loading">
                <template #loading>
                  <b-skeleton></b-skeleton>
                </template>
                <b-form-input
                  id="city"
                  v-model="form.city"
                  type="text"
                  placeholder="Bauru"
                  :state="getValidationState(validationContext)"
                  aria-describedby="input-12-live-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="input-12-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
              </b-skeleton-wrapper>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="Bairro" rules="required|alpha_spaces" v-slot="validationContext">
            <b-form-group
              id="input-group-13"
              label="Bairro"
              label-for="district"
              class="mb-3"
            >
              <b-skeleton-wrapper :loading="loading">
                <template #loading>
                  <b-skeleton></b-skeleton>
                </template>
                <b-form-input
                  id="district"
                  v-model="form.district"
                  type="text"
                  placeholder="Jardim Solange"
                  :state="getValidationState(validationContext)"
                  aria-describedby="input-13-live-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="input-13-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
              </b-skeleton-wrapper>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="Rua" rules="required|alpha_spaces" v-slot=" validationContext">
            <b-form-group
              id="input-group-14"
              label="Rua"
              label-for="street"
              class="mb-3"
            >
              <b-skeleton-wrapper :loading="loading">
                <template #loading>
                  <b-skeleton></b-skeleton>
                </template>
                <b-form-input
                  id="street"
                  v-model="form.street"
                  type="text"
                  placeholder="Fábio Geraldo"
                  :state="getValidationState(validationContext)"
                  aria-describedby="input-14-live-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="input-14-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
              </b-skeleton-wrapper>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="Número" rules="required" v-slot="validationContext">
            <b-form-group
              id="input-group-15"
              label="Número"
              label-for="number"
              class="mb-3"
            >
              <b-form-input
                id="number"
                v-model="form.number"
                type="text"
                placeholder="2-12"
                :state="getValidationState(validationContext)"
                aria-describedby="input-15-live-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="input-15-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="Complemento" rules="required" v-slot="validationContext">
            <b-form-group
              id="input-group-16"
              label="Complemento"
              label-for="complement"
              class="mb-3"
            >
              <b-form-input
                id="complement"
                v-model="form.complement"
                type="text"
                placeholder="Casa"
                :state="getValidationState(validationContext)"
                aria-describedby="input-16-live-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="input-16-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
        </b-form>
      </ValidationObserver>
    </b-jumbotron>

    <BackNextButton
      :back="back"
      :next="next"
    />
  </b-container>
</template>

<script>
import BackNextButton from '@/components/backNextButton/BackNextButton.vue'
import PageTitle from '@/components/pageTitle/PageTitle.vue'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
import { mixin } from '@/shared/mixins'

export default {
  name: 'Address',

  components: {
    [BackNextButton.name]: BackNextButton,
    [PageTitle.name]: PageTitle
  },

  mixins: [mixin],

  data: () => ({
    back: 'PersonalData',
    next: 'Contact',
    title: 'Endereço'
  }),

  computed: {
    ...mapState('addressModule', {
      form: 'address',
      cep: 'cep'
    }),

    ...mapState('commonModule', [
      'loading'
    ]),

    ...mapGetters('addressModule', [
      'address'
    ])
  },

  created(){

  },

  methods: {
    ...mapMutations('addressModule', [
      'clearAddress'
    ]),

    ...mapActions('addressModule', {
      fetchAddress: (dispatch, zipCode) => {
        if(!zipCode) return

        return dispatch('fetchAddress', zipCode)
      }
    }),

    ...mapActions('personalDataModule', [
      'clearAge'
    ]),

    clearForm() {
      this.clearAddress(this.form)

      this.$nextTick(() => {
        this.$refs.observer.reset()
      })
    },

    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
    }
  },

  beforeRouteEnter(to, from, next) {
    if(from.name === 'PersonalData') {
      return next(vm => vm.clearForm())
    }

    if(from.name === 'Contact') {
      return next(vm => vm.getAddress)
    }

    return next(false)
  },

  beforeRouteLeave(to, from, next) {
    if(to.name === 'Contact') {
      this.$refs.observer.validate()
        .then(valid => {
          if(valid) return next()

          this.$bvToast.toast('Preencha todos os campos para avançar.', {
            title: 'Erro',
            variant: 'danger',
            autoHideDelay: 2000
          })
        })

      return next(false)
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
