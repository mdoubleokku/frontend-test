import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import TemplateForum from '@/components/TemplateForum'
import CSSStyling from '@/components/CSSStyling'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/TemplateForum',
      name: 'TemplateForum',
      component: TemplateForum
    },
    {
      path: '/',
      name: 'CSSStyling',
      component: CSSStyling
    }, 
  ]
})
