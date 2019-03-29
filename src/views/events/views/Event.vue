<template>
    <div>
        <h2>{{ event.title }}</h2>

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
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        props: ['id'],
        created() {
            this.$store.dispatch('fetchEvent', this.id)
        },
        computed: mapState(['event'])
    }
</script>
