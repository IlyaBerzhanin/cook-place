<template lang="pug">  
v-app
  v-row(no-gutters)
    v-col(cols="2")
      NavSidebar
    v-col(cols="7")
      main.main-content
        Search.search
        AddBlock.add-block
        Nuxt
    v-col(cols="3")
      InfoSideBar
      ul
        li(v-for="user in users" :key="user.id") {{user}}
</template>

<script>
export default {
  data() {
    return {
      users: null
    };
  },
  async fetch() {
    try {
      this.users = await this.$axios.$get("/api/users/index");
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
};
</script>

<style lang="scss" scoped>
.main-content {
  background-color: $main-bg-color;
  height: 100%;
  @include flex(column, flex-start, center);
}

.search {
  margin-top: 30px;
}

.add-block {
  margin-top: 30px;
}
</style>
