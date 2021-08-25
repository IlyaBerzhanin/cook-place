<template lang="pug">
    v-navigation-drawer(
        class="deep-purple accent-2"
        dark
        permanent
    )
        v-list.nav-links
            NuxtLink(
                v-for="tab in tabsData"
                :key="tab.title"
                :to="{name: tab.route}"
                class="link-anchor"
            )
                v-list-item(
                    link
                    class="nav-link")
                    v-list-item-icon
                        v-icon(dark left) {{ tab.iconName }}
                    v-list-item-content {{ tab.title }}
</template>

<script>
export default {
   data() {
       return {
            tabsData: [
                {title: 'home', route: 'index', iconName: 'mdi-home-outline'},
                {title: 'recipes', route: 'recipes', iconName: 'mdi-format-list-checkbox'},
                {title: 'favorite', route: 'favorite', iconName: 'mdi-heart-outline'},
                {title: 'chat', route: 'chat', iconName: 'mdi-chat-outline'},
                {title: 'community', route: 'community', iconName: 'mdi-account-group-outline'},
                {title: 'settings', route: 'settings', iconName: 'mdi-cog-outline'}
            ]
       }
   }
}
</script>

<style lang="scss" scoped>
.link-anchor {
    display: block;
    text-decoration: none;
    text-transform: capitalize;
    font-size: 1rem;
}

.nuxt-link-exact-active {
    background-color: greenyellow;
    transition: .5s ease;
}
</style>