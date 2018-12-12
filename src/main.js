import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false
NProgress.configure({
  easing: 'ease',
  speed: 500
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next()
});

router.afterEach(transition => {
  NProgress.done();
});

new Vue({
  VueAwesomeSwiper,
  router,
  render: h => h(App)
}).$mount('#app')