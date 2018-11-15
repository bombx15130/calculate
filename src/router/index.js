import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloPaul from '@/components/HelloPaul'
import HelloVue from '@/components/HelloVue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/HelloPaul',
      name: 'HelloPaul',
      component: HelloPaul
    },
    {
      path: '/HelloVue',
      component: HelloVue
    }
  ]
})
