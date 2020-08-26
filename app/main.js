import Vue from 'nativescript-vue';
import { registerElement } from 'nativescript-vue';
import App from './App';
import VueDevtools from 'nativescript-vue-devtools';

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools);
}
import store from './store';

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');

registerElement(
  'CardView',
  () => require('nativescript-cardview').CardView
);

new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start();
