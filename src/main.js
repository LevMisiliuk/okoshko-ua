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
  let lang = to.params.lang;
  const supportedLocales = ['ua', 'en', 'ru'];

  if (!supportedLocales.includes(lang)) {
    const browserLanguage = navigator.language.slice(0, 2); // Получаем язык браузера
    // Устанавливаем язык на основе языка браузера или по умолчанию используем 'en'
    lang = supportedLocales.includes(browserLanguage) ? browserLanguage : 'en';

    const savedLocale = localStorage.getItem('lang') || lang;
    i18n.global.locale.value = savedLocale;
    if (to.path === '/') return next(`/${savedLocale}`);
  }

  if (i18n.global.locale.value !== lang) {
    i18n.global.locale.value = lang;
  }

  return next();
});

const app = createApp(App);

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
  .mount('#app');

// Options
Vue3Mq.updateBreakpoints({
  preset: "bootstrap5"
});
