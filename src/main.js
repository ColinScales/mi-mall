import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import env from '../env'

Vue.use(VueAxios, axios)

axios.defaults.baseURL = env.baseURL;
axios.defaults.timeout = 8000
axios.interceptors.response.use(function (response) {
  let res = response
  if (res.status === 0) {
    return res.data;
  } else if (res.status === 10) {
    window.location.href = '/#login'
  } else {
    alert(res.msg)
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
