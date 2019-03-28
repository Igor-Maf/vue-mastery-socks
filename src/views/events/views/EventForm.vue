<template>
    <div>
        <h2>Create Event, {{ username }}</h2> <!-- {{ $store.state.user.name }} -->

        <p class="h-text-secondary">
            There are {{ categoriesLength }} categories
        </p>

        <ul v-if="categoriesLength">
            <li v-for="(category, index) in categories" :key="index">
                <span>{{ category }}</span>
            </li>
        </ul>

        <p>{{ getEvent(2) }}</p>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'

    export default {
        computed: {
            // getEvent() {
            //     return this.$store.getters.getEventByID
            // },
            // categoriesLength() {
            //     return this.$store.getters.categoriesLength
            // },
            ...mapGetters({
                getEvent: 'getEventByID',
                categoriesLength: 'categoriesLength'
            }),
            ...mapState({
                username: state => state.user.name,
                categories: 'categories'
            })
            // mapState(['user', 'categories']) - if you need all user data and not need custom names of entities in component
        }
    }
</script>
