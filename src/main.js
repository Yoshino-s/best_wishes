import Vue from 'vue';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
// eslint-disable-next-line
import 'typeface-roboto';

// import eruda from 'eruda';

import App from './App.vue';
import router from './router';

// eruda.init();

Vue.config.productionTip = false;
Vue.use(MuseUI);

new Vue({
  router,
  render(h) { return h(App); },
}).$mount('#app');
