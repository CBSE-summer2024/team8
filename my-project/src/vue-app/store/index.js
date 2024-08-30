// src/store/index.js

import { createStore } from 'vuex';
import { login, register } from '@/services/authService';

const store = createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    LOGOUT_USER(state) {
      state.user = null;
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
      try {
        const user = await login(email, password);
        commit('SET_USER', user);
      } catch (error) {
        console.error(error.message);
      }
    },
    async register({ commit }, { firstName, lastName, email, password }) {
      try {
        const user = await register(firstName, lastName, email, password);
        commit('SET_USER', user);
      } catch (error) {
        console.error(error.message);
      }
    },
    logout({ commit }) {
      commit('LOGOUT_USER');
    },
  },
});

export default store;