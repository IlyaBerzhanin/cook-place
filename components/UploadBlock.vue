<template lang="pug">
    .upload-block {{ blockText }}
        img(
            src="@/assets/images/dish.jpg"
            class="dish-image"
            )
        PrimaryButton(:buttonTitle="buttonName")
</template>

<script>
export default {
    data() {
        return {
            blockText: 'Share your own Recipe with the community',
            buttonName: 'upload now'
        }
    }
}
</script>

<style lang="scss" scoped>
.upload-block {
    background-color: $action-color;
    position: relative;
    @include flex(column, space-around, center);
}

.dish-image {
    border-radius: 50%;
    max-width: 150px;
    position: absolute;
}
</style>