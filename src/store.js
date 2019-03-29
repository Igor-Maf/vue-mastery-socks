import Vue from 'vue'
import Vuex from 'vuex'

import { EventBus } from '@/event-bus';
import EventsService from '@/services/EventsService'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        categories: [
            'sustainability',
            'nature',
            'animal welfare',
            'housing',
            'education',
            'food',
            'community'
        ],
        hours: [],
        user: {
            id: '1',
            name: 'Ihor Gevorkyan',
            role: 'admin'
        },
        events: [],
        /* todos: [
            {
                id: 1,
                text: 'Todo #1',
                done: false
            },
            {
                id: 2,
                text: 'Todo #2',
                done: true
            },
            {
                id: 3,
                text: 'Todo #3',
                done: true
            },
            {
                id: 4,
                text: 'Todo #4',
                done: false
            },
            {
                id: 5,
                text: 'Todo #5',
                done: true
            },
            {
                id: 6,
                text: 'Todo #6',
                done: false
            }
        ] */
    },
    mutations: {
        ADD_EVENT(state, event) {
            state.events.push(event);
        },
        SET_EVENTS(state, events) {
            state.events = events;
        },
        SET_HOURS(state, hours) {
            state.hours = hours;
        }
    },
    actions: {
        setHours({ commit }) {
            let hours = [];

            for (let i = 0; i <= 24; i++) {
                hours.push(i + ':00');
            }

            commit('SET_HOURS', hours);
        },
        addEvent({ commit }, event) {
            return EventsService.addEvent(event).then(() =>
                commit('ADD_EVENT', event)
            )
        },
        fetchEvents({ commit }) {
            EventsService.getEvents()
                .then(response => commit('SET_EVENTS', response.data))
                .catch(error => { // TODO: Create middleware for errors
                    EventBus.$emit('add-notification', {
                        type: 'error',
                        text: error.response.status + ': ' + error.response.statusText
                    })
                })
        }
    },
    getters: {
        categoriesLength: state => state.categories.length,
        getEventByID: state => id => state.events.find(event => event.id === id),
        /* doneTodos: state => state.todos.filter(todo => todo.done),
        activeTodosCount: (state, getters) => state.todos.length - getters.doneTodos.length // example with using getters in getter */
    }
})
