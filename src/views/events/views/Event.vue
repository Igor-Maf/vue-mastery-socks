<template>
    <div>
        <template v-if="event">
            <h2>{{ event.title }}</h2>

            <img alt="Vue logo" src="@/assets/vue.png" />

            <p v-if="event.description">{{ event.description }}</p>

            <div
                v-if="event.attendees && event.attendees.length"
                class="h-list-unstyled h-text-secondary"
            >
                <span>Attendees:</span>

                <span v-for="(attendee, index) in event.attendees" :key="attendee.id">
                    {{ attendee.name }}<span v-if="index !== event.attendees.length - 1">, </span>
                </span>
            </div>

            <p class="h-text-secondary" v-if="event.user">
                Organized by: <strong>{{ event.user.name }}</strong>
            </p>

            <div>
                <small class="badge badge--default" v-if="event.category">
                    {{ event.category }}
                </small>

                <small class="badge badge--default" v-if="event.location">
                    {{ event.location }}
                </small>

                <time class="badge badge--default h-text-secondary">
                    @{{ event.time }} on {{ event.date }}
                </time>
            </div>
        </template>

        <!-- <p class="h-color-red" v-else>Event with ID #{{ id }} wasn't found.</p> -->
    </div>
</template>

<script>
    // import { mapState, mapActions } from 'vuex'
    // import nprogress from 'nprogress'

    // import store from '@/store/store'

    export default {
        props: {
            event: {
                type: Object,
                required: true
            }
        }
        // props: ['id'],
        // beforeRouteEnter(routeTo, routeFrom, next) {
        //     // nprogress.start();
        //
        //     store.dispatch('events/fetchEvent', routeTo.params.id)
        //         .then(() => {
        //             // nprogress.done();
        //             next();
        //         })
        // },
        // mounted() {
        //     this.fetchEvent(this.id);
        // },
        // computed: mapState({
        //     event: state => state.events.event
        // }),
        // methods: mapActions('events', ['fetchEvent'])
    }
</script>
