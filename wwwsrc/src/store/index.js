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
    myVaults: [],
    vaults: [],
    vaultKeeps: [],
    activeVault: {}
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
    },
    setMyVaults(state, myVaults) {
      state.myVaults = myVaults
    },
    setVaults(state, vaults) {
      state.vaults = vaults
    },
    setVaultKeeps(state, vaultKeeps) {
      state.vaultKeeps = vaultKeeps
    },
    setActiveVault(state, activeVault) {
      state.activeVault = activeVault
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
        console.error(err);
      }
    },

    async getKeeps({ commit, dispatch }) {
      try {
        let res = await api.get("keeps")
        commit("setKeeps", res.data)
      } catch (err) {
        console.error(err);
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
          console.error(err);
        }
        },

        //!SECTION end KEEP POST requests

        //SECTION KEEP PUT requests

        async editKeep({ commit, dispatch }, keepData) {
          try {
          let res = await api.put("keeps/" + keepData.id, keepData)
          dispatch("getKeeps")
        } catch (err) {
          console.error(err);
        }
        },

        //!SECTION end KEEP PUT requests

        //SECTION KEEP DELETE requests

        async deleteKeep({ dispatch }, keepData) {
          try {
            await api.delete("keeps/" + keepData.id)
            dispatch("getMyKeeps")
          } catch (error) {
            console.error(error);
          }
        },

        //!SECTION end KEEP DELETE requests

// ______________________________________________________________________________________
// ______________________________________________________________________________________

        //SECTION VAULT GET requests

        async getVaults({ commit, dispatch }) {
          try {
            let res = await api.get("vaults")
            commit("setVaults", res.data)
          } catch (err) {
            console.error(err);
          }
        },

        async getMyVaults({ commit, dispatch }, userData) {
          try {
            let res = await api.get("vaults/user", userData)
            commit("setMyVaults", res.data)
          } catch (err) {
            console.error(err);
          }
        },

        //!SECTION end VAULT GET requests

        //SECTION VAULT POST requests

        async createVault({ commit, dispatch }, newVault) {
          try {
          let res = await api.post("vaults", newVault)
          dispatch("getMyVaults")
        } catch (err) {
          console.error(err);
        }
        },

        //!SECTION end VAULT POST requests


        //SECTION VAULT DELETE requests
        async deleteVault({ dispatch }, vaultData) {
          try {
            await api.delete("vaults/" + vaultData.id)
            dispatch("getMyVaults")
            router.push("dashboard")
          } catch (error) {
            console.error(error);
          }
        },

        //!SECTION end VAULT DELETE requests
        
// ______________________________________________________________________________________
// ______________________________________________________________________________________

        //SECTION VAULTKEEPS GET requests

        async getVaultKeeps({ commit, dispatch }, vaultData) {
          try {
            let res = await api.get(`vaults/${vaultData.id}/keeps`)
            commit("setVaultKeeps", res.data)
          } catch (err) {
            console.error(err);
          }
        },

        async getMyVaultKeeps({ commit, dispatch }, vaultId) {
          try {
            let res = await api.get(`vaults/${vaultId}/keeps`)
            commit("setVaultKeeps", res.data)
          } catch (err) {
            console.error(err);
          }
        },

        //!SECTION end VAULTKEEPS GET requests

        //SECTION VAULTKEEPS POST requests

        async createVaultKeep({ commit, dispatch }, newVaultKeep) {
          try {
          let res = await api.post("vaultkeeps", newVaultKeep)
          dispatch("getMyVaultKeeps", newVaultKeep.vaultId)
        } catch (err) {
          console.error(err);
        }
        },

        //!SECTION end VAULTKEEPS POST requests

        //SECTION VAULTKEEPS DELETE requests

        async deleteVaultKeep({ commit, dispatch }, vaultKeepId) {
          try {
          let res = await api.delete("vaultkeeps/" + vaultKeepId)
          // dispatch("getVaultKeeps", vault)
        } catch (err) {
          console.error(err);
        }
        },

        //!SECTION end VAULTKEEPS DELETE requests

    }
    });
