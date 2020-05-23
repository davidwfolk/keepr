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
    async getMyKeeps({ commit, dispatch }, userData) {
      try {
        let res = await api.get("keeps/user", userData)
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

    // async getActiveKeep ({commit}, keepId) {
    //   try {
    //     debugger
    //     let res = await api.get("keeps" + keepId)
    //     commit("setActiveKeep", res.data)
    //   } catch (err) {
    //     alert(JSON.stringify(err));
    //   }
    // },
        //!SECTION end KEEP GET requests

        //SECTION KEEP POST requests
        
        async createKeep({ commit, dispatch }, newKeep) {
          try {
          let res = await api.post("keeps", newKeep)
          dispatch("getMyKeeps")
        } catch (err) {
          alert(JSON.stringify(err));
        }
        },

        //!SECTION end KEEP POST requests

        //SECTION KEEP PUT requests

        async editKeep({ commit, dispatch }, keepData) {
          try {
          let res = await api.put("keeps/" + keepData.id, keepData)
          dispatch("getKeeps")
        } catch (err) {
          alert(JSON.stringify(err));
        }
        },

        //!SECTION end KEEP PUT requests

        //SECTION KEEP DELETE requests

        async deleteKeep({ dispatch }, keepData) {
          try {
            await api.delete("keeps/" + keepData.id)
            dispatch("getMyKeeps")
          } catch (error) {
            alert(JSON.stringify(error.response.data));
          }
    
        },

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
