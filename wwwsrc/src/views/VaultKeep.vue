<template>
  <div class="vaultkeep text-center">
    <h1 class="text-white text-center">Welcome to the Lockroom</h1>
    <h4 class="text-white text-center">Here are the saved posts in the {{vaultData.name}} locker</h4>
    <button class="btn btn-danger" @click="deleteVault()">
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