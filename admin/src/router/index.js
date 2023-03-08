import { createRouter, createWebHashHistory } from 'vue-router'
import routerConfig from './config'
import store from '../store/index'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/login.vue')
  },
  {
    path: '/mainbox',
    name: 'mainbox',
    component: () => import('../views/MainBox/mainBox.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    next()
  } else {
    if (!localStorage.getItem('token')) {
      next({
        path: 'login'
      })
    } else {
      if (!store.state.isGetterRouter) {
        router.removeRoute('mainbox')
        config()
        next({
          path: to.fullPath
        })
      } else {
        next()
      }
    }
  }
})

const config = () => {

  if (!router.hasRoute('mainbox')) {
    router.addRoute({
      path: '/mainbox',
      name: 'mainbox',
      component: () => import('../views/MainBox/mainBox.vue')
    })
  }

  routerConfig.forEach((item) => {
    judge(item) && router.addRoute('mainbox', item)
  })
  store.commit('changGetterRouter', true)
}

const judge = (item) => {
  if (item.requiresAuth) {
    return store.state.userInfo.role === 1
  } else {
    return true
  }
}

export default router
