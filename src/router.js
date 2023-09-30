import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppPageStatusCode from './pages/AppPageStatusCode.vue'

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {
            path : '/',
            name : 'home',
            component : AppHome
        },
        {
            path: '/404', 
            name: '404', 
            component: AppPageStatusCode
        },
        {
            path: '/:catchAll(.*)', redirect:'404'
        },
    ],
});

export {router};