import Vue from 'vue'
import Router from 'vue-router'
import nprogress from 'nprogress'

import NetworkIssue from './views/NetworkIssue'
import NotFound from './views/404'
import { EVENTS_ROUTES } from './views/events/router'
import Example from './views/Example'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '',
            redirect: '/product'
        },
        {
            path: '/product',
            // route level code-splitting
            // this generates a separate chunk (product.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "product" */ './views/product/Product.vue'),
            // alias: '/index'
        },
        {
            path: '/404',
            name: '404',
            component: NotFound,
            props: true
        },
        {
            path: '/network-issue',
            name: 'network-issue',
            component: NetworkIssue
        },
        EVENTS_ROUTES,
        {
            path: '/example',
            component: Example
        },
        {
            path: '*',
            redirect: {
                name: '404',
                params: {
                    resource: 'page'
                }
            }
        }
    ]
});

router.beforeEach((routeTo, routeFrom, next) => {
    nprogress.start();
    next();
});

router.afterEach(() => nprogress.done());

export default router;
