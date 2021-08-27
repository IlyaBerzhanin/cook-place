<template lang="pug">
    v-list.nav-links
        NuxtLink(
            v-for="tab in tabsData"
            :key="tab.title"
            :to="{name: tab.route}"
            class="link-anchor"
        )
            v-list-item(
                link
                class="nav-link"
                )
                v-list-item-icon
                    v-icon(
                        class="v-icon"
                        left
                        ) {{ tab.iconName }}
                v-list-item-content(
                class="v-list-item-content"
                ) {{ tab.title }}
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
.nav-links {
    width: 100%;
}

.link-anchor {
    display: block;
    text-decoration: none;
    text-transform: capitalize;
    font-size: 1rem;
    transition: .5s ease;
}

.v-icon, .v-list-item-content{
    color: $nav-color;
    transition: color .5s;
}

.nuxt-link-exact-active {    
    & .v-icon, .v-list-item-content{
       color: $nav-active-color;
    }
}
</style>