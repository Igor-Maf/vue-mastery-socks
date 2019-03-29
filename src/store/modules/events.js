import { EventBus } from '@/event-bus';
import EventsService from '@/services/EventsService'

export const namespaced = true;

export const state = {
    events: [],
    eventsTotal: 0,
    event: null
};

export const mutations = {
    ADD_EVENT(state, event) {
        state.events.push(event);
    },
    SET_EVENTS(state, events) {
        state.events = events;
    },
    SET_TOTAL(state, total) {
        state.eventsTotal = total;
    },
    SET_EVENT(state, event) {
        state.event = event;
    }
};

export const actions = {
    addEvent({ commit, dispatch, rootState }, event) {
        const preparedData = {
            ...event,
            user: rootState.currentUser.user
        };

        return EventsService.addEvent(preparedData).then(() => {
            commit('ADD_EVENT', preparedData);
            dispatch('currentUser/setCreatorValue', true, {root: true});
        })
    },

    fetchEvents({ commit, rootState }, pageNumber) {
        EventsService.getEvents(rootState.perPage, pageNumber)
            .then(response => {
                commit('SET_TOTAL', +response.headers['x-total-count']);
                commit('SET_EVENTS', response.data);
            })
            .catch(error => { // TODO: Create middleware for errors
                EventBus.$emit('add-notification', {
                    type: 'error',
                    text: error.response.status + ': ' + error.response.statusText
                })
            })
    },

    fetchEvent({ commit, getters }, id) {
        let event = getters.getEventByID(id);

        event
            ? commit('SET_EVENT', event)
            : EventsService.getEvent(id)
                .then(response => commit('SET_EVENT', response.data))
                .catch(error => {
                    EventBus.$emit('add-notification', {
                        type: 'error',
                        text: error.response.status + ': ' + error.response.statusText
                    })
                })
    }
};

export const getters = {
    getEventByID: state => id => state.events.find(event => event.id === id)
};
