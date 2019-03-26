<template>
    <div>
        <h2>List of Events</h2>

        <ul>
            <li>
                <router-link :to="{name: 'event', params: {id: '1'}}">Event #1</router-link>
            </li>
        </ul>
    </div>
</template>
