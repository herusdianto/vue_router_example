import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const index = require('components/index.vue');

const routes = [
  { path: '/', component: index },
]

const router = new VueRouter({
  routes // short for routes: routes
})

new Vue({
  router
}).$mount('#app')
