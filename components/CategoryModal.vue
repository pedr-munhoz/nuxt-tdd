<template>
  <div>
    Category
    <v-text-field id="nameInput" v-model="category.name" />
    <v-text-field id="descriptionInput" v-model="category.description" />
    <v-btn id="confirmButton" @click="confirm()" />
  </div>
</template>

<script>
export default {
  name: 'CategoryModal',

  data: () => ({
    category: {
      name: '',
      description: '',
    },
  }),

  methods: {
    confirm() {
      this.$emit('confirm', this.category);
    },
  },
};
</script>

<style></style>
