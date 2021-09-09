<template lang="pug">    
  v-form(
      class="form"
      v-model="valid"
      ref="form"
      @submit.prevent="submitHandler"
  )
    v-text-field(
        v-model.trim="name"
        label="Name"
        counter="30"
        maxLength="30"
        :rules="[rules.required, rules.max]"
        color="deep-purple lighten-1"
    )
    v-text-field(
        v-model.trim="email"
        label="E-mail"
        required
        :rules="[rules.required, rules.mail]"
        color="deep-purple lighten-1"
    )
    v-text-field(
        v-model.trim="password"
        label="Password"
        :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPass ? 'text' : 'password'"
        autocomplete
        minLength="6"
        maxLength="30"
        color="deep-purple lighten-1"
        :rules="[rules.required, rules.max, rules.passMin]"
        @click:append="showPass = !showPass"
    )
    FormButton(
        btn-name="register"
        :disabled="!valid"
    )
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'empty',
  data() {
    return {
      isRegistered: false,
      showPass: false,
      valid: false,
      name: '',
      email: '',
      password: '',
      rules: {
        required: (value) => !!value || 'Required',
        max: (value) => (value && value.length < 30) || 'max 30 characters',
        passMin: (value) => (value && value.length >= 6) || 'min 6 characters',
        mail: (value) => /.+@.+/.test(value) || 'E-mail must be valid',
      },
    }
  },
  computed: {
    ...mapGetters(['user']),
  },
  methods: {
    async submitHandler() {
      this.justRegistered = await this.$store.dispatch('registerUser', {
        name: this.name,
        email: this.email,
        password: this.password,
      })
      if(this.justRegistered) {
        this.$router.push({name: 'login', params: { justRegistered: true }})
      }
      else {
        console.log('already reg');
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  width: 600px;
  padding: 50px;
  background-color: $main-bg-color;
  border-radius: 20px;
  box-shadow: 0 0 10px #fff, 0 0 40px #fff, 0 0 80px #fff;
}
</style>
