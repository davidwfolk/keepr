<template>
  <div class="vaultkeep text-center">
    <h1 class="text-white text-center mt-2 mb-4">All golf gear in your {{vaultData.name}} locker </h1>
    <button class="btn btn-danger mb-4" @click="deleteVault()">
      Delete this Locker
    </button>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <VKeep v-for="vaultKeep in vaultKeeps" :key="vaultKeep.id" :vaultKeepData="vaultKeep"></VKeep>
      </div>
    </div>
  </div>
</template>


<script>
import DisplayVaults from "../components/DisplayVaults"
import VKeep from "../components/VKeep"
export default {
  name: 'vaultkeep',
  data() {
    return {}
  },
  mounted(){
  },
  computed: {
    user() {
      return this.$auth.user;
    },
    vaultKeeps() {
      return this.$store.state.vaultKeeps;
    },
    vaultData() {
      return this.$store.state.activeVault
    }

  },
  methods: {
    deleteVault() {
      this.$store.dispatch("deleteVault", this.vaultData)
    }
  },
  components: {
    DisplayVaults,
    VKeep
  }
}
</script>


<style scoped>
</style>