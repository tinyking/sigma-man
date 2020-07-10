import Layout from '@/layout/Layout.vue';
import Home from '@/views/Home/Home.vue';
import CronView from '@/views/tools/Cron/CronView.vue';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import MainContent from '@/views/Content/MainContent.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [{ path: '', component: Home }]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/tools',
    name: 'Tools',
    component: Layout,
    children: [{ path: 'cron', component: CronView }]
  },
  {
    path: '/docs',
    component: Layout,
    children: [{ path: 'index', component: MainContent }]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
