import Events from './Events';
import EventsList from './views/EventsList';
import Event from './views/Event';
import EventForm from './views/EventForm';

import store from '@/store/store'

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
            }
        }
    ]
};
