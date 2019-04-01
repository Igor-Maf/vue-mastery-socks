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

            <div class="form__row" :class="{ 'form__row--error': $v.eventForm.title.$error }">
                <label for="title">Title:</label>

                <input
                    id="title"
                    placeholder="Add an event title"
                    autocomplete="off"
                    v-model="eventForm.title"
                    @blur="$v.eventForm.title.$touch()"
                />

                <template v-if="$v.eventForm.title.$error">
                    <p v-if="!$v.eventForm.title.required" class="h-text-secondary h-color-red">Title is required</p>
                </template>
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

            <div class="form__row" :class="{ 'form__row--error': $v.eventForm.date.$error }">
                <label for="date">Date:</label>

                <datepicker
                    id="date"
                    placeholder="Select a date"
                    v-model="eventForm.date"
                    @opened="$v.eventForm.date.$touch()"
                ></datepicker>

                <template v-if="$v.eventForm.date.$error">
                    <p v-if="!$v.eventForm.date.required" class="h-text-secondary h-color-red">Date is required</p>
                </template>
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
                <button :disabled="$v.$invalid" class="btn btn--action">Add event</button>

                <p v-if="$v.$anyError" class="h-text-secondary h-color-red">
                    Please fill out the required fields (title and date)
                </p>
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
    import nprogress from 'nprogress'
    import { required } from 'vuelidate/lib/validators'


    import { EventBus } from '@/event-bus'

    export default {
        data() {
            return {
                eventForm: this.getInitialEventFormData()
            }
        },
        validations: {
            eventForm: {
                title: { required },
                date: { required }
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
                    time: ''
                }
            },
            submit() {
                this.$v.$touch();

                if (this.$v.$invalid) {
                    return false;
                }

                // console.log('eventForm', this.eventForm);

                nprogress.start();

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
                        nprogress.start();

                        EventBus.$emit('add-notification', {
                            type: 'error',
                            text: 'There was a problem creating your event'
                        });
                    })
            }
        },
        components: {
            Datepicker
        }
    }
</script>
