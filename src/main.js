// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
// const GreetingComponent = { template: `<h1>Hi, you!</h1>` }
// This manages the whole app

new Vue({
  el: '#app',
  router,
  store,
  template: '<App />',
  components: { App }
})
// the store line can also be done using store:store but since we are using ES6 it will automatically
// assign it using the same name
