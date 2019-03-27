<template>
    <div>
        <h2>List of Events</h2>

        <section>
            <ul class="h-list-unstyled">
                <li>
                    <EventCard />
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    import EventCard from './components/EventCard'

    export default {
        components: {
            EventCard
        }
    }
</script>
