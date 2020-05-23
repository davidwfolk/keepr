<template>
  <div class="dashboard">
    <h1 class="text-white text-center">Welcome to Your Board {{user.name}}</h1>
    <div class="container-fluid">
      <div class="row">
        <button
          class="btn btn-secondary col-2 align-self-right"
          type="button"
          data-toggle="modal"
          data-target="#createKeepModal"
        >Add a Post</button>
        <Modal title="Create a Post" id="createKeepModal">
          <CreateKeep></CreateKeep>
        </Modal>
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
export default {
  name: "dashboard",
  mounted() {
    this.$store.dispatch("getMyKeeps", this.$auth.user)

  },
  computed: {
    user() {
      return this.$auth.user
    },
    myKeeps() {
      return this.$store.state.myKeeps
    },
  },
  methods: {

  },
  components: {
    Modal,
    CreateKeep,
    KeepDetails,
    Keep
  }
};
</script>

<style></style>
