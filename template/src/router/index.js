import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/demo/index'
    },
    {
      path: '/demo',
      name: 'demo',
      component: require('views/demo/demo.vue'),
      children: [
        {
          path: 'index',
          alias: '/demo',
          component: resolve => require(['views/demo/index.vue'], resolve)
        }
      ]
    }
  ]
})
