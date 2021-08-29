<template lang="pug">
    .add-block
        .text-content
            h1 Add your own recipe now
            p Upload your own home-made recipe and share it with other members of our community
        PrimaryButton(
            :buttonTitle="buttonTitle"
        )
</template>

<script>
export default {
    data() {
        return {
            buttonTitle: 'Add Now'
        }
    }
}
</script>

<style lang="scss" scoped>
.add-block {
    background-color: $action-color;
    width: 80%;
    border-radius: 20px;
    padding: 20px;
    color: $action-block-font-color;
    @include flex(row, space-between);
}
</style>