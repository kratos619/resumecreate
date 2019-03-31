import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
//import 'bootstrap/dist/css/bootstrap.css'

//import Vuetify from 'vuetify'

//Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')