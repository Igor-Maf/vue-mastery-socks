<template>
    <router-link :to="{name: 'event', params: { id: `${id}` }}" class="event-link">
        <article class="event-card">
            <header>
                <h3>{{ title }}</h3>
            </header>

            <footer class="event-card__footer">
                <span class="badge badge--default badge--complex" v-if="attendees.length">
                    <Icon name="users" />
                    <small>{{ attendees.length }} attending</small>
                </span>

                <span class="badge badge--default badge--complex">
                    <Icon name="clock" />

                    <time class="h-text-secondary">
                        @{{ time }} on {{ date }}
                    </time>
                </span>
            </footer>
        </article>
    </router-link>
</template>

<style lang="scss" scoped>
    @import "../../../../scss/variables", "../../../../scss/helpers", "../../../../scss/extends";

    .event-link {
        @extend .h-link-unstyled;

        &:hover,
        &:focus {
            .event-card {
                border-color: darken($light-grey, 10);
            }
        }
    }

    .event-card {
        @extend %lg-padding, %based-border;

        &__footer {
            .badge:not(:last-child) {
                margin-right: 8px;
            }
        }
    }
</style>

<script>
    import Icon from '@/components/Icon'

    export default {
        data() {
            return {
                id: 1,
                title: 'Event #1',
                date: 'Tues Aug 19, 2018',
                time: '6:00',
                attendees: [
                    {
                        id: 1,
                        name: 'Ihor Gevorkyan'
                    },
                    {
                        id: 2,
                        name: 'Dan Abramov'
                    },
                    {
                        id: 3,
                        name: 'Dr. Smith'
                    }
                ]
            }
        },
        components: {
            Icon
        }
    }
</script>
