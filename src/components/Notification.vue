<template>
    <div class="notification" :class="`notification--${message.type}`">
        <button type="button" class="btn btn--clear notification__btn" @click="removeByClick">
            <h3 v-if="message.title">{{ message.title }}</h3>
            <p class="notification__text">{{ message.text }}</p>
        </button>
    </div>
</template>

<style lang="scss" scoped>
    @import "../scss/variables", "../scss/extends";

    .notification {
        position: relative;

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            opacity: .8;
            z-index: -1;
            background-color: #000;
        }

        &__btn {
            @extend %lg-padding;

            display: block;
            width: 100%;
            text-align: left;
            color: #fff;
        }

        &__text {
            margin: {
                top: 0;
                bottom: 0;
            }
        }

        &--success {
            &::after {
                background-color: $green;
            }
        }

        &--error {
            &::after {
                background-color: $red;
            }
        }
    }
</style>

<script>
    export default {
        props: {
            message: {
                type: Object,
                default: () => ({
                    id: null,
                    title: null,
                    text: 'Operation succeed',
                    type: 'success'
                })
            }
        },
        data() {
            return {
                timeout: null
            }
        },
        methods: {
            clearTimeout() {
                clearTimeout(this.timeout);
            },
            sendEvent() {
                this.$emit('delete-notification', this.message.id);
            },
            removeByClick() {
                this.clearTimeout();
                this.sendEvent();
            }
        },
        mounted() {
            this.timeout = setTimeout(() => this.sendEvent(), 5000)
        },
        beforeDestroy() {
           this.clearTimeout();
        }
    }
</script>
