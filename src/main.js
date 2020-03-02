import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import App from './App.vue'
import HelloWorld from "./components/HelloWorld.vue"

Vue.use(VueRouter)
Vue.config.productionTip = false

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/', component: HelloWorld }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router,
  components: { App }
}).$mount('#app')
