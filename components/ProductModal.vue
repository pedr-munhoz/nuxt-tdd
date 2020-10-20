<template>
  <div>
    Product
    <v-text-field id="nameInput" v-model="product.name" />
    <v-text-field id="descriptionInput" v-model="product.description" />
    <v-text-field id="priceInput" v-model="product.price" />
    <v-text-field id="imageInput" v-model="product.image" />
    <v-btn id="confirmButton" @click="confirm()" />
  </div>
</template>

<script>
export default {
  name: 'ProductModal',

  data: () => ({
    product: {
      name: '',
      description: '',
      price: '',
      image: '',
    },
  }),

  methods: {
    confirm() {
      this.$emit('confirm', this.product);
    },
  },
};
</script>

<style></style>
