import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }],
  },
	{
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '/about', component: () => import('pages/About.vue') }],
  },
	{
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '/cart', component: () => import('pages/Cart.vue') }],
  },
	{
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '/checkout', component: () => import('pages/Checkout.vue') }],
  },
	{
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '/privacy', component: () => import('pages/Privacy.vue') }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
