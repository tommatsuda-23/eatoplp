import Vue from 'vue'
import Router from 'vue-router'

import top from '@/views/top'
import about from '@/views/about'
import event from '@/views/event'
import logs from '@/views/logs'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'top',
      component: top
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/event',
      name: 'event',
      component: event
    },
    {
      path: '/logs',
      name: 'logs',
      component: logs
    }
  ]
})
