<template>
    <div class="l-label-icon" :class="{'l-label-icon--inverse': inverse}">
        <div class="l-label-icon__cell">
            <slot name="icon" />
        </div>

        <div class="l-label-icon__cell">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .l-label-icon {
        display: flex;
        align-items: center;
        margin-right: -4px;

        &__cell {
            display: inline-flex;
            margin-right: 4px;
        }

        &--inverse {
            flex-direction: row-reverse;
        }
    }
</style>

<script>
    export default {
        props: {
            inverse: {
                default: false
            }
        }
    }
</script>
