<template lang="pug">  
v-app
  v-row(no-gutters)
    v-col(cols="2")
      NavSidebar
    v-col(cols="7")
      main.main-content
        Search.search
        AddBlock(   
          v-if="$route.name === 'index'"
          class="add-block"
        )
        Nuxt
    v-col(cols="3")
      InfoSideBar
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
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
