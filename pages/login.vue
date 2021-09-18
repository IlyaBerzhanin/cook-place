<template lang="pug">
  v-form(
    v-model="valid"
    class="form"
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
        btn-name="login"
        :disabled="!valid"
    )
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'empty',
  data() {
    return {
      showPass: false,
      valid: false,
      justRegistered: false,
      name: '',
      password: '',
      rules: {
        required: (value) => !!value || 'Required',
        max: (value) => (value && value.length < 30) || 'max 30 characters',
        passMin: (value) => (value && value.length >= 6) || 'min 6 characters',
      },
    }
  },
  computed: {
    ...mapGetters(['user']),
  },
  mounted() {
    if (this.$route.params.justRegistered) {
      this.justRegistered = this.$route.params.justRegistered
    }
  },
  methods: {
    async submitHandler() {
      const IS_LOGGED = await this.$store.dispatch('loginUser', {
        name: this.name,
        password: this.password,
      })
      if (IS_LOGGED) {
        console.log('pos');
        this.$router.push({ name: 'index' })
      } else {
        console.log('smth went wrong')
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
