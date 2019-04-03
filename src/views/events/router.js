import Events from './Events'
import EventsList from './views/EventsList'
import Event from './views/Event'
import EventForm from './views/EventForm'

import store from '@/store/store'

// TODO: Refactor it like here https://stackoverflow.com/questions/45370112/vue-js-separate-routes-in-different-files (2 answer)
export const EVENTS_ROUTES = {
    path: '/events',
    component: Events,
    children: [
        {
            path: '',
            redirect: {
                name: 'events-list'
            }
        },
        {
            path: 'list',
            name: 'events-list',
            component: EventsList,
            props: true
        },
        {
            path: 'create',
            component: EventForm
        },
        {
            path: ':id',
            name: 'event',
            component: Event,
            props: true,
            beforeEnter(routeTo, routeFrom, next) {
                store.dispatch('events/fetchEvent', routeTo.params.id)
                    .then(event => {
                        routeTo.params.event = event;
                        next();
                    })
                    .catch(error => {
                        if (error.response && error.response.status == 404) {
                            next({
                                name: '404',
                                params: {
                                    resource: 'event'
                                }
                            })
                        } else {
                            next({ name: 'network-issue' })
                        }
                    })
            }
        }
    ]
};
