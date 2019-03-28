<template>
    <div class="icon-wrapper">
        <svg class="icon" :width="width" :height="height">
            <use v-bind="{'xlink:href': `${require('@/assets/icons-sprite.svg')}#${name}`}" />
        </svg>
    </div>
</template>

<style lang="scss" scoped>
    .icon-wrapper {
        display: inline-flex;
        align-items: center;
    }

    .icon {
        fill: none;
        stroke: currentColor;
        stroke: {
            width: 2;
            linecap: round;
            linejoin: round;
        }
    }
</style>

<script>
    export default {
        props: {
            name: String,
            width: {
                type: [Number, String],
                default: 24
            },
            height: {
                type: [Number, String],
                default: 24
            }
        }
    }
</script>
