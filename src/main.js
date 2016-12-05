import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const index = require('components/index.vue');
const form = require('components/form.vue');
const user = require('components/user.vue');

const routes = [
    {
        path: '/',
        name: 'index',
        component: index
    },
    {
        path: '/form',
        name: 'form',
        component: form
    },
    {
        path: '/user/:id',
        name: 'user',
        component: user
    },
]

const router = new VueRouter({
  routes // short for routes: routes
})

new Vue({
  router
}).$mount('#app')
