import { createApp } from 'vue'
import App from './App.vue'
const Vue3Mq = require('vue3-mq');
import { MotionPlugin } from '@vueuse/motion'
import router from './router'
import i18n from './i18n'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import VueSmoothScroll from 'vue3-smooth-scroll'
import VueGtag from "vue-gtag";

router.beforeEach((to, from, next) => {
  const lang = to.params.lang;

  if (!['ua', 'en'].includes(lang)) {
    const locale = localStorage.getItem('lang') || 'ua'
    i18n.global.locale.value = locale
    if (to.path === '/') return next(`/${locale}`)
  }

  if (i18n.global.locale.value !== lang) {
    i18n.global.locale.value = lang;
  }

  return next();
})

const app = createApp(App)

app
  .component('MqResponsive', Vue3Mq.MqResponsive)
  .use(MotionPlugin)
  .use(router)
  .use(VueGtag, {
    appName: 'okoshko.ua',
    config: { id: "G-5Y755Z2J8D" }
  })
  .use(i18n)
  .use(Toast)
  .use(VueSmoothScroll)
  .mount('#app')

// Options
Vue3Mq.updateBreakpoints({
  preset: "bootstrap5"
})