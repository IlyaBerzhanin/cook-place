<template lang="pug">
v-app
    ClientOnly
      .content
        Nuxt
</template>

<style lang="scss" scoped>
.content {
  background: rgb(204, 193, 169);
  background: linear-gradient(
    146deg,
    rgba(204, 193, 169, 1) 0%,
    rgba(244, 177, 96, 1) 35%,
    rgba(239, 225, 242, 1) 100%
  );
  width: 100vw;
  height: 100vh;
  @include flex();
}
</style>
