<template>
  <div class="keep col-md-3 m-3 pt-2 card text-center">
      <img :src="keepData.img" class="img-fluid" />
      <div class="card-body text-bottom pb-0">
        <h5 class="card-title text-center">{{keepData.name}}</h5>
        <!-- <p class="card-text">{{keep.description}}</p> -->
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <span class="mx-3">
            <i class="far fa-eye"></i>
            : {{keepData.views}}
          </span>
          <span class="mx-3">
            <i class="fas fa-share"></i>
            : {{keepData.shares}}
          </span>
          <span class="mx-3">
            <i class="fas fa-download"></i>
            : {{keepData.keeps}}
          </span>
        </li>
        <li class="list-group-item">
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
          <!-- <Modal title="Post Details" id="keepDetailsModal">
              <Vault></Vault>
            </Modal> -->
          <span class="mx-2">
            <i class="fas fa-download bg-primary p-3"></i>
          </span>
        </li>
      </ul>
  </div>
</template>


<script>
import Modal from "../components/Modal"
import KeepDetails from "../components/KeepDetails"
// import Vault from "../forms/Vault"
export default {
  name: 'keep',
  props: ["keepData"],
  data() {
    return {}
  },
  computed: {},
  methods: {
    getActiveKeep() {
      this.keepData.views += 1,
      this.$store.dispatch("editKeep", this.keepData )
      this.$store.commit("setActiveKeep", this.keepData)
      
    }
  },
  components: {
    Modal,
    KeepDetails,
    // Vault
  }
}
</script>


<style scoped>
</style>