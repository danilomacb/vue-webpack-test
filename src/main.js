import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Page1 from './components/Page1.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/page1', component: Page1 }
]

const router = new VueRouter({
  routes
})

Vue.component('home', Home)
Vue.component('page1', Page1)

new Vue({
  render: h => h(App),
  router,
  components: { App }
}).$mount('#app')
