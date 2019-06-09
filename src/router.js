import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Wish from './views/Wish.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/wish/:token',
      name: 'wish',
      component: Wish,
    },
  ],
});
