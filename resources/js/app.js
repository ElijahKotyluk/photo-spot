/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

require('./bootstrap');

window.Vue = require('vue');

import store from './store';
import HomePage from './components/HomePage';
import Layout from './layout/Layout';

Vue.use(Vuetify);
Vue.use(VueRouter);

Vue.component('layout', Layout);

const routes = [
  {
    path: '/',
    component: HomePage
  }
];

const router = new VueRouter({
  routes
})

const app = new Vue({
    router,
    store
}).$mount('#app');
