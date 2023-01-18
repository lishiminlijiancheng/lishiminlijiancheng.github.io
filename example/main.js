import Vue from 'vue'
import App from './App.vue'
import '../components/css/demo.scss'
import '../components/css/card.scss'
import Demo from '../components/lib/demo/index'
import Card from '../components/lib/card'
Vue.config.productionTip = false
Vue.use(Demo)
Vue.use(Card)
new Vue({
  render: h => h(App),
}).$mount('#app')
