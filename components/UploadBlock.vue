<template lang="pug">
    .upload-block {{ blockText }}
        img(
            src="@/assets/images/dish.jpg"
            class="dish-image"
            )
        PrimaryButton(
            :buttonTitle="buttonName"
            class="primary-button"
            )
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
    @include flex(column, space-between);

    background-color: $action-color;
    color: $action-block-font-color;
    position: relative;
    width: 90%;
    border-radius: 10px;
    margin-top: 100px;
    padding: 80px 10px 30px;
    text-align: center;
}

.dish-image {
    border-radius: 50%;
    max-width: 150px;
    position: absolute;
    bottom: 75%;
}

.primary-button {
    margin-top: 20px;
}
</style>