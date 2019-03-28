<template>
    <div class="l-label-icon">
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

        &__cell {
            display: inline-flex;

            &:first-child {
                margin-right: 4px;
            }
        }
    }
</style>
