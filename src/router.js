import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import NotFound from './views/404'

import { EVENTS_ROUTES } from './views/events/routes';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      // alias: '/index'
    },
    {
      path: '/about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/product',
      component: () => import(/* webpackChunkName: "product" */ './views/product/Product.vue')
    },
    {
      path: '*',
      component: NotFound
    },
    EVENTS_ROUTES
  ]
})
