<template>
  <div class="keep col-md-3 m-3 pt-2 card text-center">
      <img :src="vaultKeepData.img" class="img-fluid" />
      <div class="card-body text-bottom pb-0">
        <h5 class="card-title text-center">{{vaultKeepData.name}}</h5>
        <!-- <p class="card-text">{{keep.description}}</p> -->
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <span class="mx-2">
            <i class="far fa-eye"></i>
            : {{vaultKeepData.views}}
          </span>
          <span class="mx-2">
            <i class="fas fa-download"></i>
            : {{vaultKeepData.keeps}}
          </span>
          <span class="mx-2">
            <i class="fas fa-share"></i>
            : {{vaultKeepData.shares}}
          </span>
        </li>
        <!-- <li class="list-group-item">
          <span
            class="mx-2"
            data-toggle="modal"
            data-target="#keepDetailsModal"
            @click="getActiveKeep()"
          >
            <i class="far fa-eye text-white bg-info p-3"></i>
          </span>
            <Modal title="Post Details" id="keepDetailsModal">
              <KeepDetails></KeepDetails>
            </Modal>
          <span class="mx-2">
            <i class="fas fa-share bg-warning p-3"></i>
          </span>
          <Modal title="Post Details" id="keepDetailsModal">
              <Vault></Vault>
            </Modal>
          <span class="mx-2">
            <i class="fas fa-download bg-primary p-3"></i>
          </span>
        </li> -->
        <Buttons :keepData="vaultKeepData"></Buttons>
        <li class="list-group-item">
          <button class="btn btn-danger" @click="removeFromLocker()">
            Remove from Locker     
          </button>

        </li>
      </ul>
  </div>
</template>


<script>
import Modal from "../components/Modal"
import KeepDetails from "../components/KeepDetails"
import Buttons from "../components/Buttons"
// import Vault from "../forms/Vault"
export default {
  name: 'keep',
  props: ["vaultKeepData"],
  data() {
    return {}
  },
  mounted() {
    return this.$store.state.vaultKeeps
  },
  computed: {
  },
  methods: {
    removeFromLocker() {
      this.$store.dispatch("deleteVaultKeep", this.vaultKeepData.vaultKeepId)
      this.$store.dispatch("getMyVaultKeeps", this.$route.params.vaultId)
    }
  },
  components: {
    Modal,
    KeepDetails,
    Buttons,
    // Vault
  }
}
</script>


<style scoped>
</style>