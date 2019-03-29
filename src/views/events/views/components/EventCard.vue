<template>
    <router-link :to="{name: 'event', params: {id: event.id}}" class="event-link">
        <article class="event-card">
            <header>
                <h3>{{ event.title }}</h3>
            </header>

            <footer class="event-card__footer">
                <span class="badge badge--default" v-if="event.attendees && event.attendees.length">
                    <IconLabel>
                        <Icon name="users" class="h-color-grey" slot="icon" />
                        <small>{{ event.attendees.length }} attending</small>
                    </IconLabel>
                </span>

                <span class="badge badge--primary">
                    <IconLabel>
                        <Icon name="clock" slot="icon" />
                        <time class="h-text-secondary">@{{ event.time }} on {{ event.date }}</time>
                    </IconLabel>
                </span>

                <span class="badge badge--success h-text-secondary">
                    <span>{{ event.category }}</span>
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
                border-color: $orange;
            }
        }
    }

    .event-card {
        @extend %lg-padding, %based-border;

        &__footer {
            display: flex;
        }
    }
</style>

<script>
    import Icon from '@/components/Icon'
    import IconLabel from '@/components/IconLabel'

    export default {
        props: {
            event: Object
        },
        components: {
            Icon,
            IconLabel
        }
    }
</script>
