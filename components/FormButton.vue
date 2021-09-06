<template lang="pug">
    v-btn(
        large
        class="mt-10 white--text"
        type="submit"
        :disabled="disabled"
        color="deep-purple lighten-3"
    ) {{ btnName }}
</template>

<script>
export default {
    props: {
        btnName: {type: String, default: 'submit'},
        disabled: {type: Boolean, default: true},
    }
}
</script>