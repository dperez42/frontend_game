//import { createApp } from 'vue'
//import Vue from 'vue'

import Vue, { createApp } from '@vue/compat';

import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// instal  para quitar error de version "@vue/compat": "^3.2.41",
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

createApp(App).mount('#app')
