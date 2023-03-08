import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 关闭加载圈
NProgress.configure({ showSpinner: false })

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home/home.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/News/news.vue')
  },
  {
    path: '/newdetails/:id',
    name: 'newdetails',
    component: () => import('../views/News/newDetails.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/Product/product.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to,from,next)=>{
  NProgress.start()
  next()
})

router.afterEach((to,from,next)=>{
  NProgress.done()
})

export default router
