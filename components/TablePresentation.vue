<template>
  <v-card>
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-text>
      <v-data-table :headers="headers" :items="items" />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'TablePresentation',

  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    headers: {
      type: Array,
      required: true,
      default: () => [],
    },
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<style></style>
