import Vue from 'vue'
import App from './App.vue'
import SegiTips from './components/Tips/index.js'
Vue.use(SegiTips)

new Vue({
  el: '#app',
  render: h => h(App)
})
