<template>
    <router-link :to="{name: 'event', params: { id: `${id}` }}" class="event-link">
        <article class="event-card">
            <header>
                <h3>{{ title }}</h3>
            </header>

            <footer class="event-card__footer">
                <span class="badge badge--default" v-if="attendees.length">
                    <IconLabel>
                        <Icon name="users" class="h-color-grey" slot="icon" />
                        <small>{{ attendees.length }} attending</small>
                    </IconLabel>
                </span>

                <span class="badge badge--default">
                    <IconLabel>
                        <Icon name="clock" class="h-color-grey" slot="icon" />
                        <time class="h-text-secondary">@{{ time }} on {{ date }}</time>
                    </IconLabel>
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
    import IconLabel from '@/components/IconLabel'

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
            Icon,
            IconLabel
        }
    }
</script>
