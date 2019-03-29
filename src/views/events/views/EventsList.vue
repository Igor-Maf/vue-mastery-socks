<template>
    <div>
        <h2>List of Events</h2>

        <section class="events">
            <ul class="h-list-unstyled" v-if="events.length">
                <li class="events__cell" v-for="event in events" :key="event.id">
                    <EventCard :event="event" />
                </li>
            </ul>

            <p class="h-text-secondary" v-else>Haven't events yet</p>
        </section>

        <div class="navigation">
            <template v-if="pageNumber !== 1">
                <router-link
                    :to="{name: 'events-list', query: {page: pageNumber - 1}}"
                    class="navigation__link"
                >
                    <IconLabel>
                        <Icon name="arrow-left" slot="icon" />
                        <span class="h-text-secondary">Previous</span>
                    </IconLabel>
                </router-link>
            </template>

            <template v-if="eventsTotal > pageNumber * perPage">
                <router-link
                    :to="{name: 'events-list', query: {page: pageNumber + 1}}"
                    class="navigation__link"
                >
                    <IconLabel inverse="true">
                        <Icon name="arrow-right" slot="icon" />
                        <span class="h-text-secondary">Next</span>
                    </IconLabel>
                </router-link>
            </template>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "../../../scss/variables";

    .events {
        &__cell:not(:last-child) {
            margin-bottom: 1.5em;
        }
    }

    .navigation {
        display: flex;
        justify-content: space-between;

        &__link {
            text-decoration: none;
            color: $blue;
        }
    }
</style>

<script>
    import { mapState, mapActions } from 'vuex'

    import Icon from '@/components/Icon'
    import IconLabel from '@/components/IconLabel'
    import EventCard from './components/EventCard'

    export default {
        mounted() {
            this.fetchEvents(this.pageNumber)
        },
        computed: {
            pageNumber() {
                return +this.$route.query.page || 1
            },
            ...mapState({
                events: state => state.events.events,
                eventsTotal: state => state.events.eventsTotal,
                perPage: state => state.perPage,
            })
        },
        methods: mapActions('events', ['fetchEvents']),
        components: {
            EventCard,
            Icon,
            IconLabel
        }
    }
</script>
