import Vue from 'vue'
import Router from 'vue-router'

import top from '@/views/top'
import about from '@/views/about'
import event from '@/views/event'
import logs from '@/views/logs'

import log from '@/components/log'

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
      component: logs,
      children: [{
        path: '/:id',
        component: log
      }]
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    const position = savedPosition || { x: 0, y: 0 }
    return new Promise((resolve, reject) => {
      this.app.$root.$once('triggerScroll', () => {
        this.app.$nextTick(() => {
          window.scrollTo({ top: position.y, left: position.x })
          resolve(position)
        })
      })
    })
  }
})
