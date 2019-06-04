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

Vue.use(Vuetify);
Vue.use(VueRouter);

Vue.component('home-page', HomePage);

const app = new Vue({
    el: '#app',
    router,
    store
});
