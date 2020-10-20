<template>
  <div>
    User
    <v-text-field id="nameInput" v-model="user.name" />
    <v-text-field id="emailInput" v-model="user.email" />
    <v-select id="genderInput" v-model="user.gender" />
    <v-btn id="confirmButton" @click="confirm()" />
  </div>
</template>

<script>
export default {
  name: 'UserModal',

  data: () => ({
    user: {
      name: '',
      email: '',
      gender: '',
    },
  }),

  methods: {
    confirm() {
      this.$emit('confirm', this.user);
    },
  },
};
</script>

<style></style>
