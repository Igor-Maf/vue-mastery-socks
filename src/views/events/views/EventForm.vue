<template>
    <div>
        <h1>Create an Event</h1>

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

            <div class="form__row">
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

            <div class="form__row">
                <label for="date">Date:</label>

                <datepicker
                    id="date"
                    placeholder="Select a date"
                    v-model="eventForm.date"
                ></datepicker>
            </div>

            <div class="form__row" v-if="times.length">
                <label for="time">Select a time:</label>

                <select id="time" v-model="eventForm.time">
                    <option v-for="time in times" :key="time">
                        {{ time }}
                    </option>
                </select>
            </div>

            <div>
                <button class="btn btn--action">Add event</button>
            </div>
        </form>

        <!-- {{ $store.state.user.name }}
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

    export default {
        data() {
            return {
                eventForm: {
                    category: null,
                    title: '',
                    description: '',
                    location: '',
                    date: null,
                    time: null
                }
            }
        },
        computed: {
            ...mapState(['categories', 'times'])
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
            if (this.categories.length) {
                this.eventForm.category = this.categories[0];
            }
        },
        methods: {
            submit() {
                console.log('eventForm', this.eventForm);
            }
        },
        components: {
            Datepicker
        }
    }
</script>
