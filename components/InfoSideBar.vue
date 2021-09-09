<template lang="pug">
.info-block
    h1 info side bar
    p some info text
    v-btn(
        large
        class="mt-10 white--text"
        color="deep-purple lighten-3"
        @click="logout"
    ) logout
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logoutUser')
      this.$router.push({ name: 'login' })
    },
  },
}
</script>
