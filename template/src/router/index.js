import Vue from 'vue'
import Router from 'vue-router'
import {setDocumentTitle} from 'utils/index'
import { share } from 'utils/wx'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'demo',
      component: require('views/demo/index').default,
      meta: {
        title: '测试'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) setDocumentTitle(to.meta.title)
  next()
  setTimeout(() => share(), 10)
})

export default router
