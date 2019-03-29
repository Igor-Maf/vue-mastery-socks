import Vue from 'vue'
import Vuex from 'vuex'

import { EventBus } from '@/event-bus';
import { EVENTS_STORE } from '@/views/events/store'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        perPage: 4,
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
        ...EVENTS_STORE.state
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
        SET_HOURS(state, hours) {
            state.hours = hours;
        },
        ...EVENTS_STORE.mutations
    },
    actions: {
        setHours({ commit }) {
            let hours = [];

            for (let i = 0; i <= 24; i++) {
                hours.push(i + ':00');
            }

            commit('SET_HOURS', hours);
        },
        ...EVENTS_STORE.actions
    },
    getters: {
        categoriesLength: state => state.categories.length,
        ...EVENTS_STORE.getters
        /* doneTodos: state => state.todos.filter(todo => todo.done),
        activeTodosCount: (state, getters) => state.todos.length - getters.doneTodos.length // example with using getters in getter */
    }
})
