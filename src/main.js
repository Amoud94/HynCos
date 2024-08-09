import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import moment from "moment";
import Icn from "./components/Icn.vue";
import _, { result } from "lodash";


Vue.component("Icn", Icn);


Vue.config.productionTip = false
import axios from "./plugins/axios.js";
import './assets/tailwind.css'
Vue.prototype.$http = axios;

Object.defineProperty(Vue.prototype, "$_", { value: _ });
Object.defineProperty(Vue.prototype, "$moment", { value: moment });

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')