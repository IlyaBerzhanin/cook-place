<template lang="pug">
    v-btn(
        rounded
        x-large
        class="button"
    ) {{ buttonTitle }}
</template>

<script>
export default {
  props: {
    buttonTitle: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
    color: $action-color;
    text-transform: capitalize;
}
</style>
