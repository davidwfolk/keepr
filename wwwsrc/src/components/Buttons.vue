<template>
  <div class="buttons">
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
          <span 
            class="mx-2"
            data-toggle="modal"
            data-target="#addVaultModal"
            @click="VaultButton()"
            >
            <i class="fas fa-download bg-warning p-3"></i>
          </span>
          <Modal title="Add to Your Locker" id="addVaultModal">
              <Vault :keepData="keepData"></Vault>
            </Modal>
          <span class="mx-2">
            <i class="fas fa-share bg-primary p-3"></i>
          </span>
        </li>

  </div>
</template>


<script>
import KeepDetails from "../components/KeepDetails"
import Modal from "../components/Modal"
import Vault from "../components/Vault"
export default {
  name: 'buttons',
  props:["keepData"],
  data(){
    return {}
  },
  computed:{
  },
  methods:{
    getActiveKeep() {
      this.keepData.views += 1,
      this.$store.dispatch("editKeep", this.keepData )
      this.$store.commit("setActiveKeep", this.keepData)
    },
    VaultButton() {
      this.$store.commit("setActiveKeep", this.keepData)
      this.$store.dispatch("getMyVaults", this.keepData.userId) 
    }
  },
  components:{
    KeepDetails,
    Modal,
    Vault
  }
}
</script>


<style scoped>

</style>