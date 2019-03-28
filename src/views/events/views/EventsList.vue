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
    </div>
</template>

<style lang="scss" scoped>
    .events {
        &__cell:not(:last-child) {
            margin-bottom: 1.5em;
        }
    }
</style>

<script>
    import { EventBus } from '@/event-bus';
    import EventsService from '@/services/EventsService';
    import EventCard from './components/EventCard'

    export default {
        data() {
            return {
                events: []
            }
        },
        created() {
            EventsService.getEvents()
                .then(response => this.events = response.data)
                .catch(error => { // TODO: Create middleware for errors
                    EventBus.$emit('add-notification', {
                        type: 'error',
                        text: error.response.status + ': ' + error.response.statusText
                    })
                })
        },
        components: {
            EventCard
        }
    }
</script>
