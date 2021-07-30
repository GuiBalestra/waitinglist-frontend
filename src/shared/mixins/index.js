import { mapMutations } from 'vuex'

export const mixin = {
  methods: {
    ...mapMutations({
      clearPersonalData: 'personalDataModule/clearPersonalData',
      clearAddress: 'addressModule/clearAddress',
      clearContact: 'contactModule/clearContact',
      clearContacts: 'contactModule/clearContacts',
      clearModalityLocalTraining: 'modalityLocalTrainingModule/clearModalityLocalTraining',
      clearModalitiesLocals: 'modalityLocalTrainingModule/clearModalitiesLocals'
    }),

    clearState() {
      this.clearPersonalData()
      this.clearAddress()
      this.clearContacts()
      this.clearModalityLocalTraining()
      this.clearModalitiesLocals()
    }
  }
}
