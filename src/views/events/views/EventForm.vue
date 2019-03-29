<template>
    <div>
        <h2>Create an Event</h2>

        <form class="form form--default" @submit.prevent="submit">
            <div class="form__row">
                <label for="category">Select a category:</label>

                <select id="category" v-model="eventForm.category">
                    <option :value="null">none</option>

                    <option v-for="category in categories" :key="category">
                        {{ category }}
                    </option>
                </select>
            </div>

            <div class="form__row" :class="{'form__row--error': submitted && !eventForm.title}">
                <label for="title">Title:</label>

                <input
                    id="title"
                    placeholder="Add an event title"
                    autocomplete="off"
                    v-model="eventForm.title"
                />
            </div>

            <div class="form__row">
                <label for="description">Description:</label>

                <textarea
                    id="description"
                    placeholder="Add a description"
                    v-model="eventForm.description"
                ></textarea>
            </div>

            <div class="form__row">
                <label for="location">Location:</label>

                <input
                    id="location"
                    placeholder="Add a location"
                    autocomplete="off"
                    v-model="eventForm.location"
                />
            </div>

            <div class="form__row" :class="{'form__row--error': submitted && !eventForm.date}">
                <label for="date">Date:</label>

                <datepicker
                    id="date"
                    placeholder="Select a date"
                    v-model="eventForm.date"
                ></datepicker>
            </div>

            <div class="form__row" v-if="hours.length">
                <label for="time">Select a time:</label>

                <select id="time" v-model="eventForm.time">
                    <option v-for="hour in hours" :key="hour">
                        {{ hour }}
                    </option>
                </select>
            </div>

            <div>
                <button class="btn btn--action" :disabled="!eventForm.title">Add event</button>
            </div>
        </form>

        <!-- {{ user }}
        {{ $store.state.user.name }}
        <h2>Create Event, {{ username }}</h2>

        <p class="h-text-secondary">
            There are {{ categoriesLength }} categories
        </p>

        <ul v-if="categoriesLength">
            <li v-for="(category, index) in categories" :key="index">
                <span>{{ category }}</span>
            </li>
        </ul>

        <p>{{ getEvent(2) }}</p> -->
    </div>
</template>

<script>
    import { mapState/* , mapGetters */ } from 'vuex'
    import Datepicker from 'vuejs-datepicker'

    import { EventBus } from '@/event-bus'

    export default {
        data() {
            return {
                eventForm: this.getInitialEventFormData(),
                submitted: false
            }
        },
        computed: {
            ...mapState(['categories', 'hours'])
            /* getEvent() {
                return this.$store.getters.getEventByID
            },
            categoriesLength() {
                return this.$store.getters.categoriesLength
            },
            ...mapGetters({
                getEvent: 'getEventByID',
                categoriesLength: 'categoriesLength'
            }),
            ...mapState({
                username: state => state.user.name,
                categories: 'categories'
            }) */
        },
        mounted() {
            this.$nextTick(() => {
                if (this.categories.length) {
                    this.eventForm.category = this.categories[0];
                }

                if (this.hours.length) {
                    this.eventForm.time = this.hours[0];
                }
            })
        },
        methods: {
            getInitialEventFormData() {
                return {
                    id: Math.floor(Math.random() * 1000000),
                    // user: this.$store.state.currentUser.user,
                    category: null,
                    title: '',
                    description: '',
                    location: '',
                    date: Date.now(),
                    time: null
                }
            },
            submit() {
                console.log('eventForm', this.eventForm);

                this.submitted = true;

                if (this.eventForm.title && this.eventForm.date) {
                    this.$store.dispatch('events/addEvent', this.eventForm)
                        .then(() =>
                            this.$router.push({
                                name: 'event',
                                params: {
                                    id: this.eventForm.id
                                }
                            })
                        )
                        .catch(() => {
                            EventBus.$emit('add-notification', {
                                type: 'error',
                                text: 'There was a problem creating your event'
                            })
                        })
                }
            }
        },
        components: {
            Datepicker
        }
    }
</script>
