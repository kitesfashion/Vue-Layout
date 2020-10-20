
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {routes} from './Router/index'
import VueRouter from "vue-router"

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


// Vue.use(BootstrapVue)
Vue.use(VueRouter)

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
const router = new VueRouter({
  mode: "history",
  routes: routes,
});

new Vue({
  el: "#app",
  router: router,
  render: (h) => h(App),
});