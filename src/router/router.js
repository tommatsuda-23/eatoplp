import Vue from 'vue'
import Router from 'vue-router'
import top from '@/components/top'
import about from '@/components/about'
import event from '@/components/event'
import trace from '@/components/trace'

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
      path: '/trace',
      name: 'trace',
      component: trace
    }
  ]
})
