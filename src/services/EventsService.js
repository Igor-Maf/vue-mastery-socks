import {apiClient} from "../api-client";

export default {
    getEvents(perPage, pageNumber) {
        return apiClient.get(`/events?_limit=${perPage}&_page=${pageNumber}`)
    },

    getEvent(id) {
        return apiClient.get('/events/' + id)
    },

    addEvent(event) {
        return apiClient.post('/events', event)
    }
}
