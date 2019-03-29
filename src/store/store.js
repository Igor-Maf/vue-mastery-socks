import Vue from 'vue'
import Vuex from 'vuex'

import * as currentUser from '@/store/modules/current-user'
import * as events from '@/store/modules/events'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        currentUser,
        events
    },
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
        }
    },
    actions: {
        setHours({ commit }) {
            let hours = [];

            for (let i = 0; i <= 24; i++) {
                hours.push(i + ':00');
            }

            commit('SET_HOURS', hours);
        }
    }/* ,
    getters: {
        categoriesLength: state => state.categories.length,
        doneTodos: state => state.todos.filter(todo => todo.done),
        activeTodosCount: (state, getters) => state.todos.length - getters.doneTodos.length // example with using getters in getter
    } */
})
