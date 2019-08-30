import Vue from 'vue';
import Router from 'vue-router';
import Refreshing from './refreshing'
import Home from './homeRouter'

Vue.use(Router);

export default new Router({
  // mode  : 'history',
  // base  : process.env.BASE_URL,

  routes: [
      ...Refreshing,
      ...Home
  ],
});
