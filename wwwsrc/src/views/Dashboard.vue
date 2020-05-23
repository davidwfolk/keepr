<template>
  <div class="dashboard">
    <h1 class="text-white text-center">Welcome to Your Board {{user.name}}</h1>
    <div class="container">
      <div class="row">
        <button
          class="btn btn-secondary col-2 align-self-right"
          type="button"
          data-toggle="modal"
          data-target="#createKeepModal"
        >Add a Post</button>
        <Modal title="Create a Post" id="createKeepModal">
          <CreateKeep />
        </Modal>
      </div>
      <div class="row card-deck">
        <div class="col-3 m-3 pt-2 card" v-for="keep in myKeeps" :key="keep.id" :keepData="keep">
          <img :src="keep.img" class="img-fluid" />
          <p>{{keep.name}}</p>
          <p>{{keep.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal.vue"
import CreateKeep from "../forms/CreateKeep.vue"
export default {
  name: "dashboard",
  mounted() {
    this.$store.dispatch("getMyKeeps")
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
    CreateKeep
  }
};
</script>

<style></style>
