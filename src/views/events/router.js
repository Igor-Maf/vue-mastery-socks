import Events from './Events';
import EventsList from './views/EventsList';
import Event from './views/Event';
import EventForm from './views/EventForm';

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
            component: EventsList
        },
        {
            path: 'create',
            component: EventForm
        },
        {
            path: ':id',
            name: 'event',
            component: Event,
            props: true
        }
    ]
};
