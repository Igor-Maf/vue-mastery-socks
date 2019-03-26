<template>
    <div class="notifications" v-if="messages.length">
        <ul class="notifications__list">
            <li
                v-for="(message, index) in reversedMessages"
                :key="index"
                class="notifications__item"
            >
                <Notification
                    :message="message"
                    @on-notification-click="removeNotification(index)"
                ></Notification>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    @import "../scss/variables", "../scss/helpers";

    .notifications {
        position: fixed;
        right: 20px;
        bottom: 2em;
        max-height: calc(100vh - 4em);
        width: 400px;
        overflow-y: auto;

        &__list {
            @extend .h-list-unstyled;

            margin: {
                top: 0;
                bottom: 0;
            }
        }

        &__item:not(:last-child) {
            margin-bottom: 1.5em;
        }
    }
</style>

<script>
    import { EventBus } from '@/event-bus'
    import Notification from './Notification'

    export default {
        data() {
            return {
                messages: []
            }
        },
        computed: {
            reversedMessages() {
                return this.messages.reverse();
            }
        },
        methods: {
            addNotification(data) {
                this.messages.push(data);
            },
            removeNotification(index) {
                this.messages.splice(index, 1);
            }
        },
        created() {
            EventBus.$on('add-notification', this.addNotification)
        },
        components: {
            Notification
        }
    }
</script>
