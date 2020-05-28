<template>
  <div class="dashboard">
    <h3 class="text-white text-center mt-3">Welcome to Your Locker Room {{user.name}}</h3>
    <div class="container-fluid">
      <div class="row justify-content-center mb-3">
        <button
          class="btn btn-secondary mt-3 col-md-2 mr-auto ml-5"
          type="button"
          data-toggle="modal"
          data-target="#createKeepModal"
        >Create a Post</button>
        <Modal title="Create a Post" id="createKeepModal">
          <CreateKeep></CreateKeep>
        </Modal>
        <button
          class="btn btn-secondary mt-3 col-md-2 ml-auto mr-5"
          type="button"
          data-toggle="modal"
          data-target="#createVaultModal"
        >Create a Locker</button>
        <Modal title="Create a Locker" id="createVaultModal">
          <CreateVault class="text-center m-auto" :keepData="myKeeps"></CreateVault>
        </Modal>
      </div>
      <div class="row justify-content-center">
        <h4 class="text-primary text-center my-3">Your Lockers</h4>
      </div>
      <div class="row">
        <DisplayVaults v-for="vault in myVaults" :key="vault.id" :vaultData="vault"></DisplayVaults>
      </div>
      <div class="row justify-content-center mt-3">
        <h4 class="text-primary text-center my-3">Your Posts</h4>
      </div>
      <div class="row justify-content-center">
        <Keep v-for="keep in myKeeps" :key="keep.id" :keepData="keep"></Keep>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal.vue"
import CreateKeep from "../forms/CreateKeep.vue"
import KeepDetails from "../components/KeepDetails"
import Keep from "../components/Keep"
import DisplayVaults from "../components/DisplayVaults"
import CreateVault from "../forms/CreateVault"
export default {
  name: "dashboard",
  mounted() {

    this.$store.dispatch("getMyKeeps", this.$auth.user),
      this.$store.dispatch("getMyVaults")
  },
  computed: {
    user() {
      return this.$auth.user
    },
    myKeeps() {
      return this.$store.state.myKeeps
    },
    myVaults() {
      return this.$store.state.myVaults
    },
  },
  methods: {

  },
  components: {
    Modal,
    CreateKeep,
    KeepDetails,
    Keep,
    DisplayVaults,
    CreateVault,
  }
};
</script>

<style></style>
