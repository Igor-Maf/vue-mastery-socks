import {apiClient} from "../api-client";

export default {
    getEvents() {
        return apiClient.get('/events')
    },

    getEvent(id) {
        return apiClient.get('/events/' + id)
    },

    addEvent(event) {
        return apiClient.post('/events', event)
    }
}
