<template>
  <b-table
      :items="items"
      :fields="fields"
      class="mt-5 white-space"
      responsive
      striped
      hover
      show-empty
    >
      <template v-slot:cell(actions)="{ item }">
        <b-button class="sm" variant="danger" @click="remove(item.index)">
          <b-icon icon="trash-fill" variant="light" />
        </b-button>
      </template>
      <template v-slot:empty>
        <h6 class="text-center">{{ emptyText }}</h6>
      </template>
    </b-table>
</template>

<script>
export default {
  name: 'TableList',

  props: {
    items: {
      type: Array,
      required: true
    },
    fields: {
      type: Array,
      required: true
    },
    emptyText: {
      type: String,
      required: true
    }
  },

  methods: {
    remove() {

    }
  }
}
</script>

<style>
  .white-space {
    white-space: nowrap;
  }
</style>
