import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import LoginPage from '../pages/LoginPage.vue'
import RegistrationPage from '../pages/RegistrationPage'

const routes = [
  {
    path: '/HomePage',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/RegistrationPage',
    name: 'RegistrationPage',
    component: RegistrationPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
