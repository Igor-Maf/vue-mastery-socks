import Vue from 'vue'
import Vuex from 'vuex'

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
        times: []
        /* user: {
            id: '1',
            name: 'Ihor Gevorkyan',
            role: 'admin'
        },
        events: [
            { id: 1, title: 'Event #1', organizer: 'Ihor Gevorkyan' },
            { id: 2, title: 'Event #2', organizer: 'Ms. Smith' },
            { id: 3, title: 'Event #3', organizer: 'Ihor Gevorkyan' }
        ],
        todos: [
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
    mutations: {},
    actions: {},
    getters: {
        /* categoriesLength: state => state.categories.length,
        getEventByID: state => id => state.events.find(event => event.id === id),
        doneTodos: state => state.todos.filter(todo => todo.done),
        activeTodosCount: (state, getters) => state.todos.length - getters.doneTodos.length // example with using getters in getter */
    }
})
