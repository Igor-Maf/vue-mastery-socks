<template>
    <div class="content">
        <section class="events">
            <header class="events__header">
                <h1>Events</h1>

                <nav>
                    <ul class="events__menu">
                        <li><router-link to="/events/list">List</router-link></li>
                        <li><router-link to="/events/create">Create</router-link></li>
                    </ul>
                </nav>
            </header>

            <router-view />
        </section>
    </div>
</template>

<style src="./Events.scss" lang="scss" scoped></style>

<script>
    export default {
        mounted() {
            this.$store.dispatch('fetchEvents')
        }
    }
</script>
