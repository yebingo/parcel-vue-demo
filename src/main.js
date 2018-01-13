import Vue from 'vue';
import router from './router';
import App from './App.vue';
import store from './store/index';

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store,
});
