const router = [
  {
    path: '/center',
    name: 'center',
    component: () => import('../views/Center/center.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home/home.vue')
  },
  {
    path: '/news-add',
    name: 'news-add',
    component: () => import('../views/NewsManage/newsAdd.vue')
  },
  {
    path: '/news-list',
    name: 'news-list',
    component: () => import('../views/NewsManage/newsList.vue')
  },
  {
    path: '/news-edit/:id',
    name: 'news-edit',
    component: () => import('../views/NewsManage/newsEdit.vue')
  },
  {
    path: '/product-add',
    name: 'product-add',
    component: () => import('../views/ProductManage/productAdd.vue')
  },
  {
    path: '/product-list',
    name: 'product-list',
    component: () => import('../views/ProductManage/productList.vue')
  },
  {
    path: '/product-edit/:id',
    name: 'product-edit',
    component: () => import('../views/ProductManage/productEdit.vue')
  },
  {
    path: '/user-add',
    name: 'user-add',
    requiresAuth: true,
    component: () => import('../views/UserManage/userAdd.vue')
  },
  {
    path: '/user-list',
    name: 'user-list',
    requiresAuth: true,
    component: () => import('../views/UserManage/userList.vue')
  },
  {
    path: '/',
    redirect: '/center',
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Notfound',
    component: () => import('../views/error/404.vue')
  }
]

export default router