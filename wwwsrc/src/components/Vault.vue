<template>
  <div class="vault">
    <div class="row">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >Choose from a vault below</button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item"
          v-for="vault in vaults"
          :key="vault._id"
          :vaultData="vault"
          href="#"
          @click="addToVault()"
        >{{vault.name}}</a>
      </div>
    </div>
    <div class="row">
      <h4>or create a new one</h4>
      <CreateVault :keepData="keepData"></CreateVault>
    </div>
  </div>
</template>


<script>
import CreateVault from "../forms/CreateVault"
export default {
  name: 'vault',
  props: ["keepData"],
  data() {
    return {}
  },
  mounted() {
    this.$store.dispatch("getVaults", this.$auth.user)
  },
  computed: {
    vaults() {
      return this.$store.state.vaults     
    },
    activeKeep(){
      return this.$store.state.activeKeep
    }
  },
  methods: {
     addToVaultKeep() {
        console.log(this.activeKeep.name);
      }
  },
  components: {
    CreateVault
  }
}
</script>


<style scoped>
</style>