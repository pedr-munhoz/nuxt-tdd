<template>
  <div>
    {{ title }}
    <v-data-table :headers="headers" :items="items" />
  </div>
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
