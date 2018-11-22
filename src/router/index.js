import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/auth/Login'
import List from '@/components/post/List'
import Create from '@/components/post/Create'
import Edit from '@/components/post/Edit'
import store from '../store/index'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'post_list',
      component: List
    },
    {
      path: '/post-create',
      name: 'post_create',
      component: Create
    },
    {
      path: '/post-edit',
      name: 'post_edit',
      component: Edit
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !store.state.authenticated) {
    next({name: 'login'})
  }
  next()
})

export default router
