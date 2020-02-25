import Vue from 'vue'
import App from './App.vue'
import store from './store'
Vue.config.productionTip = false;
import 'normalize-css';


import {locale} from './api/locale.js';
const lang = (locale[Vue.$cookies.get('language')] && Vue.$cookies.get('language')) || 'ru-ru';
const text = locale[lang];
Vue.prototype.$text = text;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

