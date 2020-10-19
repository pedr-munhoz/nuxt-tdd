<template>
  <v-card>
    <v-card-title>Login</v-card-title>

    <v-card-text>
      <v-form id="loginForm" @submit.prevent="login()">
        <v-text-field id="emailInput" label="Email" />
        <v-text-field id="passwordInput" type="password" label="Password" />
      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <v-btn id="loginButton" type="submit" form="loginForm" outlined>
        <v-icon>mdi-check</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'LoginPage',

  methods: {
    login() {},
  },
};
</script>

<style></style>
