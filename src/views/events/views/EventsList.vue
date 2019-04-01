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
            <template v-if="page !== 1">
                <router-link
                    :to="{ name: 'events-list', query: { page: page - 1 } }"
                    class="navigation__link"
                >
                    <IconLabel>
                        <Icon name="arrow-left" slot="icon" />
                        <span class="h-text-secondary">Previous</span>
                    </IconLabel>
                </router-link>
            </template>

            <template v-if="eventsTotal > page * perPage">
                <router-link
                    :to="{ name: 'events-list', query: { page: page + 1 } }"
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
    import { mapState/*, mapActions */} from 'vuex'

    import store from '@/store/store'
    import Icon from '@/components/Icon'
    import IconLabel from '@/components/IconLabel'
    import EventCard from './components/EventCard'

    function getPageEvents(routeTo, next) {
        console.log(routeTo.query.page);

        const currentPage = +routeTo.query.page || 1;

        store.dispatch('events/fetchEvents', currentPage)
            .then(() => {
                routeTo.params.page = currentPage;
                next();
            })
            .catch(error => {
                if (error.response && error.response.status == 404) {
                    next({
                        name: '404',
                        params: {
                            resource: 'events'
                        }
                    })
                } else {
                    next({ name: 'network-issue' })
                }
            })
    }

    export default {
        props: {
            page: {
                type: Number,
                required: true
            }
        },
        beforeRouteEnter(routeTo, routeFrom, next) {
            getPageEvents(routeTo, next);
        },
        beforeRouteUpdate(routeTo, routeFrom, next) {
            getPageEvents(routeTo, next);
        },
        // mounted() {
            // this.fetchEvents(this.pageNumber)
        // },
        computed: {
            // pageNumber() {
            //     return +this.page || 1
            //     // return +this.$route.query.page || 1
            // },
            ...mapState({
                events: state => state.events.events,
                eventsTotal: state => state.events.eventsTotal,
                perPage: state => state.perPage,
            })
        },
        // methods: mapActions('events', ['fetchEvents']),
        components: {
            EventCard,
            Icon,
            IconLabel
        }
    }
</script>
