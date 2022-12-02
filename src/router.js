import { createRouter, createWebHistory } from 'vue-router'
import MainComponent from './components/MainComponent'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:lang',
      children: [
        { path: '', component: MainComponent }
      ]
    }
  ],
  scrollBehavior (to) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth'
      };
    }
    return { x: 0, y: 0 };  // Go to the top of the page if no hash
  }
})