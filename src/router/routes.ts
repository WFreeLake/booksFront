import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }],
  },
	{
    path: '/catalog',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Catalog.vue') }],
  },
	{
    path: '/categories',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/Categories.vue') }],
  },
	{
    path: '/search',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Search.vue') }],
  },
	{
    path: '/favorits',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/Favorits.vue') }],
  },
	{
    path: '/cart',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Cart.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
