import Vue from "vue";
import Vuex from "vuex";
import request from "@/request";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    status: "",
    user: localStorage.getItem("user") || "",
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, user) {
      state.status = "success";
      state.user = user;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.user = "";
    },
  },
  actions: {
    login({ commit }, data) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        request
          .post("login", data)
          .then((resp) => {
            if (resp.user) {
              const user = resp.user;
              localStorage.setItem("user", user);
              commit("auth_success", user);
            } else {
              commit("logout");
              commit("auth_error");
              localStorage.removeItem("user");
            }
            resolve(resp);
          })
          .catch((err) => {
            commit("auth_error");
            localStorage.removeItem("user");
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        request
          .get("logout")
          .then((resp) => {
            localStorage.removeItem("user");
            commit("logout");
            resolve(resp);
          })
          .catch((err) => {
            localStorage.removeItem("user");
            commit("logout");
            commit("auth_error");
            reject(err);
          });
      });
    },
    check({ commit }) {
      return new Promise((resolve, reject) => {
        request
          .get("check")
          .then((resp) => {
            if (resp.user) {
              const user = resp.user;
              localStorage.setItem("user", user);
              commit("auth_success", user);
            } else {
              commit("logout");
              localStorage.removeItem("user");
              commit("auth_error");
            }
            resolve(resp);
          })
          .catch((err) => {
            commit("auth_error");
            localStorage.removeItem("user");
            commit("logout");
            reject(err);
          });
      });
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.user,
    loggedUser: (state) => state.user,
    authStatus: (state) => state.status,
  },
});

export default store;
