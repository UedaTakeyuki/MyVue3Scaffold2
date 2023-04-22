import { createApp } from 'vue'
import App from './App.vue'
import Home from '/src/views/Home.vue'
import About from '/src/views/About.vue'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import './assets/main.css'

// router
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  //history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

// vuetify
const { createVuetify } = Vuetify
// import { createVuetify } from 'vuetify'
const vuetify = createVuetify()
createApp(App).use(router).use(vuetify).mount('#app')
