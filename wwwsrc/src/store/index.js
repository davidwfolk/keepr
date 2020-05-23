//@ts-ignore
import Vue from "vue";
//@ts-ignore
import Vuex from "vuex";
//@ts-ignore
import Axios from "axios";
//@ts-ignore
import router from "../router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "https://localhost:5001/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api/",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    keeps: [],
    myKeeps: [],
    activeKeep: {},
    profile: {}
  },
  mutations: {
    setKeeps(state, keeps) {
      state.keeps = keeps
    },
    setMyKeeps(state, myKeeps) {
      state.myKeeps = myKeeps
    },
    setActiveKeep(state, activeKeep) {
      state.activeKeep = activeKeep
    },
    setProfile(state, profile) {
    }

  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },

    //SECTION KEEP GET requests
    async getMyKeeps({ commit, dispatch }) {
      try {
        let res = await api.get("keeps")
        debugger
        commit("setMyKeeps", res.data)
      } catch (err) {
        alert(JSON.stringify(err));
      }
    },

    async getKeeps({ commit, dispatch }) {
      try {
        let res = await api.get("keeps")
        commit("setKeeps", res.data)
      } catch (err) {
        alert(JSON.stringify(err));
      }
    },
        //!SECTION end KEEP GET requests

        //SECTION KEEP POST requests

        //!SECTION end KEEP POST requests

        //SECTION KEEP PUT requests

        //!SECTION end KEEP PUT requests

        //SECTION KEEP DELETE requests

        //!SECTION end KEEP DELETE requests



        //SECTION VAULT GET requests

        //!SECTION end VAULT GET requests

        //SECTION VAULT POST requests

        //!SECTION end VAULT POST requests

        //SECTION VAULT PUT requests

        //!SECTION end VAULT PUT requests

        //SECTION VAULT DELETE requests

        //!SECTION end VAULT DELETE requests


    }
    });
