/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Moment from 'moment';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

require('./bootstrap');

window.Vue = require('vue');

import store from './store';
import Chat from './components/Chat';
import HomePage from './components/HomePage';
import ImageDetails from './components/ImageDetails';
import Layout from './layout/Layout';

Vue.use(Vuetify);
Vue.use(VueRouter);

Vue.component('layout', Layout);
Vue.component('chat', Chat);

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: ImageDetails
  }
];

const router = new VueRouter({
  routes
});

Vue.filter('formatDate',
  value => value ? moment(String(value)).fromNow() : ''
);

const app = new Vue({
    el: '#app',
    router,
    store
});
