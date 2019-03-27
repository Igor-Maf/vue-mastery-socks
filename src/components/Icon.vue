<template>
    <div class="icon-wrapper">
        <svg class="icon" :width="width" :height="height">
            <use v-bind="{'xlink:href': require(`@/assets/icons-sprite.svg`) + '#' + name}" />
        </svg>
    </div>
</template>

<style lang="scss" scoped>
    .icon-wrapper {
        display: inline-flex;
        align-items: center;
        color: rgba(0, 0, 0, .4);
        font: {
            size: 1em;
            weight: 600;
        }
    }

    .icon {
        stroke: currentColor;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
        margin-right: 4px;
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
